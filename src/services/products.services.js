import database from "../database"

export const createProductService = async (data) => {
    try {
        const res = await database.query(
            `INSERT INTO 
                products (name, price, category_id)
            VALUES ($1, $2, $3) RETURNING *;
            `, [data.name, data.price, data.category_id ? data.category_id : null])

            return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const listAllProductsService = async () => {
    try {
        const res = await database.query("SELECT * FROM products;", [])

        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

export const getProductService = async (id) => {
    try {
        const res = await database.query("SELECT * FROM products WHERE id = $1;", [id])

        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const updateProductService = async (id, data) => {
    try {
        if (data.id){
            delete data['id']
        }

        let query = "UPDATE products SET "
        const keys = Object.keys(data)
        const values = Object.values(data)


        keys.forEach((key, index) => {
            query += `${key} = \$${index+1}, `
        })

        query = query.slice(0, -2)

        query += ` WHERE id = \$${keys.length+=1} RETURNING *;`

        const res = await database.query(query, [...values, id])

        if (res.rowCount === 0){
            throw "User not found"
        }
        
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteProductService = async (id) => {
    try {
        const res = await database.query("DELETE FROM products WHERE id = $1 RETURNING *", [id])
        
        if (res.rowCount === 0) {
            throw new Error("Category not found") 
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const listProductsByCategoryService = async (id) => {
    try {
        const res = await database.query(
            `SELECT 
                products.name, price, categories.name as category 
            FROM products 
                JOIN categories
                ON products.category_id = $1;
            `, [id])

        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

