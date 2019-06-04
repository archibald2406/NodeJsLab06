import { Controller, Response, Post, Body, Get, Put, Delete, Param, HttpStatus, Query } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { Route } from './route.entity';

@Controller('routes')
export class RoutesController {
  constructor(private service: RoutesService) { }

  @Get()
  public async getAll(@Response() res, @Query() query) {
    const routes = await this.service.findAll(query);
    return res.status(HttpStatus.OK).json(routes);
  }

  @Get('/:id')
  public async get(@Response() res, @Param('id') id) {
    const routes = await this.service.findById(id);
    if (routes) {
      return res.status(HttpStatus.OK).json(routes);
    }
    res.writeHead(404, 'Record not found.');
    res.send();
  }

  @Post()
  public async create(@Response() res, @Body() body: Route) {
    const route = await this.service.create(body);
    if (route) {
      return res.status(HttpStatus.OK).json(route);
    }
    res.writeHead(500, 'Invalid data in request.');
    res.send();
  }

  @Put('/:id')
  public async update(@Response() res, @Body() body: Route, @Param('id') id) {
    const route = await this.service.update(id, body);
    if (route) {
      return res.status(HttpStatus.OK).json(route);
    }
    res.writeHead(500, `Invalid data in request or route with such id not exist`);
    res.send();
  }

  @Delete('/:id')
  public async delete(@Response() res, @Param('id') id) {
    const route = await this.service.delete(id);
    if (route) {
      return res.status(HttpStatus.OK).json(route);
    }
    res.writeHead(404, `Route with such id not exist`);
    res.send();
  }

  @Get('/:id/drivers')
  public async getDrivers(@Response() res, @Param('id') id) {
    const drivers = await this.service.findRouteDriversById(id);
    if (drivers.length) {
      return res.status(HttpStatus.OK).json(drivers);
    }
    res.writeHead(404, 'Records not found.');
    res.send();
  }

  @Get('/:id/drivers-last-month')
  public async getDriversLastMonth(@Response() res, @Param('id') id) {
    const drivers = await this.service.findRouteDriversLastMonthById(id);
    if (drivers.length) {
      return res.status(HttpStatus.OK).json(drivers);
    }
    res.writeHead(404, 'Records not found.');
    res.send();
  }
}
