import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, throwError } from 'rxjs';

export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): any {
    return handler
      .handle()
      .pipe(catchError((err) => throwError(() => new BadRequestException())));
  }
}
