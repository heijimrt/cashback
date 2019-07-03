import {
  Controller,
  Get,
  Post,
  BodyParams,
  Res,
  PathParams
} from '@tsed/common';
import * as Express from 'express';
import { getRepository } from 'typeorm';
import { Order } from '../../entity/Order';
import { User } from '../../entity/User';

@Controller("/orders")
export class OrderController {

  @Get()
  public async findAll(
    @Res() response: Express.Response
  ): Promise<Express.Response> {
    const orders = await getRepository(Order).find();
    return response.json(orders);
  }

  @Post()
  public async create(
    @BodyParams('id') userId: string,
    @Res() response: Express.Response
  ) {
    console.log(userId);
    const user = await getRepository(User).findOneOrFail({ where: { id:userId } });

    const order = new Order();
    order.user = user;
    await getRepository(Order).save(order);

    console.log('tesssssssssteeeeeeeee', user);
    return response.json({
      user,
      version: 1
    });
  }

  @Get("/:id")
  public async get(
    @PathParams("id") id: string,
    @Res() response: Express.Response
  ): Promise<Express.Response> {
    const order = await getRepository(Order).findOneOrFail({ where: { id } });
    const user = await order.user;
    return response.json({payload: order });
  }
}