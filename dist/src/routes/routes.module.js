"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const routes_service_1 = require("./routes.service");
const routes_controller_1 = require("./routes.controller");
const database_module_1 = require("../database/database.module");
const routes_providers_1 = require("./routes.providers");
const drivers_providers_1 = require("../drivers/drivers.providers");
let RoutesModule = class RoutesModule {
};
RoutesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [routes_controller_1.RoutesController],
        providers: [routes_service_1.RoutesService, ...routes_providers_1.routesProviders, ...drivers_providers_1.driversProviders],
    })
], RoutesModule);
exports.RoutesModule = RoutesModule;
//# sourceMappingURL=routes.module.js.map