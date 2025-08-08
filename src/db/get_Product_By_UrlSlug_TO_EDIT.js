import { connection } from "../db.js";

export async function getAllProducts_SQL_edit(urlSlug) {
   
    try {
        const sql = `SELECT * FROM products
            WHERE products.url_slug = ?;`
            
            
        const [result] = await connection.execute(sql, [urlSlug]);
        return result;
    } catch (err) {
        return [];
    }
}
     