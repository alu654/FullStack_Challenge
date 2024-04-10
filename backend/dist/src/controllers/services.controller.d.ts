import { ServicesService } from '../services/services.service';
import { Service } from '../entityes/service.entity';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): Promise<Service[]>;
    findOne(id: number): Promise<Service>;
}
