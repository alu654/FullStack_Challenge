import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from './services.module';
import { BookingService } from '../services/booking.service';
import { BookingController } from '../controllers/booking.controller';
import { Booking } from '../entityes/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking]),
    ServicesModule, 
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
