// ReturnsError.ts
import { HttpException, HttpStatus } from '@nestjs/common';
import { get } from 'lodash';

export function GenerateException(error:any, statusCode = HttpStatus.INTERNAL_SERVER_ERROR) {
    const message = get(error, 'message', get(error, 'response', 'Internal Server Error'));
    throw new HttpException({ message, statusCode }, statusCode);
}
