import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
@Injectable()
export class AppService {
  getUsers(): User[] {
    return [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'John@gmail.com',
      },
      {
        id: 2,
        first_name: 'Bod',
        last_name: 'Madley',
        email: 'todd@gmail.com',
      },
    ];
  }
}
