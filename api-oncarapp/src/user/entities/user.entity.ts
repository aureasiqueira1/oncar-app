import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar', length: '11' })
  cpf: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  score: string;
}
