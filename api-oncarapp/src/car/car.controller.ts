import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }

  @Get()
  findAll() {
    return this.carService.findAllCar();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.viewCar(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.removeCar(id);
  }
}
