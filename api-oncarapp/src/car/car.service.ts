import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
  ) {}

  createCar(createCarDto: CreateCarDto): Promise<Car> {
    const car: Car = new Car();
    car.modelo = createCarDto.modelo;
    car.marca = createCarDto.marca;
    car.cor = createCarDto.cor;
    car.opcionais = createCarDto.opcionais;
    car.imagem = createCarDto.imagem;
    return this.carRepository.save(car);
  }

  findAllCar(): Promise<Car[]> {
    return this.carRepository.find();
  }

  viewCar(id: string): Promise<Car> {
    return this.carRepository.findOneBy({ id });
  }

  removeCar(id: string): Promise<{ affected?: number }> {
    return this.carRepository.delete(id);
  }
}
