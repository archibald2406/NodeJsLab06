"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driver_entity_1 = require("./driver.entity");
exports.driversProviders = [
    {
        provide: 'DRIVERS_REPOSITORY',
        useValue: driver_entity_1.Driver,
    },
];
//# sourceMappingURL=drivers.providers.js.map