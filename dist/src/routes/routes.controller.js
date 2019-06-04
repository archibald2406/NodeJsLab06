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
const routes_service_1 = require("./routes.service");
const route_entity_1 = require("./route.entity");
let RoutesController = class RoutesController {
    constructor(service) {
        this.service = service;
    }
    getAll(res, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const routes = yield this.service.findAll(query);
            return res.status(common_1.HttpStatus.OK).json(routes);
        });
    }
    get(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const routes = yield this.service.findById(id);
            if (routes) {
                return res.status(common_1.HttpStatus.OK).json(routes);
            }
            res.writeHead(404, 'Record not found.');
            res.send();
        });
    }
    create(res, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const route = yield this.service.create(body);
            if (route) {
                return res.status(common_1.HttpStatus.OK).json(route);
            }
            res.writeHead(500, 'Invalid data in request.');
            res.send();
        });
    }
    update(res, body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const route = yield this.service.update(id, body);
            if (route) {
                return res.status(common_1.HttpStatus.OK).json(route);
            }
            res.writeHead(500, `Invalid data in request or route with such id not exist`);
            res.send();
        });
    }
    delete(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const route = yield this.service.delete(id);
            if (route) {
                return res.status(common_1.HttpStatus.OK).json(route);
            }
            res.writeHead(404, `Route with such id not exist`);
            res.send();
        });
    }
    getDrivers(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const drivers = yield this.service.findRouteDriversById(id);
            if (drivers.length) {
                return res.status(common_1.HttpStatus.OK).json(drivers);
            }
            res.writeHead(404, 'Records not found.');
            res.send();
        });
    }
    getDriversLastMonth(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const drivers = yield this.service.findRouteDriversLastMonthById(id);
            if (drivers.length) {
                return res.status(common_1.HttpStatus.OK).json(drivers);
            }
            res.writeHead(404, 'Records not found.');
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
], RoutesController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Response()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "get", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, route_entity_1.Route]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Response()), __param(1, common_1.Body()), __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, route_entity_1.Route, Object]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Response()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "delete", null);
__decorate([
    common_1.Get('/:id/drivers'),
    __param(0, common_1.Response()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "getDrivers", null);
__decorate([
    common_1.Get('/:id/drivers-last-month'),
    __param(0, common_1.Response()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoutesController.prototype, "getDriversLastMonth", null);
RoutesController = __decorate([
    common_1.Controller('routes'),
    __metadata("design:paramtypes", [routes_service_1.RoutesService])
], RoutesController);
exports.RoutesController = RoutesController;
//# sourceMappingURL=routes.controller.js.map