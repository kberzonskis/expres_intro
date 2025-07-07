import mysql from 'mysql2/promise'

export const connection = mysql.createConnection({ 
    
    host: 'localhost', 
    port: 3200,
    database: 'expres_intro', 
    user: 'root',
    password: '',

})