import express from 'express';
import { PageDashboard } from '../pages/admin/Dashboard.js';
import { AllProducts } from '../pages/admin/products/AllProducts.js'
import { NewProducts } from '../pages/admin/products/NewProducts.js'
import { AllProductsEdit } from '../pages/admin/products/ProductsEdit.js';



export const adminPageRouter = express.Router();

adminPageRouter.get ('/', async (req, res) => res.send( await new PageDashboard(req).render()));


adminPageRouter.get ('/products', async (req, res) => res.send( await new AllProducts(req).render()));
adminPageRouter.get ('/products/new', async(req, res) => res.send( await new NewProducts(req).render()));
adminPageRouter.get ('/products/:urlSlug', async (req, res) => res.send( await new NewProducts(req).render()));
adminPageRouter.get ('/products/:urlSlug/edit', async (req, res) => res.send( await new AllProductsEdit(req).render()));
