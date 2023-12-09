import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}
  @Post('login')
  login(@Body() body: LoginDTO) {
    return this.service.login(body);
  }
}
