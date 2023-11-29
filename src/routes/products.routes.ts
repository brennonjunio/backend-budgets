import  ProductsController  from "../modules/products/controller/productsController";
import { Router } from "express";

const ProductsRouter = Router();

ProductsRouter.get("/products", new ProductsController().getAllProducts);

export default ProductsRouter;