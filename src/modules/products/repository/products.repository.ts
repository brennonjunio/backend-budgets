import db from '../../../database/connection'
export class ProductsRepository {
    async getAllProducts(){
        return await (db.execute('select * from products' ));
    }
}