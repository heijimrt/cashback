"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const app_1 = require("./app");
const typeorm_1 = require("typeorm");
/**
 * Application Bootstrap
 */
app_1.default.bootstrap();
typeorm_1.createConnection()
    .then((connection) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // here you can start to work with your entities
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map