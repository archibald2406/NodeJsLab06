import { Route } from './route.entity';
import { Driver } from '../drivers/driver.entity';
export declare class RoutesService {
    private routesRepository;
    private driversRepository;
    constructor(routesRepository: typeof Route, driversRepository: typeof Driver);
    findAll(): Promise<Route[]>;
    findById(id: number): Promise<Route>;
    create(route: Route): Promise<Route>;
    update(id: number, newRoute: Route): Promise<Route | null>;
    delete(id: number): Promise<number>;
    findRouteDriversById(id: number): Promise<any>;
    findRouteDriversLastMonthById(id: number): Promise<any>;
    private _assign;
}
