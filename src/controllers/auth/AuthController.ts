import {
  Controller,
  Post,
  QueryParams,
  Inject,
  BodyParams,
  Required,
  Res
} from '@tsed/common';
import * as Express from 'express';
import { User } from '../../entity/User';
import AuthService from '../../services/auth/AuthService';
import IAuthentication from '../../interfaces/IAuthentication';
import { getRepository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as authConfig from '../../config/auth.json';

@Controller("/auth")
export class AuthController {

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
      @BodyParams('email') email: string,
      @BodyParams('password') password: string,
      @Res() response: Express.Response
  ) {

    const user = await getRepository(User).findOne({ where: { email }});

    if (!user) {
      return response.status(400).send({ error: 'User not found' });
    }

    if (!await user.checkIfUnencryptedPasswordIsValid(password)) {
      return response.status(400).send({ error: 'Invalid Password' });
    }

    user.password = '';
    const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400 });

    return response.json({ user, token });
  }

}