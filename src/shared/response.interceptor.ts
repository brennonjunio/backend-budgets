import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        if (data === null || data === undefined || (Array.isArray(data) && data.length === 0)) {
          return {
            statusCode: HttpStatus.NO_CONTENT, 
            message: 'Não contém dados',
            timestamp: new Date().toISOString(),
            data,
          };
        } else {
          
          return {
            statusCode: HttpStatus.OK,
            message: 'Success',
            timestamp: new Date().toISOString(),
            data,
          };
        }
      }),
    );
  }
}
