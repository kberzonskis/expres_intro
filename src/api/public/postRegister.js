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

try { const sql = 'INSERT INTO users(username, email, password) VALUES (?,?,?);';
    const response = await connection.execute(sql,[username, email, password])
  console.log(response);
  

} catch (error) {console.log(error) }
   ;
      

    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}  