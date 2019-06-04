import { Driver } from '../drivers/driver.entity';
import { Route } from '../routes/route.entity';
export declare class DriverAndRouteValidator {
    static isDriver(driver: any): driver is Driver;
    static isRoute(route: any): route is Route;
}
