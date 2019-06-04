import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { DatabaseModule } from '../database/database.module';
import { routesProviders } from './routes.providers';
import { driversProviders } from '../drivers/drivers.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RoutesController],
  providers: [RoutesService, ...routesProviders, ...driversProviders],
})
export class RoutesModule {}