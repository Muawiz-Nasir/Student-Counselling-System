import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  dob?: string;

  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  highestDegree?: string;

  @Column({ nullable: true })
  institute?: string;

  @Column({ nullable: true })
  fieldOfStudy?: string;

  @Column({ nullable: true })
  passingYear?: string;

  @Column({ nullable: true })
  fatherName?: string;

  @Column({ nullable: true })
  fatherOccupation?: string;

  @Column({ nullable: true })
  religion?: string;

  @Column({ default: 'STUDENT' })
  role: 'STUDENT';
}
