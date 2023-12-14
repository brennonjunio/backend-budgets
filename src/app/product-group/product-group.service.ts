import { Injectable } from '@nestjs/common';
import { ProductGroupRepository } from './product-group.repository';
import { GenerateException } from 'src/shared/ReturnsError';
import { UpdateProductGroupDTO } from './dto/product-group.dto';

@Injectable()
export class ProductGroupService {
  constructor(private repository: ProductGroupRepository) {}
  async createGroup(description: string) {
    try {
      return await this.repository.createGroup(description);
    } catch (error) {
      GenerateException(error);
    }
  }
  async editGroup(params: UpdateProductGroupDTO) {
    try {
      return await this.repository.editGroup(params);
    } catch (error) {
      GenerateException(error);
    }
  }
  async listGroups() {
    try {
      return await this.repository.listGroup();
    } catch (error) {
      GenerateException(error);
    }
  }
  async deleteGroup(cdGrupo: number) {
    try {
      return await this.repository.deleteGroup(cdGrupo);
    } catch (error) {
      GenerateException(error);
    }
  }
}
