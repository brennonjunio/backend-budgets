import db from 'src/database/config';

export class ProductsRepository {
  async getProducts() {
    return await db.execute('select * from produtos');
  }
}
