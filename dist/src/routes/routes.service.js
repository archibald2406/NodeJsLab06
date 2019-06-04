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
const driver_and_route_validator_1 = require("../validators/driver-and-route.validator");
const driverandroute_entity_1 = require("../driverandroute/driverandroute.entity");
const moment = require("moment");
const sequelize_1 = require("sequelize");
let RoutesService = class RoutesService {
    constructor(routesRepository, driversRepository) {
        this.routesRepository = routesRepository;
        this.driversRepository = driversRepository;
    }
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.routesRepository.findAll({
                limit: parseInt(query.limit, 10) || 1000,
                offset: parseInt(query.offset, 10) || 0,
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.routesRepository.findByPk(id);
        });
    }
    create(route) {
        return __awaiter(this, void 0, void 0, function* () {
            return driver_and_route_validator_1.DriverAndRouteValidator.isRoute(route) ? yield this.routesRepository.create(route) : null;
        });
    }
    update(id, newRoute) {
        return __awaiter(this, void 0, void 0, function* () {
            let route = driver_and_route_validator_1.DriverAndRouteValidator.isRoute(newRoute) ? yield this.routesRepository.findByPk(id) : null;
            if (!route || !route.id) {
                return null;
            }
            route = this._assign(route, newRoute);
            return yield route.save({ returning: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.routesRepository.destroy({
                where: { id },
            });
        });
    }
    findRouteDriversById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driversRepository.findAll({
                raw: true,
                include: [{
                        model: driverandroute_entity_1.DriverAndRoute,
                        where: { routeId: id },
                    }],
            });
        });
    }
    findRouteDriversLastMonthById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driversRepository.findAll({
                raw: true,
                include: [{
                        model: driverandroute_entity_1.DriverAndRoute,
                        where: {
                            routeId: id,
                            dateOfRecording: {
                                [sequelize_1.Op.gte]: moment().subtract(1, 'month').toDate(),
                            },
                        },
                    }],
            });
        });
    }
    _assign(route, newValue) {
        for (const key of Object.keys(route['dataValues'])) {
            if (route[key] !== newValue[key]) {
                route[key] = newValue[key];
            }
        }
        return route;
    }
};
RoutesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ROUTES_REPOSITORY')),
    __param(1, common_1.Inject('DRIVERS_REPOSITORY')),
    __metadata("design:paramtypes", [Object, Object])
], RoutesService);
exports.RoutesService = RoutesService;
//# sourceMappingURL=routes.service.js.map