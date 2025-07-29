import express from 'express';
import { PageDashboard } from '../pages/admin/Dashboard.js';
import { NewProducts } from '../pages/admin/products/NewProducts.js'


export const adminPageRouter = express.Router();

adminPageRouter.get ('/admin', (req, res) => res.send(new PageDashboard(req).render()));
adminPageRouter.get ('/admin/newproducts', (req, res) => res.send(new NewProducts(req).render()));

