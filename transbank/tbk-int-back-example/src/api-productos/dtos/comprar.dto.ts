import { IsNotEmpty, IsString } from 'class-validator';

export class IniciarTransaccionDto {
  @IsString()
  @IsNotEmpty()
  public readonly idProducto: string;
}
