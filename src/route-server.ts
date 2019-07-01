import {
    ServerLoader,
    ServerSettings,
    GlobalAcceptMimesMiddleware,
} from "@tsed/common";
import "@tsed/swagger";
import * as cors from 'cors';
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');

@ServerSettings({
  rootDir: __dirname,
  port: 3000,
  mount: {
    "/api": "${rootDir}/controllers/**/*.ts"
  },
  swagger: [
    {
      path: "/api-docs"
    }
  ],
  acceptMimes: ["application/json"]
})
export class RouteServer extends ServerLoader {
  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $onMountingMiddlewares(): void|Promise<any> {
      this
        .use(GlobalAcceptMimesMiddleware)
        .use(cookieParser())
        .use(compress({}))
        .use(cors())
        .use(methodOverride())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({
          extended: true
        }));
  }
}
