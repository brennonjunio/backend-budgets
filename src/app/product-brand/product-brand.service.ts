import { Injectable } from '@nestjs/common';
import { ProductBrandRepository } from './product-brand.repository';
import { GenerateException } from 'src/shared/ReturnsError';

@Injectable()
export class ProductBrandService {
  constructor(private repository: ProductBrandRepository) {}
  async createBrand(description: string) {
    try {
      return await this.repository.createBrand(description);
    } catch (error) {
      GenerateException(error);
    }
  }
}
