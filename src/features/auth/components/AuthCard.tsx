import React from 'react';
import { AuthModel } from '../models/auth.model';

interface AuthCardProps {
  item: AuthModel;
}

export const AuthCard: React.FC<AuthCardProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
    </div>
  );
};
