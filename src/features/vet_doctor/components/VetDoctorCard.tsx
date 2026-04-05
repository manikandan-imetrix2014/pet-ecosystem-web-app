import React from 'react';
import { VetDoctorModel } from '../models/vet_doctor.model';

interface VetDoctorCardProps {
  item: VetDoctorModel;
}

export const VetDoctorCard: React.FC<VetDoctorCardProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
    </div>
  );
};
