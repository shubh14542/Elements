import { Router } from "express";
import auth from "../middleware/auth.js";
import { AddDevice, getDevice} from "../controllers/device.controller.js";

const deviceRouter = Router()

deviceRouter.post("/add-device",auth,AddDevice)
deviceRouter.get("/get",getDevice)

export default deviceRouter