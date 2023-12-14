import { Body, Controller, Post } from '@nestjs/common';
import { ProductBrandService } from './product-brand.service';

@Controller('product-brand')
export class ProductBrandController {
  constructor(private service: ProductBrandService) {}
  @Post('/')
  createBrand(@Body() { descricao }) {
    return this.service.createBrand(descricao);
  }
}
