import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../entityes/service.entity'; 



@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private servicesRepository: Repository<Service>,
  ) {}

  findAll(): Promise<Service[]> {
    return this.servicesRepository.find();
  }

  findById(id: number): Promise<Service> {
    return this.servicesRepository.findOneBy({ id });
  }
  
  async create(service: Service): Promise<Service> {
    return this.servicesRepository.save(service);
  }
  
  
}
