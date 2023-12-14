import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductGroupService } from './product-group.service';
import { UpdateProductGroupDTO } from './dto/product-group.dto';

@Controller('product-group')
export class ProductGroupController {
  constructor(private service: ProductGroupService) {}
  @Post('/')
  createGroup(@Body() { descricao }) {
    return this.service.createGroup(descricao);
  }
  @Put('/')
  editGroup(@Body() params: UpdateProductGroupDTO) {
    return this.service.editGroup(params);
  }
  @Get('/')
  listGroups() {
    return this.service.listGroups();
  }
  @Delete('/:cdGrupo')
  deleteGroup(@Param('cdGrupo') cdGrupo: number){
return this.service.deleteGroup(cdGrupo);
  }
}
