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

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '주소 ID',
  })
  addressId: number;

  @Column('varchar', {
    length: 20,
    name: 'alias',
    nullable: false,
    comment: '주소 별칭',
  })
  alias: string;

  @Column('varchar', {
    length: 11,
    name: 'tel',
    nullable: false,
    comment: '전화번호',
  })
  tel: string;

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
    nullable: true,
    comment: '상세 주소',
  })
  detailAddress: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '주소 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '주소 수정 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  constructor(partial?: Partial<Address>) {
    Object.assign(this, partial);
  }
}
