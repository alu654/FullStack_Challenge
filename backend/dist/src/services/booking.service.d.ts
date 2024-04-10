import { Repository } from 'typeorm';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { Booking } from '../entityes/booking.entity';
import { Service } from '../entityes/service.entity';
export declare class BookingService {
    private readonly bookingRepository;
    private readonly serviceRepository;
    constructor(bookingRepository: Repository<Booking>, serviceRepository: Repository<Service>);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    findById(id: string): Promise<Booking>;
    delete(id: string): Promise<void>;
    update(id: string, createBookingDto: CreateBookingDto): Promise<Booking>;
}
