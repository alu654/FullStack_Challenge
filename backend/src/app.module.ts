import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Service } from './entityes/service.entity';
import { ServicesModule } from './module/services.module';
import { ScheduleModule } from './module/schedule.module';
import { BookingModule } from './module/booking.module';
import { Schedule } from './entityes/schedule.entity';
import { Booking } from './entityes/booking.entity';
import { User } from './entityes/user.entity';
import { UserModule } from './module/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,// normalmente este es el predeterminado pero hay que cambiarlo depende de lo que el usuario elija  
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Service, Booking, Schedule, User], 
      synchronize: true,
      
    }),
    ServicesModule,
    ScheduleModule,
    BookingModule, 
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
