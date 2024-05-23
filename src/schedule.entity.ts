import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;
 
  @Column()
  desc: string;


  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  time: Date;
}