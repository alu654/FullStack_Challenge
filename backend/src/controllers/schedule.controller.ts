
import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { ScheduleService } from '../services/schedule.service';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: { dateTime: Date; serviceId?: number }) {
    return this.scheduleService.create(createDto.dateTime, createDto.serviceId);
  }

}
