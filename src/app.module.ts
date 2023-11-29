import { Module } from '@nestjs/common';
import { ProductsModule } from './app/products/products.module';
import { ResponseInterceptor } from './shared/response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
  
})
export class AppModule {}
