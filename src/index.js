
import express from 'express'; 


import { PageHome } from './pages/PageHome.js';
import { PageServices } from './pages/PageServices.js';
import { PageAbout } from './pages/PageAbout.js';
import { Page404 } from './pages/Page404.js';
import { PageRegister } from './pages/PageRegister.js';
import { PageLogin } from './pages/PageLogin.js';
import { publicRouter } from './routers/publicRouter.js';
import { publicApiRouter } from './routers/publicApiRouter.js';


const app = express()
const port = 3200; 


app.use(express.static('public')); // Serve static files from the 'public' directory
app.use (express.json())

 app.use('/', publicRouter); 
 app.use('/', publicApiRouter); 

 app.get('/*error', (req, res) => res.send(new Page404(req).render()));   


app.listen(port, () => {


  console.log(`serveris work in http://localhost:${port}`)


}); 