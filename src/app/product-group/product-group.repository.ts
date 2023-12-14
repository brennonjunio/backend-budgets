import db2 from 'src/database/databasePrisma';
import { UpdateProductGroupDTO } from './dto/product-group.dto';

export class ProductGroupRepository {
  async createGroup(description: string) {
    return await db2.grupo_produtos.create({
      data: { descricao: description },
    });
  }
  async editGroup(params: UpdateProductGroupDTO) {
    return await db2.grupo_produtos.update({
      where: { cd_grupo: params.cdGrupo },
      data: { descricao: params.descricao },
    });
  }
  async listGroup() {
    return await db2.grupo_produtos.findMany({});
  }
  async deleteGroup(cdGrupo: number) {
    return await db2.grupo_produtos.delete({
      where: { cd_grupo: cdGrupo },
    });
  }
}
