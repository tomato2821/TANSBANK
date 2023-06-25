import { Injectable } from '@nestjs/common';
import { ProductosRepository } from './productos.repository';
import { Producto } from './productos.entity';
import { TbkService } from '../tbk/tbk.service';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductosService {
  constructor(
    private readonly productosRepository: ProductosRepository,
    private readonly tbkService: TbkService,
  ) {}

  listar(): Array<Producto> {
    return this.productosRepository.find();
  }

  async comprar(idProducto: string) {
    const producto: Producto = await this.productosRepository.findOne(
      idProducto,
    );
    const iniciarTransaccionResult = await this.tbkService.iniciarTransaccion({
      amount: producto.precio,
      buy_order: `TEST_ORDER_${producto.id}`,
      return_url: 'http://localhost:4200/webpay/retorno',
      session_id: randomUUID(),
    });
    return iniciarTransaccionResult;
  }

  async finalizarCompra(token: string) {
    const result = await this.tbkService.confirmarTransaccion({ token });
    return result;
  }
}
