import { LoggerModule } from 'nestjs-pino';
import { ApiProductosModule } from './api-productos/api-productos.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TbkApiModule } from './tbk/tbk.module';
import { LoggerMiddleware } from './middlewares/http-logger.middleware';

@Module({
  imports: [ApiProductosModule, LoggerModule.forRoot(), TbkApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
