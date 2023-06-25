import { Module } from '@nestjs/common';
import { ApiProductosController } from './api-productos.controller';
import { ProductosModule } from '../productos/productos.module';

@Module({
  imports: [ProductosModule],
  controllers: [ApiProductosController],
  providers: [],
})
export class ApiProductosModule {}
