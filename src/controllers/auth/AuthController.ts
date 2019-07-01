import { Controller, Post } from '@tsed/common';
import * as Express from 'express';

@Controller("/auth")
export class ProductController {

  @Post('/register')
  public async register(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {

    return response
      .status(200)
      .json({
        data: 'register'
      });
  }

  @Post('/login')
  public async login(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {

    return response
      .status(200)
      .json({
        data: 'login'
      });
  }
}