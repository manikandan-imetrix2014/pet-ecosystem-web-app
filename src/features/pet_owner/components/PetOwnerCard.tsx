import React from 'react';
import { PetOwnerModel } from '../models/pet_owner.model';

interface PetOwnerCardProps {
  item: PetOwnerModel;
}

export const PetOwnerCard: React.FC<PetOwnerCardProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
    </div>
  );
};
