import { RoutesService } from './routes.service';
import { Route } from './route.entity';
export declare class RoutesController {
    private service;
    constructor(service: RoutesService);
    getAll(res: any): Promise<any>;
    get(res: any, id: any): Promise<any>;
    create(res: any, body: Route): Promise<any>;
    update(res: any, body: Route, id: any): Promise<any>;
    delete(res: any, id: any): Promise<any>;
    getDrivers(res: any, id: any): Promise<any>;
    getDriversLastMonth(res: any, id: any): Promise<any>;
}
