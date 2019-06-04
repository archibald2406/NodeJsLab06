import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { DatabaseModule } from '../database/database.module';
import { driversProviders } from './drivers.providers';
import { routesProviders } from '../routes/routes.providers';
import { driverAndRouteProviders } from '../driverandroute/driverandroute.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DriversController],
  providers: [DriversService, ...driversProviders, ...routesProviders, ...driverAndRouteProviders],
})
export class DriversModule {}