import categoryModel from "../models/category.model.js";

 export  const addCategoryController = async (req, res) =>{
    try {
        const {name,image} = req.body

        if(!name || !image){
            return res.status(400).json({
            message: "Enter required field",
            error: true,
            success : false
            })
        }
        
        const addCategory = new categoryModel({
            name,
            image
        })

       

        const saveCategory = await addCategory.save()

         if(!saveCategory){
            return res.status(500).json({
                message : "Failed to add category",
                error : true,
                success : false
            })
        }

        return res.json({
            message : "Category Added Successfully",
            data : saveCategory,
            success : true,
            error : false
        })

    } catch (error) 
    {
       return res.status(500).json({
            message: error.message || error,
            error: true,
            success : false


        })
    }
}

export const getCategoryController = async (req, res) => {
    try {
        
        const data = await categoryModel.find()

        return response.json({
            data : data,
            error : false,
            success : true
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success : false


        })
    }
}