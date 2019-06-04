import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Driver } from '../drivers/driver.entity';
import { Route } from '../routes/route.entity';
import moment = require('moment');

@Table
export class DriverAndRoute extends Model<DriverAndRoute> {
  @Column({ defaultValue: moment(new Date()).format('YYYY-MM-DD') })
  dateOfRecording: Date;

  @ForeignKey(() => Driver)
  @Column
  driverId: number;

  @ForeignKey(() => Route)
  @Column
  routeId: number;

  @BelongsTo(() => Driver)
  driver: Driver;

  @BelongsTo(() => Route)
  route: Route;
}