import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error'],
  });
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Backend product store')
    .setDescription('Product Store API docs')
    .setVersion('1.0')
    .build();
    
  const swaggerDocs = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup("docs",app,swaggerDocs);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
