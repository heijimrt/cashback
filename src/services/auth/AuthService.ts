import {
    Inject,
    Service
} from "@tsed/di";
import { User } from '../../entity/User';
import { getRepository } from 'typeorm';
import JwtTokenService from '../../services/security/JwtTokenService.service';
import { Res } from '@tsed/common';
import * as Express from 'express';

@Service()
export default class AuthService {

    @Inject(JwtTokenService)
    private readonly tokenService: JwtTokenService;

    public async register(
        user: User,
        @Res() response: Express.Response
    ): Promise<Object> {

        const userRepository = getRepository(User);
        try {
          await userRepository.save(user);
        } catch (e) {
            return {
                status: 409,
                message: `username already in use${e}`
            };
        }
        user.password = '';
        const token: string = this.tokenService.generate(user.id);
        response
            .status(201)
            .send({ user, token });
        return {
            status: 201,
            message: { user, token }
        }
    }
}
