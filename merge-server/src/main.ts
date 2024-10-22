import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200'], // Replace with your Angular app's URL
   // origin: ['https://maricointellivoice.atriina.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // If you are using cookies or authorization headers
  });
  await app.listen(3000);
}
bootstrap();
