/*import { IsValid } from "../../lib/IsValid";

export function postRegister(req,res) { 
    const [err,msg] = IsValid.fields(req.body, { 
       username: 'username', 
    password: 'password',
    })

    if (err) { return res.json ({
     status: 'error', 
     msg:msg,

    }) }
} 


{   console.log(req.body);

    
    
    return res.json( {
    status: 'success',
    msg: 'Sekminga registracija',
}

);
}
*/ 




import { IsValid } from "../../lib/IsValid.js";
import { connection } from "../../db.js";

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
const { username, email, password} = req.body;

try { const sql = 'SELECT * FROM users;';
    const response = await connection.query(sql)


} catch (error) { }

    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}  