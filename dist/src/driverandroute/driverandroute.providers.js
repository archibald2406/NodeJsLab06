"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driverandroute_entity_1 = require("./driverandroute.entity");
exports.driverAndRouteProviders = [
    {
        provide: 'DRIVER_AND_ROUTE_REPOSITORY',
        useValue: driverandroute_entity_1.DriverAndRoute,
    },
];
//# sourceMappingURL=driverandroute.providers.js.map