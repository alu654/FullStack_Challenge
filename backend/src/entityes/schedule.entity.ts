
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from './service.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp with time zone')
  dateTime: Date;

  @ManyToOne(() => Service, service => service.schedules, {
    onDelete: "CASCADE", 
    nullable: true,
  })
  @JoinColumn({ name: "serviceId" }) 
  service: Service;

  @Column({ nullable: true })
  serviceId: number;
}
