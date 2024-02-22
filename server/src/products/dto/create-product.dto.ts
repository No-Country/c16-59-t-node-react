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
  @IsString()
  @MinLength(1)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsIn(['fruit', 'vegetable', 'processed-food'])
  category: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  image?: string[];

  @IsString()
  @IsOptional()
  slug?: string;

  @IsIn(['1000gr', '500gr', 'bandeja', 'manojo', 'unidad'])
  salesPresentation: string[];
}
