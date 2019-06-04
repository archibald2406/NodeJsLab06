import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { driverAndRouteProviders } from './driverandroute.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...driverAndRouteProviders],
})
export class DriverAndRouteModule {}
