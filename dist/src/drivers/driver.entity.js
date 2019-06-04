"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const driverandroute_entity_1 = require("../driverandroute/driverandroute.entity");
let Driver = class Driver extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", String)
], Driver.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", String)
], Driver.prototype, "surname", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], Driver.prototype, "totalHours", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => driverandroute_entity_1.DriverAndRoute),
    __metadata("design:type", Array)
], Driver.prototype, "driversAndRoutes", void 0);
Driver = __decorate([
    sequelize_typescript_1.Table
], Driver);
exports.Driver = Driver;
//# sourceMappingURL=driver.entity.js.map