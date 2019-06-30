"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let User = class User {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "surName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'varchar',
        unique: true
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(4, 100),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'int',
        unique: true
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "document", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = tslib_1.__decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map