import { createCategoryService, deleteCategoryService, getCategoryService, listAllCategoriesService, updateCategoryService } from "../services/categories.services"

export const createCategoryController = async (req, res) => {
    
    try {
        const { name } = req.body
        const category = await createCategoryService(name)

        const response = {
            message: "Category created",
            category
        }

        return res.status(201).json(response)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }

}

export const listAllCategoriesController = async (req, res) => {
    try {
        const listCategories = await listAllCategoriesService()

        return res.status(200).json(listCategories)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const getCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const category = await getCategoryService(id)

        return res.status(200).json(category)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }

}
export const updateCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const categoryUpdated = await updateCategoryService(id, data)

        const response = {
            message: "Category updated",
            category: categoryUpdated
        }

        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const deleteCategory = await deleteCategoryService(id)

        return res.status(204).send()
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
