import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  cor: string;

  @IsString()
  @IsNotEmpty()
  opcionais: string;

  @IsString()
  imagem: string;
}
