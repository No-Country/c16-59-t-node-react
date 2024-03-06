import { IsIn, IsString } from 'class-validator';

export class CreateDeliveryDto {
  @IsIn(['entrega-puerta-a-puerta', 'entrega-en-nuestra-sede'])
  type: string[];

  @IsString()
  description: string;

  @IsString()
  image: string;
}
