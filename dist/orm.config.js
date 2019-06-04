"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driver_entity_1 = require("./src/drivers/driver.entity");
const ormconfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'pass123',
    database: 'nodejslabs',
    entities: [driver_entity_1.Driver],
    synchronize: true
};
exports.default = ormconfig;
//# sourceMappingURL=orm.config.js.map