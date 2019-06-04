import { Sequelize } from 'sequelize-typescript';
import { Driver } from '../drivers/driver.entity';
import { DriverAndRoute } from '../driverandroute/driverandroute.entity';
import { Route } from '../routes/route.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'pass123',
        database: 'nodejslabs',
      });
      sequelize.addModels([Driver, Route, DriverAndRoute]);
      await sequelize.sync();
      return sequelize;
    },
  },
];