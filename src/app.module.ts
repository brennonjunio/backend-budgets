import { Module } from '@nestjs/common';
import { ProductsModule } from './app/products/products.module';
import { ResponseInterceptor } from './shared/response.interceptor';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { UsersModule } from './app/users/users.module';
import { PasswordService } from './shared/pass';
import { AuthModule } from './app/auth/auth.module';
import { AuthToken } from './shared/auth.guard';
import { AuthService } from './app/auth/auth.service';
import { UserRepository } from './app/users/users.repository';
import { ProductGroupModule } from './app/product-group/product-group.module';
import { ProductBrandModule } from './app/product-brand/product-brand.module';

@Module({
  imports: [ProductsModule, UsersModule, AuthModule, ProductGroupModule, ProductBrandModule],
  controllers: [],
  providers: [
    PasswordService,
    AuthToken,
    AuthService,
    UserRepository,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  
    {
      provide: APP_GUARD,
      useClass: AuthToken,
    },
  ],
  exports: [PasswordService],
})
export class AppModule {}
