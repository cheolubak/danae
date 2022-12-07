import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '~/user/entities/user.entity';

@Entity('order_info')
export class OrderInfo {
  @PrimaryGeneratedColumn('increment', {
    name: 'id',
    unsigned: true,
    comment: '주문 ID',
  })
  orderInfoId: number;

  @Column('varchar', {
    length: 20,
    name: 'num',
    nullable: false,
    comment: '주문번호',
  })
  orderNum: string;

  @Column('smallint', {
    name: 'price',
    unsigned: true,
    nullable: false,
    comment: '주문 금액',
  })
  price: number;

  @Column('varchar', {
    length: 50,
    name: 'address',
    nullable: false,
    comment: '주소',
  })
  address: string;

  @Column('varchar', {
    length: 50,
    name: 'detail_address',
    nullable: false,
    comment: '상세 주소',
  })
  detailAddress: string;

  @Column('varchar', {
    length: 6,
    name: 'postcode',
    nullable: false,
    comment: '우편번호',
  })
  postcode: string;

  @Column('varchar', {
    length: 20,
    name: 'name',
    nullable: false,
    comment: '주문자',
  })
  name: string;

  @Column('varchar', {
    length: 11,
    name: 'tel',
    nullable: false,
    comment: '전화번호',
  })
  tel: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '주문 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '주문 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  constructor(partial?: Partial<OrderInfo>) {
    Object.assign(this, partial);
  }
}
