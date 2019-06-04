"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_entity_1 = require("./route.entity");
exports.routesProviders = [
    {
        provide: 'ROUTES_REPOSITORY',
        useValue: route_entity_1.Route,
    },
];
//# sourceMappingURL=routes.providers.js.map