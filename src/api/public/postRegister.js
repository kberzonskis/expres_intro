import { connection } from "../../db.js"
import { IsValid } from "../../lib/IsValid.js";
import { randomString } from "../../lib/randomString.js";
import { hash } from "../../lib/hash.js";

export async function postRegister(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        email: 'email',
        password: 'password',
    });
 
    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

   
    const { username, email, password } = req.body;
 

    try {
        const sql = `SELECT * FROM users WHERE username = ? OR email = ?;`;
        const [response] = await connection.execute(sql, [username, email]);
 
                if (response.length>0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Jau toks vartotojas uzregistruotas.. bandyti rinktis kita',
            });
        }
            
    }
    
    catch (error) {
          console.log(error) 
            return res.status(500). json ({ 
                status: 'error', 
                msg: 'Serverio klaida',
            })
     } 
    
    
    
   const salt = randomString(10);
   const passwordHash = hash(password+salt); 
 
    try {
        const sql = `INSERT INTO users (username, email,salt, password_hash) VALUES (?,?, ?, ?);`;
        const [response] = await connection.execute(sql, [ username, email, salt,passwordHash]);
 
                if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }

    }
    
    catch (error) {
        if (error.code === 'ER_DUP_ENTRY') { 
            return res.status(500). json ({ 
                status: 'error', 
                msg: 'kartojasi irasas'
            })
     }      
  
    console.log(error);
    return res.status(500).json({
        status: 'success',
        msg: 'serviso klaida',
    })
    }


    return res.status(201).json({
        status: 'success',
        msg: 'Registration successful',
    })



}
