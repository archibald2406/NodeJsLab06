import { Model } from 'sequelize-typescript';
import { DriverAndRoute } from '../driverandroute/driverandroute.entity';
export declare class Driver extends Model<Driver> {
    name: string;
    surname: string;
    totalHours: number;
    driversAndRoutes: DriverAndRoute[];
}
