import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePharmacyViewModel } from '../hooks/usePharmacyViewModel';
import { PharmacyCard } from '../components/PharmacyCard';
import LoadingSkeleton from '@/core/components/LoadingSkeleton';

const PharmacyPage: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = usePharmacyViewModel();

  if (isLoading) return <LoadingSkeleton className="h-64 w-full" />;
  if (error) return <div className="p-4 text-red-500">{t('common.error')}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold group flex items-center gap-3">
        <span className="p-2 bg-primary/10 rounded-lg text-primary">
           Pharmacy
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item) => (
          <PharmacyCard key={item.id} item={item} />
        ))}
        {(!data || data.length === 0) && (
           <div className="col-span-full py-12 text-center text-slate-500">
              No items found.
           </div>
        )}
      </div>
    </div>
  );
};

export default PharmacyPage;
