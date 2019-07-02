import {
  Controller,
  Post,
  QueryParams,
  Inject,
  BodyParams,
  Required
} from '@tsed/common';
import * as Express from 'express';
import { User } from '../../entity/User';
import { NotFound } from 'ts-httpexceptions';
import { UserToken } from '../../interfaces/UserToken';
import AuthService from '../../services/auth/AuthService';
import IAuthentication from '../../interfaces/IAuthentication';

@Controller("/auth")
export class ProductController {

  @Inject(AuthService)
  private readonly authenticationService: IAuthentication;

  @Post('/register')
  public async register(
    @BodyParams('data') @Required() user: User
  ): Promise<any> {
    this.authenticationService
        .register(user)
        .then(response => {
            return response;
        })
        .catch(err => {
          // to do
        });

  }

  @Post('/login')
  public async login(
      @QueryParams('username') username: string,
      @QueryParams('password') password: string,
  ): Promise<UserToken> {
      const user = await this.authenticationService.retrieveUserByCredentials(
          username,
          password
      );

      if (!(user instanceof User)) {
          throw new NotFound("User not found by credentials");
      }

      return {
          token: await this.authenticationService.getUserToken(user),
      };
  }

}