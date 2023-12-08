import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { GenerateException } from 'src/shared/ReturnsError';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private repository: UserRepository) {}
  async getUserByEmail(email: string) {
    try {
      return await this.repository.getUserByEmail(email);
    } catch (error) {
      GenerateException(error);
    }
  }
  async createUser(params: CreateUserDto) {
    try {
      return await this.repository.createUser(params);
    } catch (error) {
      GenerateException(error);
    }
  }
}
