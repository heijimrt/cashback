import { Controller, Get } from '@tsed/common';
import * as Express from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../../entity/Product';

@Controller("/products")
export class ProductController {

  @Get()
  public async findAll(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {

    const products: Array<Product> = await getRepository(Product).find();
    return response
      .status(200)
      .json({
        data: products
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