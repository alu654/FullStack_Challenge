
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from '../entityes/schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  async create(dateTime: Date, serviceId?: number): Promise<Schedule> {
    const schedule = this.scheduleRepository.create({ dateTime, service: { id: serviceId } });
    return this.scheduleRepository.save(schedule);
  }


}
