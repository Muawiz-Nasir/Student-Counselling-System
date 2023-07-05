// import { Student } from 'src/student/entities/student.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  // JoinColumn,
  // ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  //   @ManyToOne(() => Student)
  //   @JoinColumn({ name: 'startedBy' })
  //   startedBy: Student;

  @Column({ nullable: false })
  startedBy: number;

  @CreateDateColumn()
  createdAt: Date;
}
