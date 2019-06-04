import { Model } from 'sequelize-typescript';
export declare class Driver extends Model<Driver> {
    name: string;
    surname: string;
    totalHours: number;
}
