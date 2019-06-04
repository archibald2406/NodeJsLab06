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
let DriversService = class DriversService {
    constructor(driversRepository, routesRepository, driverAndRouteRepository) {
        this.driversRepository = driversRepository;
        this.routesRepository = routesRepository;
        this.driverAndRouteRepository = driverAndRouteRepository;
    }
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driversRepository.findAll({
                limit: parseInt(query.limit, 10) || 10,
                offset: parseInt(query.offset, 10) || 0,
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driversRepository.findByPk(id);
        });
    }
    create(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            return driver_and_route_validator_1.DriverAndRouteValidator.isDriver(driver) ? yield this.driversRepository.create(driver) : null;
        });
    }
    update(id, newDriver) {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = driver_and_route_validator_1.DriverAndRouteValidator.isDriver(newDriver) ? yield this.driversRepository.findByPk(id) : null;
            if (!driver || !driver.id) {
                return null;
            }
            driver = this._assign(driver, newDriver);
            return yield driver.save({ returning: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driversRepository.destroy({
                where: { id },
            });
        });
    }
    findDriverRoutesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.routesRepository.findAll({
                raw: true,
                include: [{
                        model: driverandroute_entity_1.DriverAndRoute,
                        where: { driverId: id },
                    }],
            });
        });
    }
    writeDriverToRoute(driverId, routeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const driverAndRouteRecord = yield this.driverAndRouteRepository.findAll({
                where: { driverId, routeId },
            });
            if (!driverAndRouteRecord.length) {
                const driver = yield this.driversRepository.findByPk(driverId);
                if (driver && driver.totalHours < 20) {
                    const route = yield this.routesRepository.findByPk(routeId);
                    if (route && (route.dataValues.time + driver.dataValues.totalHours <= 20)) {
                        const record = yield this.driverAndRouteRepository.create({
                            driverId,
                            routeId,
                            dateOfRecording: moment(new Date()).format('YYYY-MM-DD'),
                        });
                        const updatedDriver = yield this.driversRepository.update({
                            totalHours: driver.totalHours + route.time,
                        }, { where: { id: driverId } });
                        if (record && updatedDriver) {
                            return 0;
                        }
                    }
                    return 'Route not found or Driver does not have enough time to write on this route.';
                }
                return 'Driver not found or Driver has reached the maximum number of hours.';
            }
            return 'Driver is already on this route.';
        });
    }
    removeDriverFromRoute(driverId, routeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const driverAndRouteRecord = yield this.driverAndRouteRepository.findAll({
                where: { driverId, routeId },
            });
            if (driverAndRouteRecord.length) {
                const driver = yield this.driversRepository.findByPk(driverId);
                const route = yield this.routesRepository.findByPk(routeId);
                const record = yield this.driverAndRouteRepository.destroy({ where: { driverId, routeId } });
                const updatedDriver = yield this.driversRepository.update({
                    totalHours: driver.totalHours - route.time,
                }, { where: { id: driverId } });
                if (record && updatedDriver) {
                    return 0;
                }
            }
            return 'Driver is not recorded for this route or driver/route with such id no exists.';
        });
    }
    _assign(driver, newValue) {
        for (const key of Object.keys(driver['dataValues'])) {
            if (driver[key] !== newValue[key]) {
                driver[key] = newValue[key];
            }
        }
        return driver;
    }
};
DriversService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('DRIVERS_REPOSITORY')),
    __param(1, common_1.Inject('ROUTES_REPOSITORY')),
    __param(2, common_1.Inject('DRIVER_AND_ROUTE_REPOSITORY')),
    __metadata("design:paramtypes", [Object, Object, Object])
], DriversService);
exports.DriversService = DriversService;
//# sourceMappingURL=drivers.service.js.map