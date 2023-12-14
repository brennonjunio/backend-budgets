import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/auth.dto';
import { UserRepository } from '../users/users.repository';
import { GenerateException } from 'src/shared/ReturnsError';
import { isEmpty } from 'lodash';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(params: LoginDTO) {
    try {
      const result = await this.userRepository.getUserByEmail(params.email);
      if (isEmpty(result)) {
        throw new Error('Usuario ou senha Invalidos');
      }
      const validatePasswrod = await bcrypt.compare(
        params.password,
        result.senha,
      );
      if (validatePasswrod) {
        const token = jwt.sign(
          {
            user: result.nm_usuario,
            userId: result.cd_usuario,
          },
          process.env.SECRET,
          { expiresIn: '8h' },
        );
        return {
          token,
          user: result.nm_usuario,
          userId: result.cd_usuario,
        };
      }
      throw new Error('Usuario ou senha Invalidos');
    } catch (error) {
      GenerateException(error);
    }
  }
  async validateToken(token: string){
    let result:any;
    try {
      const secret = process.env.SECRET;
      const decoded = jwt.verify(token, String(secret), {
        ignoreExpiration: false,
      });

      result = { isValidToken: true, data: decoded };
    } catch (err) {
      result = { isValidToken: false, error: "Token Invalido ou Expirado" };
    }
    return result;
  }
}
