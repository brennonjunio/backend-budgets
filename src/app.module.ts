import { Module } from '@nestjs/common';
import { ProductsModule } from './app/products/products.module';
import { ResponseInterceptor } from './shared/response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UsersModule } from './app/users/users.module';
import { PasswordService } from './shared/pass';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [ProductsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [
    PasswordService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
  exports: [PasswordService],
})
export class AppModule {}
