"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const swagger_1 = require("./swagger");
class App {
    static bootstrap() {
        return new App();
    }
    constructor() {
        this.app = express();
        this.setup();
    }
    run(port, callback) {
        if (callback)
            return this.app.listen(port, callback);
        return this.app.listen(port);
    }
    setup() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        swagger_1.Swagger.setup(this.app);
        this.run(3000);
        // isolar
        this.routes();
    }
    routes() {
        const router = express.Router();
        router.get('/', (request, response, next) => {
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
        router.get('/teste', (request, response, next) => {
            return response.json({
                data: 'teste'
            });
        });
        this.app.use('/', router);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map