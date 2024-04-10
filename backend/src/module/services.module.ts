import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from '../services/services.service';
import { ServicesController } from '../controllers/services.controller';
import { Service } from '../entityes/service.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  controllers: [ServicesController],
  providers: [ServicesService], 
  exports: [TypeOrmModule],
})
export class ServicesModule {}
