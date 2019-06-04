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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const drivers_service_1 = require("./drivers.service");
const driver_entity_1 = require("./driver.entity");
let DriversController = class DriversController {
    constructor(service) {
        this.service = service;
    }
    getAll(res, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const drivers = yield this.service.findAll(query);
            return res.status(common_1.HttpStatus.OK).json(drivers);
        });
    }
    get(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const drivers = yield this.service.findById(id);
            if (drivers) {
                return res.status(common_1.HttpStatus.OK).json(drivers);
            }
            res.writeHead(404, 'Record not found.');
            res.send();
        });
    }
    create(res, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = yield this.service.create(body);
            if (driver) {
                return res.status(common_1.HttpStatus.OK).json(driver);
            }
            res.writeHead(500, 'Invalid data in request.');
            res.send();
        });
    }
    update(res, body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = yield this.service.update(id, body);
            if (driver) {
                return res.status(common_1.HttpStatus.OK).json(driver);
            }
            res.writeHead(500, `Invalid data in request or driver with such id not exist`);
            res.send();
        });
    }
    delete(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = yield this.service.delete(id);
            if (driver) {
                return res.status(common_1.HttpStatus.OK).json(driver);
            }
            res.writeHead(404, `Driver with such id not exist`);
            res.send();
        });
    }
    getRoutes(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const routes = yield this.service.findDriverRoutesById(id);
            if (routes.length) {
                return res.status(common_1.HttpStatus.OK).json(routes);
            }
            res.writeHead(404, 'Records not found.');
            res.send();
        });
    }
    writeToRoute(res, driverId, routeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.writeDriverToRoute(driverId, routeId);
            if (result === 0) {
                return res.status(common_1.HttpStatus.OK).json('Driver has been successfully wrote to route.');
            }
            res.writeHead(500, result);
            res.send();
        });
    }
    deleteFromRoute(res, driverId, routeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.removeDriverFromRoute(driverId, routeId);
            if (result === 0) {
                return res.status(common_1.HttpStatus.OK).json('Driver has been successfully removed from route.');
            }
            res.writeHead(500, result);
            res.send();
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Response()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Response()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "get", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, driver_entity_1.Driver]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Response()), __param(1, common_1.Body()), __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, driver_entity_1.Driver, Object]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Response()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "delete", null);
__decorate([
    common_1.Get('/:id/routes'),
    __param(0, common_1.Response()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "getRoutes", null);
__decorate([
    common_1.Put('/:driverId/routes/:routeId'),
    __param(0, common_1.Response()), __param(1, common_1.Param('driverId')), __param(2, common_1.Param('routeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "writeToRoute", null);
__decorate([
    common_1.Delete('/:driverId/routes/:routeId'),
    __param(0, common_1.Response()), __param(1, common_1.Param('driverId')), __param(2, common_1.Param('routeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "deleteFromRoute", null);
DriversController = __decorate([
    common_1.Controller('drivers'),
    __metadata("design:paramtypes", [drivers_service_1.DriversService])
], DriversController);
exports.DriversController = DriversController;
//# sourceMappingURL=drivers.controller.js.map