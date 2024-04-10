import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleService } from '../services/schedule.service';
import { ScheduleController } from '../controllers/schedule.controller';
import { Schedule } from '../entityes/schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule])],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
