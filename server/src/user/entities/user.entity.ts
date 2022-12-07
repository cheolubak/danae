import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn('int', {
    name: 'id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @Column('varchar', {
    length: 36,
    name: 'uid',
    nullable: false,
    comment: '파이어베이스 UID',
  })
  uid: string;

  @Column('varchar', {
    length: 50,
    name: 'email',
    nullable: true,
    comment: '이메일',
  })
  email: string;

  @Column('varchar', {
    length: 20,
    name: 'nickname',
    nullable: false,
    comment: '사용자 닉네임',
  })
  nickname: string;

  @Column('varchar', {
    length: 100,
    name: 'profile',
    nullable: false,
    comment: '사용자 프로필 URL or BASE64',
  })
  profile: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '사용자 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '사용자 수정 일시',
  })
  updatedAt: Date;

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }
}
