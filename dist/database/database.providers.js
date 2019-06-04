"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const driver_entity_1 = require("../drivers/driver.entity");
const driverandroute_entity_1 = require("../driverandroute/driverandroute.entity");
const route_entity_1 = require("../routes/route.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'pass123',
                database: 'nodejslabs',
            });
            sequelize.addModels([driver_entity_1.Driver, route_entity_1.Route, driverandroute_entity_1.DriverAndRoute]);
            yield sequelize.sync();
            return sequelize;
        }),
    },
];
//# sourceMappingURL=database.providers.js.map