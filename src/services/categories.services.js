import database from "../database"

export const createCategoryService = async (name) => {

    try {
        const res = await database.query("INSERT INTO categories (name) VALUES ($1) RETURNING *;", [name])
        
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const listAllCategoriesService = async () => {

    try {
        const res = await database.query("SELECT * FROM categories;", [])

        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

export const getCategoryService = async (id) => {

    try {
        const res = await database.query("SELECT * FROM categories WHERE id = $1;", [id])

        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const updateCategoryService = async (id, updatedCategory) => {

    try {
        const res = await database.query("UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;", [updatedCategory.name, id])

        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteCategoryService = async (id) => {

    try {
        const res = await database.query("DELETE FROM categories WHERE id = $1 RETURNING *", [id])
        
        if (res.rowCount === 0) {
            throw new Error("Category not found") 
        }
        
    } catch (error) {
        throw new Error(error)
    }
}

