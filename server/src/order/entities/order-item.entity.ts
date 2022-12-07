import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderStatus } from '~/order/order-status.enum';
import { OrderInfo } from '~/order/entities/order-info.entity';
import { Product } from '~/product/entities/product.entity';
import { ProductOption } from '~/product/entities/product-option.entity';
import { OrderShipping } from '~/order/entities/order-shipping.entity';

@Entity('order_item')
export class OrderItem {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '주문 상품 ID',
  })
  orderItemId: number;

  @Column('smallint', {
    name: 'price',
    unsigned: true,
    nullable: false,
    comment: '상품 가격',
  })
  price: number;

  @Column('tinyint', {
    name: 'count',
    unsigned: true,
    nullable: false,
    comment: '상품 개수',
  })
  count: number;

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
    comment: '상품 주문 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '상품 주문 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => OrderInfo, (orderInfo) => orderInfo.orderInfoId)
  @JoinColumn({ name: 'order_info_id' })
  orderInfo: OrderInfo;

  @ManyToOne(() => Product, (product) => product.productId)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => ProductOption, (option) => option.optionId)
  @JoinColumn({ name: 'option_id' })
  option: ProductOption;

  @OneToMany(() => OrderShipping, (orderShipping) => orderShipping.orderItem)
  shipping: OrderShipping[];

  constructor(partial?: Partial<OrderItem>) {
    Object.assign(this, partial);
  }
}
