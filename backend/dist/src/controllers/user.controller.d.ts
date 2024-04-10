import { CreateUserDto } from '../dto/createUserDto';
import { User } from '../entityes/user.entity';
import { UserService } from '../services/user.service';
import { LoginUserDto } from '../dto/loginUserDto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    delete(id: string): Promise<void>;
    update(id: string, createUserDto: CreateUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<{
        status: string;
        user?: User;
        message?: string;
    }>;
}
