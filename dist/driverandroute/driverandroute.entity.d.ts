import { Model } from 'sequelize-typescript';
import { Driver } from '../drivers/driver.entity';
import { Route } from '../routes/route.entity';
export declare class DriverAndRoute extends Model<DriverAndRoute> {
    dateOfRecording: Date;
    driverId: number;
    routeId: number;
    driver: Driver;
    route: Route;
}
