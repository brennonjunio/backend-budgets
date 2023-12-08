import db2 from 'src/database/databasePrisma';
import { CreateUserDto } from './dto/user.dto';
import { PasswordService } from 'src/shared/pass';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRepository {
  constructor(private passwordService: PasswordService) {}
  async createUser(p: CreateUserDto) {
    const hashPass = await this.passwordService.hashPassword(p.password);

    return await db2.usuarios.create({
      data: { nm_usuario: p.name, senha: hashPass, email: p.email },
    });
  }
  async getUserByEmail(email: string) {
    return await db2.usuarios.findFirst({ where: { email: email } });
  }
}
