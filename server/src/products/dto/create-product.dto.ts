import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({})
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({})
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({})
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({})
  @IsIn(['fruit', 'vegetable', 'processed-food'])
  category: string[];

  @ApiProperty({})
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  image?: string[];

  @ApiProperty({})
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({})
  @IsIn(['1000gr', '500gr', 'bandeja', 'manojo', 'unidad'])
  salesPresentation: string[];
}
