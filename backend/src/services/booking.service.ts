import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { Booking } from '../entityes/booking.entity';
import { Service } from '../entityes/service.entity'; 



@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const service = await this.serviceRepository.findOneBy({ id: createBookingDto.serviceId });
    if (!service) {
      throw new Error('Service not found'); 
    }
    const booking = this.bookingRepository.create({
      ...createBookingDto,
      service, 
    });
    return this.bookingRepository.save(booking);
  }
  async findAll(): Promise<Booking[]>{
    return this.bookingRepository.find({relations: ['service']});
  }

  async findById(id: string): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({
      where: { id: +id },
      relations: ['service'],
    });
  
    if (!booking) {
      throw new NotFoundException(`Booking with ID "${id}" not found.`);
    }
  
    return booking;
  }
  
  async delete(id: string): Promise<void> {
    const result = await this.bookingRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Booking with ID "${id}" not found.`);
    }
  }
  async update(id: string, createBookingDto: CreateBookingDto): Promise<Booking> {
    let booking = await this.bookingRepository.findOne({
      where: { id: +id },
      relations: ['service'],
    });
  
    if (!booking) {
      throw new NotFoundException(`Booking with ID "${id}" not found.`);
    }
  
    if (createBookingDto.serviceId !== undefined) {
      const service = await this.serviceRepository.findOneBy({ id: createBookingDto.serviceId });
      if (!service) {
        throw new NotFoundException(`Service with ID "${createBookingDto.serviceId}" not found.`);
      }
      booking.service = service;
    }
    if (createBookingDto.dateTime) {
      booking.dateTime = createBookingDto.dateTime;
    }
  
    return this.bookingRepository.save(booking);
  }

  
  
}
