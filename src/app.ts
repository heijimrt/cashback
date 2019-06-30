import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import { Swagger } from './swagger';
import {
  NextFunction,
  Request,
  Response,
  Router
} from 'express';

export default class App {

  public static bootstrap(): App {
    return new App();
  }

  private app: express.Application;

  constructor() {
    this.app = express();
    this.setup();
  }

  public run(
    port: number,
    callback?: () => void
  ): http.Server {
    if (callback) return this.app.listen(port, callback)
    return this.app.listen(port)
  }

  private setup(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    Swagger.setup(this.app);
    this.run(3000);

    // move it
    this.routes();
  }


  // move it
  private routes() {
    const router = express.Router();

    router.get('/', (
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      return response.send('Received a GET HTTP method');
    });

    /**
     * @swagger
     * /teste:
     *  get:
     *    description: this should return all testes
     *    produces:
     *      - application/json
     *    responses:
     *      200:
     *        description: teste
     */
    router.get('/teste', (
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      return response.json({
        data: 'teste'
      });
    });

    this.app.use('/', router);
  }
}
