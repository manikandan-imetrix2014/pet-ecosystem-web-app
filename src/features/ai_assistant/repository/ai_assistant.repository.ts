import { ai_assistantApi } from '../api/ai_assistant.api';
import { mapAiAssistantDtoToModel, AiAssistantModel } from '../models/ai_assistant.model';

export const ai_assistantRepository = {
  getAiAssistantData: async (): Promise<AiAssistantModel[]> => {
    const response = await ai_assistantApi.fetchData();
    return response.data.map(mapAiAssistantDtoToModel);
  },
};
