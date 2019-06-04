import { Route } from './route.entity';

export const routesProviders = [
  {
    provide: 'ROUTES_REPOSITORY',
    useValue: Route,
  },
];