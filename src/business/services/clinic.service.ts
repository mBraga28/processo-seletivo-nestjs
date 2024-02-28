import { ErrorMessages } from '../../common/enums/error-messages.enum';
import { CreateClinicDto } from './../../common/dtos/create-clinic-dto';
import { Clinic } from './../../common/entities';
import { ConflictException, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ClinicService {
  constructor(
    @Inject('CLINIC_REPOSITORY')
    private clinicRepository: typeof Clinic,
  ) { }

  async create(createClinicDto: CreateClinicDto) {
    await this.createClinic(createClinicDto);
  }

  private async createClinic(createClinicDto: CreateClinicDto) {
    await this.clinicRepository.create<Clinic>({
      name: createClinicDto.name,
      email: createClinicDto.email,
      phone: createClinicDto.phone,
      ownerName: createClinicDto.ownerName,
      cep: createClinicDto.cep,
      uf: createClinicDto.uf,
      city: createClinicDto.city,
      neighborhood: createClinicDto.neighborhood,
      street: createClinicDto.street,
      number: createClinicDto.number,
      complement: createClinicDto.complement,
    });
  }

  async list() {
    return await this.clinicRepository.findAll();
  }

  async findById(id: string) {
    return await this.clinicRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, clincDto: CreateClinicDto) {
    const clinic = await this.findById(id);
    if (!clinic) {
      throw new Error('Clínica não encontrada!');
    }

    // Atualizar as propriedades da clínica
    clinic.name = clincDto.name;
    clinic.phone = clincDto.phone;
    clinic.email = clincDto.email;

    clinic.ownerName = clincDto.ownerName;

    clinic.cep = clincDto.cep;
    clinic.uf = clincDto.uf;
    clinic.city = clincDto.city;
    clinic.neighborhood = clincDto.neighborhood;
    clinic.street = clincDto.street;
    clinic.number = clincDto.number;
    clinic.complement = clincDto.complement;

    try {
      await clinic.save();
    } catch (error) {
      console.error('Erro ao salvar a clínica:', error);
      throw error;
    }

    return clinic;
  }

  async delete(id: string) {
    const clinic = await this.findById(id);
    if (!clinic) {
      throw new ConflictException(null, ErrorMessages.CLINIC_NOT_FOUND);
    }

    try {
      await clinic.destroy();
    } catch (error) {
      console.error('Erro ao excluir a clínica:', error);
      throw error;
    }
  }
}
