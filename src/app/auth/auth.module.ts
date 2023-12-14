import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from '../users/users.repository';
import { PasswordService } from 'src/shared/pass';
import { AuthToken } from 'src/shared/auth.guard';

@Module({
  providers: [AuthService,UserRepository,PasswordService, AuthToken],
  controllers: [AuthController]
})
export class AuthModule {}
