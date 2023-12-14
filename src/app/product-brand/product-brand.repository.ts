import db2 from 'src/database/databasePrisma';

export class ProductBrandRepository {
  async createBrand(description: string) {
    return await db2.marcas.create({
      data: { descricao: description },
    });
  }
}
