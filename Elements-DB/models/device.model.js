import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
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

const deviceModel = mongoose.model('device',deviceSchema)

export default  deviceModel
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