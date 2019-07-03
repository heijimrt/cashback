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

  @Post()
  public async create(
    request: Express.Request,
    response: Express.Response
  ) {
    const { firstName, email, password, surName, document } = request.body.data;
    const user: User = new User();
    user.firstName = firstName;
    user.surName = surName;
    user.email = email;
    user.password = password;
    user.document = document;

    //Validade if the parameters are ok
    const errors = await validate(user);
    if (errors.length > 0) {
      response.status(400).send(errors);
      return;
    }
    console.log(user);
    //Hash the password, to securely store on DB
    user.hashPassword();

    //Try to save. If fails, the username is already in use
    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      response.status(409).send(`username already in use${e}`);
      return;
    }

    //If all ok, send 201 response
    response
      .status(201)
      .send("User created");
  }

  @Delete("/")
  public async delete(
    @BodyParams('id') @Required() id: string
  ) {
    return id;
  }
}
