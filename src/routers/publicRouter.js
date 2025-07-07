import express from 'express'

import { PageHome } from '../pages/PageHome.js';
import { PageAbout } from '../pages/PageAbout.js';
import { PageRegister } from '../pages/PageRegister.js';
import { PageServices } from '../pages/PageServices.js';
import { PageLogin } from '../pages/PageLogin.js';

export const publicRouter = express.Router()

publicRouter.get('/', (req, res) => res.send(new PageHome(req).render()));
publicRouter.get('/about', (req, res) => res.send(new PageAbout(req).render()));
publicRouter.get('/register', (req, res) => res.send(new PageRegister(req).render()));  
publicRouter.get('/services', (req, res) => res.send(new PageServices(req).render()));
publicRouter.get('/login', (req, res) => res.send(new PageLogin(req).render()));