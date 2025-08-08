import { connection } from "../db.js";

export async function getAllProductsSQL() {
   
    try {
        const sql = `
            SELECT * FROM products;`;
        const [result] = await connection.execute(sql);
        return result;
    } catch (err) {
        return [];
    }
}
     