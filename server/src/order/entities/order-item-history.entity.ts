import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatus } from '~/order/order-status.enum';
import { OrderItem } from '~/order/entities/order-item.entity';

@Entity('order_item_history')
export class OrderItemHistory {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '히스토리 ID',
  })
  historyId: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    name: 'status',
    nullable: false,
    comment: '주문 상품 상태',
  })
  status: OrderStatus;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '히스토리 일시',
  })
  createdAt: Date;

  @ManyToOne(() => OrderItem, (orderItem) => orderItem.orderItemId)
  @JoinColumn({ name: 'order_item_id' })
  orderItem: OrderItem;
}
