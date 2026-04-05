import { trainerApi } from '../api/trainer.api';
import { mapTrainerDtoToModel, TrainerModel } from '../models/trainer.model';

export const trainerRepository = {
  getTrainerData: async (): Promise<TrainerModel[]> => {
    const response = await trainerApi.fetchData();
    return response.data.map(mapTrainerDtoToModel);
  },
};
