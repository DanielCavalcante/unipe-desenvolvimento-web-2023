import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ name: 'birth_date', nullable: true })
  birthDate?: Date;

  @Column()
  username: string;

  @Column()
  password: string;
}
