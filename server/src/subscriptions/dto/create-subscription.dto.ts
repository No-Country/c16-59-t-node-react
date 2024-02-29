import {
  IsArray,
  IsIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateSubscriptionDto {
  @IsIn(['weekly', 'monthly'])
  type: string[];

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  image?: string[];

  @IsNumber()
  @IsPositive()
  quantityFruit: number;

  @IsNumber()
  @IsPositive()
  quantityVegetable: number;

  @IsNumber()
  @IsPositive()
  quantityProcessedFood: number;
}
