import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '~/user/entities/user.entity';

@Entity('seller')
export class Seller {
  @PrimaryColumn('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('varchar', {
    length: 20,
    name: 'name',
    nullable: false,
    comment: '사업자이름',
  })
  name: string;

  @Column('varchar', {
    length: 10,
    name: 'num',
    nullable: false,
    comment: '사업자번호',
  })
  num: string;

  @Column('varchar', {
    length: 20,
    name: 'type',
    nullable: false,
    comment: '업종/업태',
  })
  type: string;

  @Column('varchar', {
    length: 30,
    name: 'file_path',
    nullable: false,
    comment: '사업자등록증 경로',
  })
  filePath: string;

  @Column('boolean', {
    name: 'is_screen',
    nullable: false,
    default: false,
    comment: '판매자 승인 여부',
  })
  isScreen: boolean;

  @Column('datetime', {
    name: 'screen_at',
    nullable: true,
    comment: '판매자 승인 일시',
  })
  screenAt?: Date;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '판매자 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '판매자 수정 일시',
  })
  updatedAt: Date;

  @OneToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  constructor(partial?: Partial<Seller>) {
    Object.assign(this, partial);
  }
}
