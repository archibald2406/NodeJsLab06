import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { DriverAndRoute } from '../driverandroute/driverandroute.entity';

@Table
export class Route extends Model<Route> {
  @Column({ allowNull: false })
  title: string;

  @Column({ allowNull: false })
  time: number;

  @HasMany(() => DriverAndRoute)
  driversAndRoutes: DriverAndRoute[];
}