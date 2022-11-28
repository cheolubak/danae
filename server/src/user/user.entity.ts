import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { length: 36, name: 'uid' })
  uid: string;

  @Column('varchar', { length: 50, name: 'email' })
  email: string;

  @Column('varchar', { length: 20, name: 'nickname' })
  nickname: string;

  @Column('varchar', { length: 30, name: 'profile' })
  profile: string;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  updatedAt: Date;
}
