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

@Entity('product_image')
export class ProductImage {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: false,
    comment: '상품 이미지 ID',
  })
  imageId: number;

  @Column('boolean', {
    name: 'is_main',
    nullable: false,
    comment: '메인 이미지 여부',
  })
  isMain: boolean;

  @Column('tinyint', {
    name: 'order',
    nullable: false,
    unsigned: false,
    comment: '이미지 순서',
  })
  order: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '이미지 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '이미지 수정 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => Product, (product) => product.productId)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  constructor(partial?: Partial<ProductImage>) {
    Object.assign(this, partial);
  }
}
