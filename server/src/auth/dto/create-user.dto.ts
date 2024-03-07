import {
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  photograph?: string;

  @IsString()
  @MinLength(8)
  phone: string;

  @IsString()
  identityType: string;

  @IsInt()
  @IsPositive()
  identityNumber: number;

  @IsString()
  @MinLength(1)
  city: string;

  @IsString()
  address: string;

  @IsString()
  @MinLength(1)
  district: string;
}
