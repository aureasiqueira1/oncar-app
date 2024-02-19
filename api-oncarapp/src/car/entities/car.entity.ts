import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  modelo: string;

  @Column({ type: 'varchar' })
  marca: string;

  @Column({ type: 'varchar' })
  cor: string;

  @Column({ type: 'varchar' })
  opcionais: string;

  @Column({ type: 'varchar' })
  imagem: string;
}
