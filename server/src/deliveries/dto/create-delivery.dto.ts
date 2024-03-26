import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

export class CreateDeliveryDto {
  @ApiProperty({})
  @IsIn(['entrega-puerta-a-puerta', 'entrega-en-nuestra-sede'])
  type: string[];

  @ApiProperty({})
  @IsString()
  description: string;

  @ApiProperty({})
  @IsString()
  image: string;
}
