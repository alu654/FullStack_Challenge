"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const service_entity_1 = require("./entityes/service.entity");
const services_module_1 = require("./module/services.module");
const schedule_module_1 = require("./module/schedule.module");
const booking_module_1 = require("./module/booking.module");
const schedule_entity_1 = require("./entityes/schedule.entity");
const booking_entity_1 = require("./entityes/booking.entity");
const user_entity_1 = require("./entityes/user.entity");
const user_module_1 = require("./module/user.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5435,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
                entities: [service_entity_1.Service, booking_entity_1.Booking, schedule_entity_1.Schedule, user_entity_1.User],
                synchronize: true,
            }),
            services_module_1.ServicesModule,
            schedule_module_1.ScheduleModule,
            booking_module_1.BookingModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);