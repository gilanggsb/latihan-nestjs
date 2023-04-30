import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateSchoolDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  school_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('ID')
  phone?: string;
}
