import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global scoped interceptor
  // app.useGlobalInterceptors(new CustomInterceptors());
  await app.listen(3000);
}
bootstrap();
