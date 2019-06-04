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
const driver_entity_1 = require("../drivers/driver.entity");
const route_entity_1 = require("../routes/route.entity");
const moment = require("moment");
let DriverAndRoute = class DriverAndRoute extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ defaultValue: moment(new Date()).format('YYYY-MM-DD') }),
    __metadata("design:type", Date)
], DriverAndRoute.prototype, "dateOfRecording", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => driver_entity_1.Driver),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DriverAndRoute.prototype, "driverId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => route_entity_1.Route),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DriverAndRoute.prototype, "routeId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => driver_entity_1.Driver),
    __metadata("design:type", driver_entity_1.Driver)
], DriverAndRoute.prototype, "driver", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => route_entity_1.Route),
    __metadata("design:type", route_entity_1.Route)
], DriverAndRoute.prototype, "route", void 0);
DriverAndRoute = __decorate([
    sequelize_typescript_1.Table
], DriverAndRoute);
exports.DriverAndRoute = DriverAndRoute;
//# sourceMappingURL=driverandroute.entity.js.map