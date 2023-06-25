import { IsNotEmpty, IsString } from 'class-validator';

export class ValidarTransaccionDto {
  @IsString()
  @IsNotEmpty()
  public readonly token: string;
}
