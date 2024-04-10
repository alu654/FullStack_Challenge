import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Service } from './service.entity'; 

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  dateTime: Date;

  @ManyToOne(() => Service, service => service.bookings)
  service: Service;
}
