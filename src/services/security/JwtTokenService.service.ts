import {
  Service
} from "@tsed/di";
import * as jwt from 'jsonwebtoken';
import * as authConfig from '../../config/auth.json';

@Service()
export default class JwtTokenService {

  public generate(id: string|number): string {
    return jwt.sign({ id }, authConfig.secret, { expiresIn: 86400 })
  }
}
