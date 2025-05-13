// import mongoose from "mongoose";

// const category=Schema = new mongoose.Schema({
//     name : {
//         type : String,
//         default : ""
//     },
//     image : {
//         type : String,
//         default : ""
//     }
// },{
//     timestamps : true
// })

// const categoryModel = mongoose.model('Category',categorySchema)

// export default  categoryModel
import mongoose from "mongoose";

const controller=Schema = new mongoose.Schema({
    name : {
        type : String,
        default : ""
    },
    image : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const controllerModel = mongoose.model('controller',controllerSchema)

export default  controllerModel