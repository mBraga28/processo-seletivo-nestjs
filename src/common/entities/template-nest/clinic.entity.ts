import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({})
export class Clinic extends Model<Clinic> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  // ID: ID da clínica.
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // Nome: Nome da clínica.
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // Nome do Proprietário: Nome do Proprietário da clínica.
  ownerName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // CEP: CEP da clínica.
  cep: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // UF: União Federativa do clínica.
  uf: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // Cidade: Cidade da clínica.
  city: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // Bairro: Bairro da clínica.
  neighborhood: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // Rua: Rua da clínica.
  street: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // Número: Número da clínica.
  number: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // Complemento: Complemento da clínica.
  complement: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  // Telefone: Número de telefone da clínica.
  phone: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  // Email: Endereço de email da clínica.
  email: string;
}

