import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}
  @Post('getUsersByEmail')
  @SetMetadata('excludeFromAuth', true)

  getUserByEmail(@Body('email') email: string) {
    return this.service.getUserByEmail(email);
  }
  @Post('createUser')
  @SetMetadata('excludeFromAuth', true)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.service.createUser(createUserDto);
  }
}
