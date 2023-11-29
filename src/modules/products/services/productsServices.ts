import { ProductsRepository } from "../repository/products.repository";

export class ProductsServices {
private repository: ProductsRepository = new ProductsRepository();

  async getAllProducts(): Promise<any> {
    return await this.repository.getAllProducts();
  }
}

