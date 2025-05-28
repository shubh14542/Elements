import { Router } from "express"; 
import auth from "../middleware/auth.js";
import { addCategoryController } from "../controllers/category.controller.js"


const categoryRouter = Router();

categoryRouter.post("/add-category",auth,addCategoryController)

export default categoryRouter