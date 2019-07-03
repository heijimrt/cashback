import {
  Controller,
  Post,
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
import { validate } from "class-validator";
import JwtTokenService from '../../services/security/JwtTokenService.service';

@Controller("/auth")
export class AuthController {

  @Inject(AuthService)
  private readonly authenticationService: IAuthentication;
  @Inject(JwtTokenService)
  private readonly tokenService: JwtTokenService;

  @Post('/register')
  public async register(
    @BodyParams('data') @Required() data: User,
    @Res() response: Express.Response
  ): Promise<any> {

    const { firstName, email, password, surName, document } = data;
    const user: User = new User();
    user.firstName = firstName;
    user.surName = surName;
    user.email = email;
    user.password = password;
    user.document = document;

    /**
     * Isolate it later - Service
     * Logic
     */
    const errors = await validate(user);
    if (errors.length > 0) {
      response.status(400).send(errors);
      return;
    }
    user.hashPassword();

    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (error) {
      response.status(409).send(error);
      return;
    }
    user.password = '';
    const token: string = this.tokenService.generate(user.id);
    response
      .status(201)
      .json({ user, token });
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
    const token: string = this.tokenService.generate(user.id);
    return response.json({ user, token });
  }

}