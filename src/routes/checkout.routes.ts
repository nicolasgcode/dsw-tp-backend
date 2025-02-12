import { Router } from 'express';
import { checkout } from '../controllers/stripe.controller.js';

export const checkoutRouter = Router();

checkoutRouter.post('/', checkout);
