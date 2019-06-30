"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('swagger-jsdoc');
class Swagger {
    /**
     * Configure setup for swagger feature
     *
     * @param app {express.Application}
     */
    static setup(app) {
        const specs = swaggerDoc(this.getOptions());
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    }
    /**
     * Return spec options
     */
    static getOptions() {
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
exports.Swagger = Swagger;
//# sourceMappingURL=swagger.js.map