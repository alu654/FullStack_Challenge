"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const booking_entity_1 = require("../entityes/booking.entity");
const service_entity_1 = require("../entityes/service.entity");
let BookingService = class BookingService {
    constructor(bookingRepository, serviceRepository) {
        this.bookingRepository = bookingRepository;
        this.serviceRepository = serviceRepository;
    }
    async create(createBookingDto) {
        const service = await this.serviceRepository.findOneBy({ id: createBookingDto.serviceId });
        if (!service) {
            throw new Error('Service not found');
        }
        const booking = this.bookingRepository.create({
            ...createBookingDto,
            service,
        });
        return this.bookingRepository.save(booking);
    }
    async findAll() {
        return this.bookingRepository.find({ relations: ['service'] });
    }
    async findById(id) {
        const booking = await this.bookingRepository.findOne({
            where: { id: +id },
            relations: ['service'],
        });
        if (!booking) {
            throw new common_1.NotFoundException(`Booking with ID "${id}" not found.`);
        }
        return booking;
    }
    async delete(id) {
        const result = await this.bookingRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Booking with ID "${id}" not found.`);
        }
    }
    async update(id, createBookingDto) {
        let booking = await this.bookingRepository.findOne({
            where: { id: +id },
            relations: ['service'],
        });
        if (!booking) {
            throw new common_1.NotFoundException(`Booking with ID "${id}" not found.`);
        }
        if (createBookingDto.serviceId !== undefined) {
            const service = await this.serviceRepository.findOneBy({ id: createBookingDto.serviceId });
            if (!service) {
                throw new common_1.NotFoundException(`Service with ID "${createBookingDto.serviceId}" not found.`);
            }
            booking.service = service;
        }
        if (createBookingDto.dateTime) {
            booking.dateTime = createBookingDto.dateTime;
        }
        return this.bookingRepository.save(booking);
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __param(1, (0, typeorm_1.InjectRepository)(service_entity_1.Service)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BookingService);
//# sourceMappingURL=booking.service.js.map