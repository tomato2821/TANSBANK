import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosRepository } from './productos.repository';
import { TbkApiModule } from '../tbk/tbk.module';

@Module({
  imports: [TbkApiModule],
  providers: [ProductosService, ProductosRepository],
  exports: [ProductosService],
})
export class ProductosModule {}
