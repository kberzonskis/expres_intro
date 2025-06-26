
import express from 'express'; 


import { PageHome } from './pages/PageHome.js';
import { PageAbout } from './pages/PageAbout.js';
import { Page404 } from './pages/Page404.js';
import { PageRegister } from './pages/PageRegister.js';

const app = express()
const port = 3200; 


app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => res.send(new PageHome(req).render()));
app.get('/about', (req, res) => res.send(new PageAbout(req).render()));
app.get('/register', (req, res) => res.send(new PageRegister(req).render()));  
app.get('/*error', (req, res) => res.send(new Page404(req).render()));   


app.listen(port, () => {


  console.log(`serveris work in http://localhost:${port}`)

}); 