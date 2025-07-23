
import express from 'express'; 
import { Page404 } from './pages/public/Page404.js';
import { publicPageRouter } from './routers/publicPageRouter.js'
import { publicApiRouter } from './routers/publicApiRouter.js';
import { adminPageRouter } from './routers/adminPageRouter.js';
import { cookieParser } from './middleware/cookieParser.js';
import { userData } from './middleware/userData.js';




const app = express()
const port = 3200; 


app.use(express.static('public'));  
app.use (express.json());
app.use (cookieParser);
app.use (userData);

 app.use('/', publicPageRouter); 
 app.use('/', publicApiRouter); 
 app.use('/', adminPageRouter);

 app.get('/*error', (req, res) => res.send(new Page404(req).render()));   


app.listen(port, () => {


  console.log(`serveris work in http://localhost:${port}`)


}); 