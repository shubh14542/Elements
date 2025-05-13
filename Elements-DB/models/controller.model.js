import mongoose from "mongoose";

const controllerSchema = new mongoose.Schema({
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

const controllerModel = mongoose.model('Controller',controllerSchema)

export default  controllerModel
// import mongoose from "mongoose";

// const controller=Schema = new mongoose.Schema({
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

// const controllerModel = mongoose.model('controller',controllerSchema)

// export default  controllerModel