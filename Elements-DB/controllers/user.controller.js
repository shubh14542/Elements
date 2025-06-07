import userModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import verifyEmailTemplate from '../utils/verifyEmailTemplate.js'
import sendEmail from '../config/sendEmail.js'
import generateAccessToken from '../utils/generateAccessToken.js'
import generateRefreshToken from '../utils/generateRefreshToken.js'
import uploadImageCloudinary from '../utils/uploadImageCloudinary.js'
import generateOTP from '../utils/generateOTP.js'
import forgotPasswordTemplate from '../utils/forgotPasswordTemplate.js'
import jwt from 'jsonwebtoken'

export async function registerUserController(req,res){
    try {
        const { name,email, password} = req.body 

        if(!name || !email || !password){
            return res.status(400).json({
                message : "Provide name , email and password",
                error : true,
                success : false
            })
        }

        const user = await userModel.findOne({email})

        if(user){
            return res.json({
                message : "Already registered user",
                error : true,
                success : false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)
        const payload = {
            name,
            email,
            password: hashPassword
        }

        const newUser = new userModel(payload)
        const save = await  newUser.save()

        const verifyEmailUrl = `${process.env.FRONTEND_URL}/verfiy-email?code=${save?._id}`

        await sendEmail ({
                sendTo : email ,
                subject : "Verify email from BinkeyIt",
                html : verifyEmailTemplate({
                    name,
                    url : verifyEmailUrl
                })
        })
        
        return res.json({
            message : "User registered successfully",
            error : false,
            success : true,
            data : save
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export async function verifyEmailController(req,res){
    try {
        const {code} = req.body

        const user = await userModel.findOne({_id : code })

        if(!user){
            return res.status(400).json({
                message : "Invalid Code",
                error : true,
                success : false
            })
        }

        const updateUser = await userModel.updateOne({_id : code },{
            verify_email : true,
        })
            return res.json({
                message : "Email Verified Successfully",
                success : true,
                error : false
            })
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : false,
            success : true
        })
    }
}

//login controller 

export async function loginController(req,res){
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({
                message : "Provide email and password",
                error : true,
                success : false
            })
        }

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(400).json({
                message : "User not register",
                error : true,
                success : false 
            })
        }

        if(user.status !== "Active"){
            return res.status(400).json({
                message : "Contact to Admin",
                error  : true,
                success : false 
            })
        }

        const checkPassword =  await bcryptjs.compare(password,user.password)
            
        if(!checkPassword){
            return res.status(400).json({
                message : "check your password",
                error : true, 
                success : false 
            })
        }

        const accessToken = await generateAccessToken(user._id)
        const refreshToken = await generateRefreshToken(user._id)

        const updateUser = await userModel.findByIdAndUpdate(user?._id,{
            last_login_date : new Date()
        })

        const cookiesOption = {
            httpOnly : true ,
            secure : true,
            sameSite : "None"
        }

        res.cookie('accessToken',accessToken, cookiesOption)
        res.cookie('refreshToken',refreshToken, cookiesOption)

        return res.json({
            message : "Login successfull",
            error : false,
            success : true,
            data : {
                accessToken,
                refreshToken
            }
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message|| error,
            error : true,
            success : false
        })
    }
}

//logout controller

export async function logOutController(req,res){
    try {
        const userid = req.userId  //middleware
        const cookiesOption = {
            httpOnly : true ,
            secure : true,
            sameSite : "None"
        }

        res.clearCookie('accessToken', cookiesOption)
        res.clearCookie('refreshToken',cookiesOption)

        const removeRefreshToken = await userModel.findByIdAndUpdate(userid,{
            refresh_token : ""
        })

        return res.json({
            message : "Logout Successfully",
             error : false,
             success : true
        })
       
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}
// upload user avtar
export async function uploadAvtar(req,res){
    try {
        const userId = req.userId //auth middleware
        const image = req.file // multer middleware
        const upload =  await uploadImageCloudinary(image)

        const updateUser = await userModel.findByIdAndUpdate(userId,{
            avtar : upload.url
        })

        return res.json({
            message : "upload image",
            error : false,
            success : true,
            data : {
                _id : userId,
                avtar : upload.url
            }
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true, 
            success : false
        })
    }
}

// update user details 

export async function updateUserDetails (req,res){
    try {
        const userId = req.userId // auth middleware 
        const {name , email, password, mobile} = req.body

        let hashPassword = " "

        if(password){
            const salt = await bcryptjs.genSalt(10)
            hashPassword = await bcryptjs.hash(password, salt )
        }

        const updateUser = await userModel.updateOne({_id : userId},{
            ...(name && { name : name }) ,
            ...(email && { email : email }) ,
            ...(mobile && { mobile : mobile }) ,
            ...(password && { password : hashPassword }) ,
        })

        return res.json({
            message : "updated user successfully ",
            error : false,
            success : true,
            data : updateUser
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error ,
            error : true,
            success : false
        })
    }
}

// forgot password not login 

export async function forgotPasswordController(req,res){
    try {
        const {email } = req.body

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(400).json({
                message : "Email not valid",
                error : true,
                success :false
            })
        }

        const otp = generateOTP()
        const expireTime = new Date() + 60*60*1000
        const update = await userModel.findByIdAndUpdate(user._id,{
            otp_verification : otp,
            forgot_password_expiry : new Date(expireTime).toISOString()
        })

        await sendEmail({
            sendTo : email,
            subject : "Forgot password from Elements",
            html : forgotPasswordTemplate({
                name : user.name,
                otp : otp
            })
        })

        return res.json({
            message : "Check your email",
            error : false,
            success : true
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error ,
            error : true,
            success : false
        })
    }
}

// verify forgot password otp 

export async function verifyForgotPasswordOtp(req,res){
    try {
        const {email , otp } = req.body 
        const user = await userModel.findOne({email})

        if(!email || !otp) {
            res.status(400).json({
                message : "provide required field",
                error : true,
                success : false
            })
        }

        if(!user){
            return res.status(400).json({
                message : "Email not valid",
                error : true,
                success :false
            })
        }

        const currentTime = new Date().toISOString()

        if(user.forgot_password_expiry < currentTime) {
            return res.status(400).json({
                message : "expired",
                error : true,
                success : false
            })
        }

        if(otp !== user.otp_verification){
            return res.status(400).json({
                message : "invalid otp",
                error : true,
                success : false
            })
        }

        //if otp is not expired 
        // otp === user.forgot_password_otp

        const updateUser = await userModel.findByIdAndUpdate(user?._id,{
            otp_verification : "",
            forgot_password_expiry : ""
        })

        return res.json({
            message : "otp verification successful",
            error : false,
            success : true
        })

     } catch (error) {
        return res.status(500).json({
            message : error.message || error ,
            error : true,
            success : false
        })
    }
}

//reset password

export async function resetPassword(req,res){
    try {
        const {email , newPassword, confirmPassword} = req.body 

        if(!email || !newPassword || !confirmPassword){
            return res.status(400).json({
                message : "provide required field",
                error : true,
                success : false
            })
        }

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(400).json({
                message : "email is not available",
                error : true,
                success : false
            })
        }
            if(newPassword !==confirmPassword){
                    return res.status(400).json({
                        message : "newPassword and confirmPassword not same",
                        error : true,
                        success : false
                    })
            }

            const salt = await bcryptjs.genSalt(10)
            const hashPassword = await bcryptjs.hash(newPassword, salt)

            const update = await userModel.findOneAndUpdate(user._id,{
                password : hashPassword
            })

            return res.json({
                message : "password updated successfully",
                error : false,
                success : true
            })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true, 
            success : false
        })
    }
}

