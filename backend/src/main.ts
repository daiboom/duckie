import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 4000;
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(port, () => {
    console.log(`Application running on port ${port}`);
  });
}
bootstrap();
