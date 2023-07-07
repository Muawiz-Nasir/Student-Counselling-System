import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Counseller')
export class Counseller {
  @PrimaryGeneratedColumn()
  primaryKey: number;

  @Column()
  id: number;

  @Column({ unique: true })
  loginId: string;

  @Column()
  loginPassword: string;

  @Column({ default: 'COUNSELLER' })
  role: 'COUNSELLER';
}
