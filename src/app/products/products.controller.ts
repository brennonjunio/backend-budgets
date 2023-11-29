import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}
  @Get('getProducts')
  getProducts() {
    return this.service.getProducts();
  }
}
