import { Clinic } from '../entities';

export const ClinicProviders = [
  {
    provide: 'CLINIC_REPOSITORY',
    useValue: Clinic,
  },
];
