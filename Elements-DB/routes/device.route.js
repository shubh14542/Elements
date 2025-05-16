import { Router } from "express";
import auth from "../middleware/auth.js";
import { AddDevice, getDevice, updateDevice} from "../controllers/device.controller.js";

const deviceRouter = Router()

deviceRouter.post("/add-device",auth,AddDevice)
deviceRouter.get("/get",getDevice)
deviceRouter.put("/update",auth,updateDevice)
export default deviceRouter