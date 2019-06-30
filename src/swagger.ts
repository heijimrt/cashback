import * as express from 'express';
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('swagger-jsdoc');

export class Swagger {

  /**
   * Configure setup for swagger feature
   *
   * @param app {express.Application}
   */
  public static setup(app: express.Application): void {
    const specs = swaggerDoc(this.getOptions());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  /**
   * Return spec options
   */
  private static getOptions(): any {
    return {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'test API',
          version: '1.0.0',
          description: 'testeing'
        },
        basePath: '/',
      },
      apis: ['build/app.js']
    };
  }
}