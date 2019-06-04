import { Driver } from './driver.entity';
import { Route } from '../routes/route.entity';
import { DriverAndRoute } from '../driverandroute/driverandroute.entity';
export declare class DriversService {
    private driversRepository;
    private routesRepository;
    private driverAndRouteRepository;
    constructor(driversRepository: typeof Driver, routesRepository: typeof Route, driverAndRouteRepository: typeof DriverAndRoute);
    findAll(query: any): Promise<Driver[]>;
    findById(id: number): Promise<Driver>;
    create(driver: Driver): Promise<Driver>;
    update(id: number, newDriver: Driver): Promise<Driver | null>;
    delete(id: number): Promise<number>;
    findDriverRoutesById(id: number): Promise<any>;
    writeDriverToRoute(driverId: number, routeId: number): Promise<string | number>;
    removeDriverFromRoute(driverId: number, routeId: number): Promise<string | number>;
    private _assign;
}
