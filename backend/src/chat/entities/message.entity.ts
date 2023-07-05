import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Chat } from './chat.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  //   @ManyToOne(() => Chat)
  //   @JoinColumn({ name: 'sentBy' })
  //   chatId: Chat;

  @Column({ nullable: false })
  chatId: number;

  @Column({ nullable: false })
  sentById: number;

  @Column({ nullable: false })
  message: string;

  @CreateDateColumn()
  sentAt: Date;
}
