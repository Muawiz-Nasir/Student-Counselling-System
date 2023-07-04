import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  dob?: string;

  @Column()
  gender?: string;

  @Column()
  phone?: string;

  @Column()
  address?: string;

  @Column()
  highestDegree?: string;

  @Column()
  institue?: string;

  @Column()
  fieldOfStudy?: string;

  @Column()
  passingYear?: string;

  @Column()
  fatherName?: string;

  @Column()
  fatherOccupation?: string;

  @Column()
  religion?: string;
}
