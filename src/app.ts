import * as express from 'express';
import { RouteServer } from './RouteServer';

export default class App {

  public static bootstrap(): App {
    return new App();
  }

  private app: express.Application;

  constructor() {
    this.app = express();
    this.setupRouteSystem();
  }

  public getApp(): express.Application {
    return this.app;
  }

  private setupRouteSystem(): void {
    new RouteServer().start();
  }
}
