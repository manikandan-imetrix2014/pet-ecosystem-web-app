import { useQuery } from '@tanstack/react-query';
import { vet_doctorRepository } from '../repository/vet_doctor.repository';

export const useVetDoctorViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['vet_doctor'],
    queryFn: () => vet_doctorRepository.getVetDoctorData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
