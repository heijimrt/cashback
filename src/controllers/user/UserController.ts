import {
  Controller,
  Get,
  Post,
  Delete,
  BodyParams,
  Required
} from '@tsed/common';
import * as Express from 'express';
import { getRepository } from 'typeorm';
import { validate } from "class-validator";
import { User } from '../../entity/User';

@Controller("/users")
export class UserController {

  @Get()
  public async findAll(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {
    const users: Array<User> = await getRepository(User).find();
    return response.json({ data: users });
  }

  @Get("/:id")
  public async get(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {
    const user: User = await getRepository(User).findOneOrFail(request.params.id);
    return response.json({ data: user });
  }

  @Delete("/")
  public async delete(
    @BodyParams('id') @Required() id: string
  ) {
    return id;
  }
}
