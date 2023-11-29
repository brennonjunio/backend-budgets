import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { GenerateException } from 'src/shared/ReturnsError';
@Injectable()
export class ProductsService {
  constructor(private repository: ProductsRepository) {}
  async getProducts() {
    try {
      return await this.repository.getProducts();
    } catch (error) {
      GenerateException(error);
    }
  }
}
