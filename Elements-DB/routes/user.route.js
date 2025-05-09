import { Router } from "express"; 
import { registerUserController, verifyEmailController, loginController, logOutController, uploadAvtar, updateUserDetails, forgotPasswordController, verifyForgotPasswordOtp, resetPassword, refreshToken, userDetails } from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
const userRouter = Router()

userRouter.post('/register',registerUserController) 
userRouter.post('/verify-email', verifyEmailController)
userRouter.post('/login', loginController)
userRouter.get('/logout',auth,logOutController)
userRouter.put('/upload-avtar',auth,upload.single('avtar'),uploadAvtar)
userRouter.put('/update-user',auth,updateUserDetails)
userRouter.put('/forgot-password',forgotPasswordController)
userRouter.put('/otp-verification',verifyForgotPasswordOtp)
userRouter.put('/reset-password',resetPassword)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)
export default userRouter