import { vet_doctorApi } from '../api/vet_doctor.api';
import { mapVetDoctorDtoToModel, VetDoctorModel } from '../models/vet_doctor.model';

export const vet_doctorRepository = {
  getVetDoctorData: async (): Promise<VetDoctorModel[]> => {
    const response = await vet_doctorApi.fetchData();
    return response.data.map(mapVetDoctorDtoToModel);
  },
};
