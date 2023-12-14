import { Module } from '@nestjs/common';
import { ProductBrandService } from './product-brand.service';
import { ProductBrandController } from './product-brand.controller';
import { ProductBrandRepository } from './product-brand.repository';

@Module({
  providers: [ProductBrandService,ProductBrandRepository],
  controllers: [ProductBrandController]
})
export class ProductBrandModule {}
