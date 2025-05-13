import { Router } from "express";
import auth from "../middleware/auth.js";
import { AddDeviceController } from "../controllers/device.controller.js";

const deviceRouter = Router()

deviceRouter.post("/add-Device",auth,AddDeviceController)

export default deviceRouter