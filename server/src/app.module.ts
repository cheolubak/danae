import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database.module';
import databaseConfig from './config/database.config';
import redisConfig from './config/redis.config';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis.module';
import { AuthModule } from './auth/auth.module';
import { AddressModule } from './address/address.module';
import { SellerModule } from './seller/seller.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ShippingModule } from './shipping/shipping.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, redisConfig],
    }),
    DatabaseModule,
    RedisModule,
    UserModule,
    AuthModule,
    AddressModule,
    SellerModule,
    ProductModule,
    OrderModule,
    ShippingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
