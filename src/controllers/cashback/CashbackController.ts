import { Controller, Get } from '@tsed/common';
import * as Express from 'express';
import { getRepository } from 'typeorm';

@Controller("/cashback")
export class CashBackController {

  @Get()
  public async findAll(
    request: Express.Request,
    response: Express.Response
  ) {

  }

  @Get("/:id")
  public async get(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {

    return response.json({payload: '1'});
  }
}