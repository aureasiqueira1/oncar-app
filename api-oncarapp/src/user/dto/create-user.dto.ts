import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @MinLength(11, { message: 'CPF deve ter 11 caracteres.' })
  @IsNotEmpty()
  cpf: string;

  @IsEmail(null, { message: 'Entre com um email válido.' })
  @IsNotEmpty()
  email: string;

  @IsInt()
  @IsNotEmpty()
  score: string;
}
