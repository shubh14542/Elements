import { Router } from "express";
import auth from "../middleware/auth.js";
import { AddDevice, deleteDevice, getDevice, updateDevice} from "../controllers/device.controller.js";

const deviceRouter = Router()

deviceRouter.post("/add-device",auth,AddDevice)
deviceRouter.get("/get",getDevice)
deviceRouter.put("/update",auth,updateDevice)
deviceRouter.delete("/delete",auth,deleteDevice)
export default deviceRouter