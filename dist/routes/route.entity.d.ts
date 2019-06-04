import { Model } from 'sequelize-typescript';
import { DriverAndRoute } from '../driverandroute/driverandroute.entity';
export declare class Route extends Model<Route> {
    title: string;
    time: number;
    driversAndRoutes: DriverAndRoute[];
}
