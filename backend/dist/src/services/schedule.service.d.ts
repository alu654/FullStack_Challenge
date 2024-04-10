import { Repository } from 'typeorm';
import { Schedule } from '../entityes/schedule.entity';
export declare class ScheduleService {
    private readonly scheduleRepository;
    constructor(scheduleRepository: Repository<Schedule>);
    create(dateTime: Date, serviceId?: number): Promise<Schedule>;
}
