import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, User, LogIn, Heart } from 'lucide-react';
import { useAuthViewModel } from '../hooks/useAuthViewModel';
import CustomButton from '@/core/components/CustomButton';
import CustomInput from '@/core/components/CustomInput';
import { ROUTES } from '@/core/routing/RouteConstants';

const RegisterPage = () => {
  const { t } = useTranslation();
  const { register, isLoading, error: authError } = useAuthViewModel();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="w-full max-w-md glass-card rounded-2xl p-8 space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="text-center space-y-2">
          <div className="mx-auto h-12 w-12 bg-secondary-600 text-white rounded-xl flex items-center justify-center">
            <Heart className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t('common.register')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Join the global pet ecosystem today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <CustomInput
              label="Full Name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              leftIcon={<User className="h-5 w-5" />}
              required
            />
            <CustomInput
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail className="h-5 w-5" />}
              required
            />
            <CustomInput
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock className="h-5 w-5" />}
              required
            />
          </div>

          {authError && (
             <p className="text-sm font-medium text-red-500 text-center animate-bounce">
               {authError}
             </p>
          )}

          <CustomButton variant="secondary" type="submit" className="w-full" loading={isLoading}>
            <LogIn className="mr-2 h-5 w-5" /> {t('common.register')}
          </CustomButton>
        </form>

        <div className="text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <NavLink
              to={ROUTES.AUTH.LOGIN}
              className="font-semibold text-secondary-600 hover:text-secondary-700 underline-offset-4 hover:underline"
            >
              {t('common.login')}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
