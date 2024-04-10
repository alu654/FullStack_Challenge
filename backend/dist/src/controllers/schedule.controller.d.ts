import { ScheduleService } from '../services/schedule.service';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(createDto: {
        dateTime: Date;
        serviceId?: number;
    }): Promise<import("src/entityes/schedule.entity").Schedule>;
}
