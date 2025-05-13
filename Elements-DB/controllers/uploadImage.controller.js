import uploadImageCloudinary from "../utils/uploadImageCloudinary.js"

const uploadImage = async (req, res) => {
        try {
            const file = req.file

            const uploadImage = await uploadImageCloudinary(file)

            return res.json({
                message : "upload image successfully",
                data : uploadImage,
                success : true,
                error : false
            })
        } catch (error) {
            return res.status(500).json({
                message : error.message || error ,
                error : true,
                success : false
            })
        }
}

export default uploadImage;