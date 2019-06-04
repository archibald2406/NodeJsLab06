import { Driver } from './driver.entity';

export const driversProviders = [
  {
    provide: 'DRIVERS_REPOSITORY',
    useValue: Driver,
  },
];