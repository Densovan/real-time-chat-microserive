import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { dataSourceOptions } from './db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      // useFactory: async (configService: ConfigService) => ({
      //   type: 'postgres',
      //   url: configService.get('POSTGRES_URI'),
      //   authLoadEntities: true,
      //   entities: [UserEntity],
      //   synchronize: true, // shouldn't be used in production - can cause data loss
      // }),
      useFactory: () => ({
        ...dataSourceOptions,
        authLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
