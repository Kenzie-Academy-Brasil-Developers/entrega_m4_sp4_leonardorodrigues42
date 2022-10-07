import { Router } from "express";
import { createProductController, getProductController, listAllProductsController, updateProductController, deleteProductController, listProductsByCategoryController } from '../controllers/products.controller';

const productsRouter = Router()

productsRouter.post("", createProductController)
productsRouter.get("", listAllProductsController)
productsRouter.get("/:id", getProductController)
productsRouter.patch("/:id", updateProductController)
productsRouter.delete("/:id", deleteProductController)
productsRouter.get("/category/:id", listProductsByCategoryController)

export default productsRouter