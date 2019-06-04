import { Driver } from '../drivers/driver.entity';
import { Route } from '../routes/route.entity';

export class DriverAndRouteValidator {
  static isDriver(driver: any): driver is Driver {
    const condition1: boolean = 'name' in driver && 'surname' in driver;
    let condition2: boolean = false;
    if (condition1) {
      condition2 = /^[a-zA-Z]+$/.test(driver.name) && /^[a-zA-Z]+$/.test(driver.surname);
    }
    return condition1 && condition2;
  }

  static isRoute(route: any): route is Route {
    const condition1: boolean = 'title' in route && 'time' in route;
    let condition2: boolean = false;
    if (condition1) {
      condition2 = /^[a-zA-Z]+-[a-zA-Z]+$/.test(route.title) && /^[1-9]+[0-9]*$/.test(route.time);
    }
    return condition1 && condition2;
  }
}