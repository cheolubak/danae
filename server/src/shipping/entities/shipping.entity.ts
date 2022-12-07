import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('shipping')
export class Shipping {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '배송정보 ID',
  })
  shippingId: number;

  @Column('varchar', {
    length: 20,
    name: 'name',
    nullable: false,
    comment: '배송 업체명',
  })
  name: string;

  @Column('varchar', {
    length: 50,
    name: 'url',
    nullable: false,
    comment: '배송 조회 URL',
  })
  url: string;

  @Column('boolean', {
    name: 'is_delete',
    nullable: false,
    default: false,
    comment: '배송 정보 삭제 여부',
  })
  isDelete: boolean;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '배송 정보 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '배송 정보 등록 일시',
  })
  updatedAt: Date;
}
