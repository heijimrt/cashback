import { Controller, Get } from '@tsed/common';
import * as Express from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../../entity/Product';
import { ProductService } from '../../services/product/product.service';

@Controller("/products")
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Get()
  public async findAll(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {

    return this.productService
        .getAll()
        .then((products: Array<Product>) => {
          return response
              .status(200)
              .json({ data: products });
        });
  }

  @Get("/:id")
  public async get(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {

    const product: Product = await getRepository(Product)
      .findOneOrFail(request.params.id);
    const payload = {
      id: request.params.id,
      name: product
    };
    return response.json(payload);
  }
}