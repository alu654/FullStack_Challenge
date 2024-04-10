import { Repository } from 'typeorm';
import { User } from '../entityes/user.entity';
import { CreateUserDto } from '../dto/createUserDto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    delete(id: string): Promise<void>;
    update(id: string, createUserDto: CreateUserDto): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    validateUser(email: string, password: string): Promise<User | null>;
}
