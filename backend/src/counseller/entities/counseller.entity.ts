import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Counseller')
export class Counseller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loginId: string;

  @Column()
  loginPassword: string;
}
