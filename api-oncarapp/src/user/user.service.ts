import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    function verifyScore(score: string) {
      if (Number(score) >= 1 && Number(score) <= 299) return 'Reprovado';
      if (Number(score) <= 599)
        return '70% de entrada, 30% do comprometimento da renda';
      if (Number(score) <= 799)
        return '50% de entrada, 25% do comprometimento da renda';
      if (Number(score) <= 950)
        return '30% de entrada, 20% do comprometimento da renda';
      if (Number(score) <= 999) return '100% de financiamento, taxa zero';
      else return 'Valor do Score não é válido';
    }

    const user: User = new User();
    user.nome = createUserDto.nome;
    user.cpf = createUserDto.cpf;
    user.email = createUserDto.email;
    user.score = verifyScore(createUserDto.score);
    return this.userRepository.save(user);
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  viewUser(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  removeUser(id: string): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
