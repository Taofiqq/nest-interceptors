import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService, User } from './app.service';
import { CustomInterceptors } from './interceptors/custom.interceptor';
import { ExceptionInterceptor } from './interceptors/exception.interceptor';
import { LoggerInterceptor } from './interceptors/logger.interceptor';

@Controller()
// @UseInterceptors(CustomInterceptors)
// @UseInterceptors(LoggerInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Get('/exception')
  @UseInterceptors(ExceptionInterceptor)
  getUsersException() {
    throw new Error('Exception');
  }
}
