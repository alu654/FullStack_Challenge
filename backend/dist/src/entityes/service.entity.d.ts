import { Schedule } from './schedule.entity';
import { Booking } from './booking.entity';
export declare class Service {
    id: number;
    name: string;
    description: string;
    category: string;
    schedules: Schedule[];
    bookings: Booking[];
}
