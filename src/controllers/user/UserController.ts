import { Controller, Get } from "@tsed/common";
import * as Express from "express";

@Controller("/users")
export class UserController {

  @Get()
  public async findAll(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {
    return response.json({ data: 'users' });
  }

  @Get("/:id")
  public async get(
    request: Express.Request,
    response: Express.Response
  ): Promise<Express.Response> {
      return response.json({
        id: request.params.id,
        name: "test"
      });
  }
}