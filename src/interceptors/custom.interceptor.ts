import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from 'src/app.service';

export class CustomInterceptors implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    console.log('Before...');
    return handler.handle().pipe(
      map((data) =>
        data.map((item: User) => {
          console.log('After....');
          const res = {
            ...item,
            firstName: item.first_name,
            lastName: item.last_name,
          };
          delete res.first_name, delete res.last_name;
          return res;
        }),
      ),
    );
  }
}
