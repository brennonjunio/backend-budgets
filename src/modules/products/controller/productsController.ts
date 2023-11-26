import { Request, Response } from "express";
import { ProductsServices } from "../services/productsServices";

export const services = new ProductsServices();
class ProductsController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = (await services.getAllProducts());
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ProductsController;