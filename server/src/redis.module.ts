import { Module } from '@nestjs/common';
import redisConfig from './config/redis.config';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'AUTH_SERVICE',
        useFactory: redisConfig,
      },
    ]),
  ],
})
export class RedisModule {}
