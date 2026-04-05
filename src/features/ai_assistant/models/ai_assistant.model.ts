export interface AiAssistantModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface AiAssistantDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapAiAssistantDtoToModel = (dto: AiAssistantDto): AiAssistantModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
