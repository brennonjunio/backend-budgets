import db from 'src/database/config';

export class ProductsRepository {
  async getProducts() {
    const result =  (await db.execute('select * from produtos'))[0];

    return result
  }
}
