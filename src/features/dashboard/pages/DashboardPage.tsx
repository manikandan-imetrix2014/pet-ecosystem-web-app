import React from 'react';
import { useTranslation } from 'react-i18next';
import LoadingSkeleton from '@/core/components/LoadingSkeleton';
import { Plus, ArrowRight, Stethoscope } from 'lucide-react';
import ResponsiveContainer from '@/core/components/ResponsiveContainer';
import CustomButton from '@/core/components/CustomButton';
import { useDashboardViewModel } from '../hooks/useDashboardViewModel';

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { isLoading, error, stats, userName } = useDashboardViewModel();

  if (isLoading) return <LoadingSkeleton className="h-64 w-full" />;
  if (error) return <div className="p-4 text-red-500">{t('common.error')}</div>;

  // Mock data for initial empty state
  const mockAppointments = [
    { id: '1', title: 'Routine Checkup - Buddy', info: 'Dr. Sarah Johnson • Tomorrow at 10:00 AM', status: 'Upcoming' },
    { id: '2', title: 'Vaccination - Luna', info: 'Global Pet Clinic • Apr 12 at 2:30 PM', status: 'Scheduled' }
  ];

  return (
    <ResponsiveContainer className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t('dashboard.welcome', { name: userName })}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Here is what's happening with your pets today.
          </p>
        </div>
        <div className="flex gap-2">
          <CustomButton variant="primary" className="rounded-full shadow-lg">
            <Plus className="mr-2 h-5 w-5" /> Add New Pet
          </CustomButton>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:shadow-2xl transition-shadow cursor-pointer">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointments Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Upcoming Appointments</h2>
            <CustomButton variant="ghost" size="sm">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </CustomButton>
          </div>
          <div className="space-y-4">
            {mockAppointments.map((apt) => (
              <div key={apt.id} className="glass-card p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">{apt.title}</p>
                    <p className="text-sm text-slate-500">{apt.info}</p>
                  </div>
                </div>
                <div className="flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Manage</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default DashboardPage;
