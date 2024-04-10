import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ServicesService } from '../services/services.service';
import { Service } from '../entityes/service.entity'; 

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll(): Promise<Service[]> {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Service> {
    return this.servicesService.findById(id);
  }
}
