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
  stock: number;

  @IsIn(['fruit', 'vegetable', 'processed_food'])
  category: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  image?: string[];

  @IsString()
  @IsOptional()
  slug?: string;
}
