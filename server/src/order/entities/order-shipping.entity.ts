import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderShippingStatus } from '~/order/order-shipping-status.enum';
import { OrderItem } from '~/order/entities/order-item.entity';
import { Shipping } from '~/shipping/entities/shipping.entity';

@Entity('order_shipping')
export class OrderShipping {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '배송 ID',
  })
  orderShippingId: number;

  @Column('varchar', {
    length: 20,
    name: 'num',
    nullable: false,
    comment: '운송장번호',
  })
  shippingNum: string;

  @Column({
    type: 'enum',
    enum: OrderShippingStatus,
    default: OrderShippingStatus.READY,
    nullable: false,
    comment: '배송 상태',
  })
  status: OrderShippingStatus;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '배송 등록 일시',
  })
  createdAt: Date;

  @CreateDateColumn({
    type: 'datetime',
    name: 'updated_At',
    nullable: false,
    comment: '배송 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => OrderItem, (orderItem) => orderItem.orderItemId)
  @JoinColumn({ name: 'order_item_id' })
  orderItem: OrderItem;

  @ManyToOne(() => Shipping, (shipping) => shipping.shippingId)
  @JoinColumn({ name: 'shipping_id' })
  shipping: Shipping;
}
