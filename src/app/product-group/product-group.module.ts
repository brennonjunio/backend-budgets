import { Module } from '@nestjs/common';
import { ProductGroupService } from './product-group.service';
import { ProductGroupController } from './product-group.controller';
import { ProductGroupRepository } from './product-group.repository';

@Module({
  providers: [ProductGroupService,ProductGroupRepository],
  controllers: [ProductGroupController]
})
export class ProductGroupModule {}
