import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle('API REST Full CRUD - NestJS')
    .setDescription('Documentación generada con Swagger para la API')
    .setVersion('1.0')
    .addTag('CRUD') // opcional: podés usar tags en tus controladores
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log(`🚀 App corriendo en: http://localhost:3000`);
  console.log(`📚 Swagger disponible en: http://localhost:3000/api-docs`);
}
bootstrap();
