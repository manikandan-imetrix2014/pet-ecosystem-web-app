import React from 'react';
import { EmergencyModel } from '../models/emergency.model';

interface EmergencyCardProps {
  item: EmergencyModel;
}

export const EmergencyCard: React.FC<EmergencyCardProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
    </div>
  );
};
