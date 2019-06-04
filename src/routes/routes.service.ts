import { Inject, Injectable } from '@nestjs/common';
import { DriverAndRouteValidator } from '../validators/driver-and-route.validator';
import { Route } from './route.entity';
import { DriverAndRoute } from '../driverandroute/driverandroute.entity';
import { Driver } from '../drivers/driver.entity';
import moment = require('moment');
import { Op } from 'sequelize';

@Injectable()
export class RoutesService {
  constructor(@Inject('ROUTES_REPOSITORY') private routesRepository: typeof Route,
              @Inject('DRIVERS_REPOSITORY') private driversRepository: typeof Driver) { }

  async findAll(query: any): Promise<Route[]> {
    return await this.routesRepository.findAll<Route>({
      limit: parseInt(query.limit, 10) || 1000,
      offset: parseInt(query.offset, 10) || 0,
    });
  }

  async findById(id: number): Promise<Route> {
    return await this.routesRepository.findByPk<Route>(id);
  }

  async create(route: Route): Promise<Route> {
    return DriverAndRouteValidator.isRoute(route) ? await this.routesRepository.create<Route>(route) : null;
  }

  async update(id: number, newRoute: Route): Promise<Route | null> {
    let route = DriverAndRouteValidator.isRoute(newRoute) ? await this.routesRepository.findByPk<Route>(id) : null;
    if (!route || !route.id) {
      return null;
    }
    route = this._assign(route, newRoute);
    return await route.save({ returning: true });
  }

  async delete(id: number): Promise<number> {
    return await this.routesRepository.destroy({
      where: { id },
    });
  }

  async findRouteDriversById(id: number): Promise<any> {
    return await this.driversRepository.findAll({
      raw: true,
      include: [{
        model: DriverAndRoute,
        where: { routeId: id },
      }],
    });
  }

  async findRouteDriversLastMonthById(id: number): Promise<any> {
    return await this.driversRepository.findAll({
      raw: true,
      include: [{
        model: DriverAndRoute,
        where: {
          routeId: id,
          dateOfRecording: {
            [Op.gte]: moment().subtract(1, 'month').toDate(),
          },
        },
      }],
    });
  }

  private _assign(route: Route, newValue: Route): Route {
    // tslint:disable-next-line:no-string-literal
    for (const key of Object.keys(route['dataValues'])) {
      if (route[key] !== newValue[key]) {
        route[key] = newValue[key];
      }
    }
    return route as Route;
  }
}