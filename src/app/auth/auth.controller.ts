import { Body, Controller, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}
  @Post('login')
  @SetMetadata('excludeFromAuth', true)
  login(@Body() body: LoginDTO) {
    return this.service.login(body);
  }
}
