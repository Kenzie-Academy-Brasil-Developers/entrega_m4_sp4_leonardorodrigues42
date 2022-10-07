import { Router } from "express"
import { createCategoryController, deleteCategoryController, getCategoryController, listAllCategoriesController, updateCategoryController } from "../controllers/categories.controllers"

const categoriesRouter = Router()

categoriesRouter.post("", createCategoryController)
categoriesRouter.get("", listAllCategoriesController)
categoriesRouter.get("/:id", getCategoryController)
categoriesRouter.patch("/:id", updateCategoryController)
categoriesRouter.delete("/:id", deleteCategoryController)

export default categoriesRouter