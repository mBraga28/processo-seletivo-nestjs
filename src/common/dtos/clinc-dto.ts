import { ApiProperty } from '@nestjs/swagger';

export class ClincDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  cnpj: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  ownerName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  cep: string;

  @ApiProperty()
  uf: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  neighborhood: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  number?: string;

  @ApiProperty()
  complement?: string;

  @ApiProperty()
  phone: string;
}
