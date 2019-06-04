import { Driver } from './src/drivers/driver.entity';
declare const ormconfig: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: (typeof Driver)[];
    synchronize: boolean;
};
export default ormconfig;
