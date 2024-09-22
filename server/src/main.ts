import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ParserNode} from '~shared';

const a = {} as ParserNode;
console.log(a);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}

bootstrap();
