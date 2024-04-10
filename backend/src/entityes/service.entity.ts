import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Schedule } from './schedule.entity';
import { Booking } from './booking.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  category: string;


  @OneToMany(() => Schedule, (schedule) => schedule.service)
  schedules: Schedule[];

  @OneToMany(() => Booking, (booking) => booking.service)
  bookings: Booking[];
}

