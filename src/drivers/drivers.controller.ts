import { Controller, Response, Post, Body, Get, Put, Delete, Param, HttpStatus, Query } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Driver } from './driver.entity';

@Controller('drivers')
export class DriversController {
  constructor(private service: DriversService) { }

  @Get()
  public async getAll(@Response() res, @Query() query) {
    const drivers = await this.service.findAll(query);
    return res.status(HttpStatus.OK).json(drivers);
  }

  @Get('/:id')
  public async get(@Response() res, @Param('id') id) {
    const drivers = await this.service.findById(id);
    if (drivers) {
      return res.status(HttpStatus.OK).json(drivers);
    }
    res.writeHead(404, 'Record not found.');
    res.send();
  }

  @Post()
  public async create(@Response() res, @Body() body: Driver) {
    const driver = await this.service.create(body);
    if (driver) {
      return res.status(HttpStatus.OK).json(driver);
    }
    res.writeHead(500, 'Invalid data in request.');
    res.send();
  }

  @Put('/:id')
  public async update(@Response() res, @Body() body: Driver, @Param('id') id) {
    const driver = await this.service.update(id, body);
    if (driver) {
      return res.status(HttpStatus.OK).json(driver);
    }
    res.writeHead(500, `Invalid data in request or driver with such id not exist`);
    res.send();
  }

  @Delete('/:id')
  public async delete(@Response() res, @Param('id') id) {
    const driver = await this.service.delete(id);
    if (driver) {
      return res.status(HttpStatus.OK).json(driver);
    }
    res.writeHead(404, `Driver with such id not exist`);
    res.send();
  }

  @Get('/:id/routes')
  public async getRoutes(@Response() res, @Param('id') id) {
    const routes = await this.service.findDriverRoutesById(id);
    if (routes.length) {
      return res.status(HttpStatus.OK).json(routes);
    }
    res.writeHead(404, 'Records not found.');
    res.send();
  }

  @Put('/:driverId/routes/:routeId')
  public async writeToRoute(@Response() res, @Param('driverId') driverId, @Param('routeId') routeId) {
    const result = await this.service.writeDriverToRoute(driverId, routeId);
    if (result === 0) {
      return res.status(HttpStatus.OK).json('Driver has been successfully wrote to route.');
    }
    res.writeHead(500, result);
    res.send();
  }

  @Delete('/:driverId/routes/:routeId')
  public async deleteFromRoute(@Response() res, @Param('driverId') driverId, @Param('routeId') routeId) {
    const result = await this.service.removeDriverFromRoute(driverId, routeId);
    if (result === 0) {
      return res.status(HttpStatus.OK).json('Driver has been successfully removed from route.');
    }
    res.writeHead(500, result);
    res.send();
  }
}