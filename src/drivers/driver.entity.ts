import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { DriverAndRoute } from '../driverandroute/driverandroute.entity';

@Table
export class Driver extends Model<Driver> {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  surname: string;

  @Column({ allowNull: true, defaultValue: 0})
  totalHours: number;

  @HasMany(() => DriverAndRoute)
  driversAndRoutes: DriverAndRoute[];
}