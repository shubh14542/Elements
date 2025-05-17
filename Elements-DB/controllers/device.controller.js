import { error } from "console";
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
        const {_id, name, image} = req.body 

        const update = await deviceModel.updateOne({
            _id : _id,
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

export const deleteDevice = async (req,res) =>{
    try {
        const { _id } = req.body

        const checkDevice = await deviceModel.findOne({
            device : {
                "$in" : [_id]
            }
         }).countDocuments()

         if(checkDevice > 0) {
            return res.status(400).json({
                    message : "Device is in use, cannot delete it ",
                    error : true,
                    success : false
            })
         }

         const deleteDevice = await deviceModel.deleteOne({_id : _id})

         return res.json({
            message : "Device Deleted Successfully",
            data : deleteDevice,
            error : false,
            success : true
         })

    } catch (error) {
        res.status(500).json({
            message : error.message || message ,
            error : true,
            success : false
        })
    }
}