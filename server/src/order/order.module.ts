import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderInfo } from '~/order/entities/order-info.entity';
import { OrderItem } from '~/order/entities/order-item.entity';
import { OrderItemHistory } from '~/order/entities/order-item-history.entity';
import { OrderShipping } from '~/order/entities/order-shipping.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderInfo,
      OrderItem,
      OrderItemHistory,
      OrderShipping,
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
