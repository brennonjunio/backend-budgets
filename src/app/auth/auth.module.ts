import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from '../users/users.repository';
import { PasswordService } from 'src/shared/pass';

@Module({
  providers: [AuthService,UserRepository,PasswordService],
  controllers: [AuthController]
})
export class AuthModule {}
