import { UsersProviders } from './../common/providers/users.providers';
import { ClinicProviders } from 'src/common/providers/clinic.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

@Module({
  imports: [SequelizeModule.forFeature([])],
  exports: [SequelizeModule],
  providers: [...UsersProviders, ...ClinicProviders],
})
export class DataAccessModule { }
