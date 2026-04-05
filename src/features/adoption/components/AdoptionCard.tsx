import React from 'react';
import { AdoptionModel } from '../models/adoption.model';

interface AdoptionCardProps {
  item: AdoptionModel;
}

export const AdoptionCard: React.FC<AdoptionCardProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
    </div>
  );
};
