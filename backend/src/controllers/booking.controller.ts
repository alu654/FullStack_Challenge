import { Controller, Post, Body, Get,Delete, Param, Patch } from '@nestjs/common';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { Booking } from '../entityes/booking.entity';
import { BookingService } from '../services/booking.service';


@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }
  @Get()
  findAll(): Promise<Booking[]>{
    return this.bookingService.findAll();
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.bookingService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingService.update(id, createBookingDto);
  } 
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Booking> {
  return this.bookingService.findById(id);
}

}
