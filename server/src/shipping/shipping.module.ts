import { Module } from '@nestjs/common';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipping } from '~/shipping/entities/shipping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shipping])],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class ShippingModule {}
