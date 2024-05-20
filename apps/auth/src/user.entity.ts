import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //   email: string;
  //   password: string;
  //   role: string;
  //   created_at: Date;
  //   updated_at: Date;
}
