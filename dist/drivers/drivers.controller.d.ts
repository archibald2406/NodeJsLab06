import { DriversService } from './drivers.service';
import { Driver } from './driver.entity';
export declare class DriversController {
    private service;
    constructor(service: DriversService);
    getAll(res: any, query: any): Promise<any>;
    get(res: any, id: any): Promise<any>;
    create(res: any, body: Driver): Promise<any>;
    update(res: any, body: Driver, id: any): Promise<any>;
    delete(res: any, id: any): Promise<any>;
    getRoutes(res: any, id: any): Promise<any>;
    writeToRoute(res: any, driverId: any, routeId: any): Promise<any>;
    deleteFromRoute(res: any, driverId: any, routeId: any): Promise<any>;
}
