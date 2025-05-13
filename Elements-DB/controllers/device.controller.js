import controllerModel from "../models/controller.model.js";

export  const AddDeviceController = async (req,res) => {
    try {
        const {name,image } = req.body;

        if(!name || !image){
            return res.status(400).json({
                message : "Enter required field",
                error : true,
                success : false
            })
        }

        const addDevice = new  controllerModel({
            name,
            image
        })

        const saveDevice = await addDevice.save()

        if(!saveDevice){
            return res.status(500).json({
                message : "Failed to add device",
                error : true,
                success : false
            })
        }

        return res.json({
            message : "Device Added Successfully",
            data : saveDevice ,
            success : true,
            error : false 
        })


    } catch (error) {
        return res.status(500).json({
            message : error.message || message ,
            error : true,
            success : false 
        })
    }
}