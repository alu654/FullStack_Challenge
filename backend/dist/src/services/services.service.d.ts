import { Repository } from 'typeorm';
import { Service } from '../entityes/service.entity';
export declare class ServicesService {
    private servicesRepository;
    constructor(servicesRepository: Repository<Service>);
    findAll(): Promise<Service[]>;
    findById(id: number): Promise<Service>;
    create(service: Service): Promise<Service>;
}
