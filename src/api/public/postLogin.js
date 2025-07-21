import { connection } from "../../db.js"
import { IsValid } from "../../lib/IsValid.js";
import { hash } from "../../lib/hash.js";
import { randomString } from "../../lib/randomString.js";
 
export async function postLogin(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'nonEmptyString',
        password: 'password',
    });
 
    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }
 
    const { username, password } = req.body;
    let userObj = null;
 
    try {
        const sql = `SELECT * FROM users WHERE username = ?;`;
        const [response] = await connection.execute(sql, [username]);
 
        if (response.length === 0 ) {
            return res.status(400).json({
                status: 'error',
                msg: 'Username/password yra neteisingas',
            });
        }
 
        if (response.length > 1 ) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
 
        userObj = response[0];
    } catch (error) {  
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }
 
    const hashedPassword = hash(password + userObj.salt);
     if (hashedPassword !== userObj.password_hash) {
        return res.status(400).json({
            status: 'error',
            msg: 'Username arba password yra neteisingas',
        });
    }
       

    const loginTokenString = randomString() 
       

try {
        const sql = `INSERT INTO login_tokens (user_id, token) VALUES (?, ?);`;
        const [response] = await connection.execute(sql, [userObj.id, loginTokenString]);
 
        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida-nera sukurta eilute',
            });
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }
   
    
 
 
   


    const cookieParams = [ 
        `loginToken= ${loginTokenString}`, 
        'domain=localhost', 
        'max-age=100', 
        'HttpOnly', 
        'path=/', 
        'Secure', 
        'SameSite=Lax',  ];

     return res 
       .set({'Set-Cookie': cookieParams.join('; ') })
       .json ({ 
          status: 'success', 
          msg: 'Tu buvai sekmingai prijungtas prie sistemos (su cookie)', 

       })

   
 
    return res.status(201).json({
        status: 'success',
        msg: 'Registration successful',
    });
}
 
 
 