import { Module } from '@nestjs/common';
import { DriversModule } from './drivers/drivers.module';
import { RoutesModule } from './routes/routes.module';
import { DatabaseModule } from './database/database.module';
import { DriverAndRouteModule } from './driverandroute/driverandroute.module';

@Module({
  imports: [
    DriversModule,
    RoutesModule,
    DatabaseModule,
    DriverAndRouteModule,
  ],
})
export class AppModule {}
