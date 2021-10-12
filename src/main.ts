import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: ConfigService = app.get(ConfigService)
  const appPort: number = appConfig.get<number>('port')
  await app.listen(appPort);
}
bootstrap();
