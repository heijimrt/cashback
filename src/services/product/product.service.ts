import { Product } from '../../entity/Product';
import { getRepository } from 'typeorm';

export class ProductService {

  public async getAll(): Promise<Array<Product>> {
    return await getRepository(Product).find();
  }
}