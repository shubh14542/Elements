import deviceModel from "../models/device.model.js";

export  const AddDevice = async (req,res) => {
    try {
        const {name,image } = req.body;

        if(!name || !image){
            return res.status(400).json({
                message : "Enter required field",
                error : true,
                success : false
            })
        }

        const addDevice = new  deviceModel({
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

export const getDevice = async (req,res) => {
    try {
        const data = await deviceModel.find()

        return res.json({
            data : data,
            error : false,
            success : true
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || message ,
            error : true,
            success : false
        })
    }
}

export const updateDevice = async (req,res) =>{
    try {
        const {deviceId, name, image} = req.body 

        const update = await deviceModel.updateOne({
            _id : deviceId,
            },{
                name,
                image        
            })

            return res.status(200).json({
                message : "Device Updated Successfully",
                data : update,
                error : false,
                success : true
            })

    } catch (error) {
        return res.status(500).json({
            message : error.message || message ,
            error : true,
            success : false
        })
    }
}