// auth-token.guard.ts
import { CanActivate, ExecutionContext, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from '../app/auth/auth.service';
import { GenerateException } from './ReturnsError';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthToken implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { authorization } = context.switchToHttp().getRequest().headers;
    const excludeFromAuth = this.reflector.get<boolean>('excludeFromAuth', context.getHandler());

    if (excludeFromAuth) {
      return true;
    }

    try {
      const validationResult = await this.authService.validateToken(authorization);

      if (validationResult.isValidToken) {
        return true;
      } else {
        throw new Error(validationResult.error);
      }
    } catch (error) {
      GenerateException(error, HttpStatus.UNAUTHORIZED);
    }
  }
}
