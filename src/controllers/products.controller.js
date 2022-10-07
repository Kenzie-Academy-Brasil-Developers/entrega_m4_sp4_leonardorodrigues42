import { createProductService, deleteProductService, getProductService, listAllProductsService, listProductsByCategoryService, updateProductService } from "../services/products.services"


export const createProductController = async (req, res) => {
    
    try {
        const data = req.body
        const product = await createProductService(data)

        const response = {
            message: "Product created",
            product
        }
        
        return res.status(201).json(response)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }

}

export const listAllProductsController = async (req, res) => {
    try {
        const listProducts = await listAllProductsService()
        
        return res.status(200).json(listProducts)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const getProductController = async (req, res) => {
    try {
        const { id } = req.params
        const product = await getProductService(id)
        
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const productUpdated = await updateProductService(id, data)

        const response = {
            message: "Product updated",
            product: productUpdated
        }
        
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params

        const productDeleted = await deleteProductService(id)
        
        return res.status(204).send()
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const listProductsByCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const listProducts = await listProductsByCategoryService(id)

        return res.status(200).json(listProducts)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}