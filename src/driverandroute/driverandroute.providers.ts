import { DriverAndRoute } from './driverandroute.entity';

export const driverAndRouteProviders = [
  {
    provide: 'DRIVER_AND_ROUTE_REPOSITORY',
    useValue: DriverAndRoute,
  },
];