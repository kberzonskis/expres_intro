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

export function postRegister(req, res) {
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

    console.log(req.body);

    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}  