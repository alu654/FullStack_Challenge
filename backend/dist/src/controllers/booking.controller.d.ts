import { CreateBookingDto } from '../dto/create-booking.dto';
import { Booking } from '../entityes/booking.entity';
import { BookingService } from '../services/booking.service';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    delete(id: string): Promise<void>;
    update(id: string, createBookingDto: CreateBookingDto): Promise<Booking>;
    findOne(id: string): Promise<Booking>;
}
