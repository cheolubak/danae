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
import { ProductStatus } from '~/product/product-status.enum';
import { Seller } from '~/seller/entities/seller.entity';
import { ProductImage } from '~/product/entities/product-image.entity';
import { ProductOption } from '~/product/entities/product-option.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '상품 ID',
  })
  productId: number;

  @Column('varchar', {
    length: 20,
    name: 'name',
    nullable: false,
    comment: '상품명',
  })
  name: string;

  @Column('text', {
    name: 'description',
    nullable: false,
    comment: '상품 설명',
  })
  description: string;

  @Column('varchar', {
    length: 30,
    name: 'thumbnail',
    nullable: false,
    comment: '상품 썸네일',
  })
  thumbnail: string;

  @Column({
    type: 'enum',
    name: 'status',
    enum: ProductStatus,
    default: ProductStatus.TEMP,
    nullable: false,
    comment: '상품 상태',
  })
  status: ProductStatus;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '상품 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '상품 수정 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => Seller, (seller) => seller.userId)
  @JoinColumn({ name: 'user_id' })
  seller: Seller;

  @OneToMany(() => ProductImage, (image) => image.product)
  images: ProductImage[];

  @OneToMany(() => ProductOption, (option) => option.product)
  options: ProductOption[];

  constructor(partial?: Partial<Product>) {
    Object.assign(this, partial);
  }
}
