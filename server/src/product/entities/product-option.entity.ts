import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '~/product/entities/product.entity';

@Entity('product_option')
export class ProductOption {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: false,
    comment: '옵션 ID',
  })
  optionId: number;

  @Column('varchar', {
    length: 20,
    name: 'option',
    nullable: false,
    comment: '옵션명',
  })
  option: string;

  @Column('smallint', {
    name: 'price',
    unsigned: false,
    nullable: false,
    comment: '옵션 가격',
  })
  price: number;

  @Column('smallint', {
    name: 'count',
    unsigned: false,
    nullable: false,
    comment: '옵션 개수',
  })
  count: number;

  @Column('boolean', {
    name: 'is_delete',
    nullable: false,
    default: false,
    comment: '옵션 삭제 여부',
  })
  isDelete: boolean;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '옵션 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '옵션 수정 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => Product, (product) => product.productId)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  constructor(partial?: Partial<ProductOption>) {
    Object.assign(this, partial);
  }
}
