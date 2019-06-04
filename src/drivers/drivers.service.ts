import { Driver } from './driver.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DriverAndRouteValidator } from '../validators/driver-and-route.validator';
import { Route } from '../routes/route.entity';
import { DriverAndRoute } from '../driverandroute/driverandroute.entity';
import moment = require('moment');

@Injectable()
export class DriversService {
  constructor(@Inject('DRIVERS_REPOSITORY') private driversRepository: typeof Driver,
              @Inject('ROUTES_REPOSITORY') private routesRepository: typeof Route,
              @Inject('DRIVER_AND_ROUTE_REPOSITORY') private driverAndRouteRepository: typeof DriverAndRoute) { }

  async findAll(query: any): Promise<Driver[]> {
    return await this.driversRepository.findAll<Driver>({
      limit: parseInt(query.limit, 10) || 1000,
      offset: parseInt(query.offset, 10) || 0,
    });
  }

  async findById(id: number): Promise<Driver> {
    return await this.driversRepository.findByPk<Driver>(id);
  }

  async create(driver: Driver): Promise<Driver> {
    return DriverAndRouteValidator.isDriver(driver) ? await this.driversRepository.create<Driver>(driver) : null;
  }

  async update(id: number, newDriver: Driver): Promise<Driver | null> {
    let driver = DriverAndRouteValidator.isDriver(newDriver) ? await this.driversRepository.findByPk<Driver>(id) : null;
    if (!driver || !driver.id) {
      return null;
    }
    driver = this._assign(driver, newDriver);
    return await driver.save({ returning: true });
  }

  async delete(id: number): Promise<number> {
    return await this.driversRepository.destroy({
      where: { id },
    });
  }

  async findDriverRoutesById(id: number): Promise<any> {
    return await this.routesRepository.findAll({
      raw: true,
      include: [{
        model: DriverAndRoute,
        where: { driverId: id },
      }],
    });
  }

  async writeDriverToRoute(driverId: number, routeId: number): Promise<string | number> {
    const driverAndRouteRecord = await this.driverAndRouteRepository.findAll<DriverAndRoute>({
      where: { driverId, routeId },
    });

    if (!driverAndRouteRecord.length) {
      const driver = await this.driversRepository.findByPk<Driver>(driverId);

      if (driver && driver.totalHours < 20) {
        const route = await this.routesRepository.findByPk<Route>(routeId);

        if (route && (route.dataValues.time + driver.dataValues.totalHours <= 20)) {
          const record = await this.driverAndRouteRepository.create({
            driverId,
            routeId,
            dateOfRecording: moment(new Date()).format('YYYY-MM-DD'),
          });

          const updatedDriver = await this.driversRepository.update({
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
  }

  async removeDriverFromRoute(driverId: number, routeId: number): Promise<string | number> {
    const driverAndRouteRecord = await this.driverAndRouteRepository.findAll<DriverAndRoute>({
      where: { driverId, routeId },
    });

    if (driverAndRouteRecord.length) {
      const driver = await this.driversRepository.findByPk<Driver>(driverId);
      const route = await this.routesRepository.findByPk<Route>(routeId);
      const record = await this.driverAndRouteRepository.destroy({ where: { driverId, routeId } });
      const updatedDriver = await this.driversRepository.update({
        totalHours: driver.totalHours - route.time,
      }, { where: { id: driverId } });

      if (record && updatedDriver) {
        return 0;
      }
    }

    return 'Driver is not recorded for this route or driver/route with such id no exists.';
  }

  private _assign(driver: Driver, newValue: Driver): Driver {
    // tslint:disable-next-line:no-string-literal
    for (const key of Object.keys(driver['dataValues'])) {
      if (driver[key] !== newValue[key]) {
        driver[key] = newValue[key];
      }
    }
    return driver as Driver;
  }
}