
import express from 'express'; 
import { Page404 } from './pages/public/Page404.js';
import { publicPageRouter } from './routers/publicPageRouter.js'
import { publicApiRouter } from './routers/publicApiRouter.js';
import { adminPageRouter } from './routers/adminPageRouter.js';
import { cookieParser } from './middleware/cookieParser.js';
import { userData } from './middleware/userData.js';
import { adminApiRouter } from './routers/adminApiRouter.js';




const app = express()
const port = 3200; 


app.use(express.static('public'));  
app.use (express.json());
app.use (cookieParser);
app.use (userData);

 app.use('/', publicPageRouter); 
 app.use('/api', publicApiRouter); 

 app.use('/admin', adminPageRouter);
 app.use('/api/admin', adminApiRouter); //API ADMIN

 app.use((err,req,res,next)=> {
  console.log(err);
    return res.status(500).send('Server error')})


 app.get('/*error', (req, res) => res.send(new Page404(req).render()));   


app.listen(port, () => {


  console.log(`serveris work in http://localhost:${port}`)


}); 