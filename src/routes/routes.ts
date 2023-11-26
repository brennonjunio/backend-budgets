import { Router } from "express";
import ProductsRouter from "./products.routes";
const router: Router = Router();

router.use(ProductsRouter);

export { router };