//refresh token controller 

export async function refreshToken(req,res){
    try {
        const refreshToken = req.cookies.refreshToken || req?.headers?.authorization?.split("")[1] 

        if(!refreshToken){
            return res.status(401).json({
                message : "invalid token",
                error : true,
                success : false 
            })
        }

        const verifyToken = await jwt.verify(refreshToken,process.env.SECRET_KEY_REFRESH_TOKEN)

        if(!verifyToken){
            return response.status(401).json({
                message : "token is expired"
            })
        }

        const userId = verifyToken?._id
        const newAccessToken = await generateAccessToken(userId)
        const cookieOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        return res.json({
            message : "new access token generated",
            error : false,
            success : true
        })

        response.cookie('accessToken',newAccessToken,cookiesOption)

    } catch (error) {
        return res.status(500).json({
            message : error.message || error ,
            error : true,
            success : false
        })
    }
}

//get login user details
export async function userDetails(req,res){
    try {
        const userId = req.userId
        const user = await userModel.findById(userId).select('-password -refresh_token -forgot_password_otp -forgot_password_otp -forgot_password_expiry')

        console.log(userId)
        return res.json({
            message : 'user details',
            data : user,
            error : false,
            success : true
        })
    } catch (error) {
        return res.status(500).json({
            message : "something is wrong",
            error : true,
            success : false
        })
    }
}

