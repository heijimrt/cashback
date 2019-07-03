import {
  Request as ExpressRequest,
  RequestHandler
} from 'express';
import {
  IMiddleware,
  Inject,
  Middleware,
  Req} from "@tsed/common";
import * as expressJwt from "express-jwt";
import * as authConfig from '../../config/auth.json';

@Middleware()
export default class AuthenticationMiddleware implements IMiddleware {

    use(@Req() request: ExpressRequest): RequestHandler {
      return expressJwt({
          secret: authConfig.secret,
          getToken: this.getToken.bind(this),
      }).unless({
          path: ['/api/auth/login', '/api/auth/register'],
          method: ['OPTIONS'],
      });
  }

  private getToken(request: ExpressRequest): any {
      if (request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Bearer') {
          return request.headers.authorization.split(' ')[1];
      } else if (request.query && request.query.token) {
          return request.query.token;
      }

      return null;
  }
}
