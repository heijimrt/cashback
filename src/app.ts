import * as express from 'express';
import { RouteServer } from './route-server';

export default class App {

  public static bootstrap(): App {
    return new App();
  }

  private app: express.Application;

  constructor() {
    this.app = express();
    this.setupRouteSystem();
  }

  private setupRouteSystem(): void {
    new RouteServer().start();
  }
}
