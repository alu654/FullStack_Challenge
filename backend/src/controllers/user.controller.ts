import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUserDto';
import { User } from '../entityes/user.entity';
import { UserService } from '../services/user.service';
import { LoginUserDto } from '../dto/loginUserDto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.update(id, createUserDto);
  }
  
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<{ status: string; user?: User; message?: string }> {
    const user = await this.userService.validateUser(loginUserDto.email, loginUserDto.password);
    if (user) {
      return { status: 'success', user };
    } else {
      return { status: 'fail', message: 'Invalid credentials' };
    }
  }

} 
