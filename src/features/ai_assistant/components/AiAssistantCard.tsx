import React from 'react';
import { AiAssistantModel } from '../models/ai_assistant.model';

interface AiAssistantCardProps {
  item: AiAssistantModel;
}

export const AiAssistantCard: React.FC<AiAssistantCardProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
    </div>
  );
};
