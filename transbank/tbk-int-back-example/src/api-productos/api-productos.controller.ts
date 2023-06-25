import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { ListarProductosApiResponse } from './responses/listar-productos.response';
import { ProductosService } from '../productos/productos.service';
import { IniciarTransaccionResponse } from './responses/iniciar-transaccion.response';
import { IniciarTransaccionDto } from './dtos/comprar.dto';
import { ValidationExceptionFilter } from '../filters/errors.filter';
import { ValidarTransaccionDto } from './dtos/confirmar.dto';
import { ValidarTransaccionResponse } from './responses/validar-transaccion.response';

@Controller()
@UseFilters(ValidationExceptionFilter)
export class ApiProductosController {
  constructor(private readonly service: ProductosService) {}

  @Get('listar-productos')
  async listar(): Promise<ListarProductosApiResponse> {
    const productos = await this.service.listar();
    return new ListarProductosApiResponse(productos);
  }

  @Post('comprar-producto')
  async comprar(
    @Body() body: IniciarTransaccionDto,
  ): Promise<IniciarTransaccionResponse> {
    const { idProducto } = body;
    const result = await this.service.comprar(idProducto);
    return new IniciarTransaccionResponse(result, true);
  }

  @Post('validar-transaccion')
  async validar(
    @Body() body: ValidarTransaccionDto,
  ): Promise<ValidarTransaccionResponse> {
    const { token } = body;
    const result = await this.service.finalizarCompra(token);
    return new ValidarTransaccionResponse(result);
  }
}
