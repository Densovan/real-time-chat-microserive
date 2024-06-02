import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../user.entity';

console.log(process.env.POSTGRES_URI);

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  //   url: process.env.POSTGRES_URI,
  url: 'postgres://user:password@postgres:5432/messenger',
  entities: [UserEntity],
  migrations: ['dist/apps/auth/db/migrations/*{.ts,.js}'],
};

export const dataSource = new DataSource(dataSourceOptions);
