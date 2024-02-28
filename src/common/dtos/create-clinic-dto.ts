import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicDto {

  @ApiProperty()
  @MinLength(4)
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  ownerName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  cep: string;

  @ApiProperty()
  @IsString()
  uf: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  neighborhood: string;

  @ApiProperty()
  @IsString()
  street: string;

  @ApiProperty()
  @IsString()
  number?: string;

  @ApiProperty()
  @IsString()
  complement?: string;

  @ApiProperty()
  @Transform(({ value }) => value.replace(/\D+/g, ''))
  phone: string;
}
