"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const drivers_service_1 = require("./drivers.service");
const drivers_controller_1 = require("./drivers.controller");
const database_module_1 = require("../database/database.module");
const drivers_providers_1 = require("./drivers.providers");
const routes_providers_1 = require("../routes/routes.providers");
const driverandroute_providers_1 = require("../driverandroute/driverandroute.providers");
let DriversModule = class DriversModule {
};
DriversModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [drivers_controller_1.DriversController],
        providers: [drivers_service_1.DriversService, ...drivers_providers_1.driversProviders, ...routes_providers_1.routesProviders, ...driverandroute_providers_1.driverAndRouteProviders],
    })
], DriversModule);
exports.DriversModule = DriversModule;
//# sourceMappingURL=drivers.module.js.map