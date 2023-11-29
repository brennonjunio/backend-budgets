import { HttpException, HttpStatus } from "@nestjs/common";
import { get } from 'lodash';

export function GenerateException(error) {
    const message = get(error, 'message', get(error,'response','internal server error'));
    const statusCode = get(error, 'status', HttpStatus.INTERNAL_SERVER_ERROR);
    throw new HttpException({ message, statusCode }, statusCode);
}