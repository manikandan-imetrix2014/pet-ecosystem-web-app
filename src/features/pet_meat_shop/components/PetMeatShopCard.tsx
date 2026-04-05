import React from 'react';
import { PetMeatShopModel } from '../models/pet_meat_shop.model';

interface PetMeatShopCardProps {
  item: PetMeatShopModel;
}

export const PetMeatShopCard: React.FC<PetMeatShopCardProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
    </div>
  );
};
