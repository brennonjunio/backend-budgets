import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}
  @Post('getUsersByEmail')
  getUserByEmail(@Body('email') email: string) {
    return this.service.getUserByEmail(email);
  }
  @Post('createUser')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.service.createUser(createUserDto);
  }
}
