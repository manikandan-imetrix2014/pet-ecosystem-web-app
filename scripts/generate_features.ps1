$features = @(
    "auth", "dashboard", "media", "pet_shop", "pet_owner", "pharmacy", "vet_doctor", 
    "trainer", "mating", "pet_meat_shop", "community", "daycare", "articles", 
    "announcement", "emergency", "adoption", "pet_spa", "pet_cafe", 
    "stay_with_pet", "ai_assistant"
)

foreach ($f in $features) {
    $f_dir = "src/features/$f"
    $f_name = ($f.Split('_') | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join ""
    
    # Create Directories
    New-Item -ItemType Directory -Path "$f_dir/api" -Force
    New-Item -ItemType Directory -Path "$f_dir/models" -Force
    New-Item -ItemType Directory -Path "$f_dir/repository" -Force
    New-Item -ItemType Directory -Path "$f_dir/hooks" -Force
    New-Item -ItemType Directory -Path "$f_dir/pages" -Force
    New-Item -ItemType Directory -Path "$f_dir/components" -Force
    New-Item -ItemType Directory -Path "$f_dir/routes" -Force

    # 1. API File
    $api_content = @"
import axiosClient from '@/core/network/axiosClient';

export const $($f)Api = {
  fetchData: () => axiosClient.get('/$f'),
  getById: (id: string) => axiosClient.get('/$f/' + id),
};
"@
    $api_content | Out-File -FilePath "$f_dir/api/$f.api.ts" -Encoding utf8

    # 2. Model File
    $model_content = @"
export interface $($f_name)Model {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface $($f_name)Dto {
  id: string;
  display_name: string;
  desc: string;
}

export const map$($f_name)DtoToModel = (dto: $($f_name)Dto): $($f_name)Model => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
"@
    $model_content | Out-File -FilePath "$f_dir/models/$f.model.ts" -Encoding utf8

    # 3. Repository File
    $repo_content = @"
import { $($f)Api } from '../api/$f.api';
import { map$($f_name)DtoToModel, $($f_name)Model } from '../models/$f.model';

export const $($f)Repository = {
  get$($f_name)Data: async (): Promise<$($f_name)Model[]> => {
    const response = await $($f)Api.fetchData();
    return response.data.map(map$($f_name)DtoToModel);
  },
};
"@
    $repo_content | Out-File -FilePath "$f_dir/repository/$f.repository.ts" -Encoding utf8

    # 4. Hook (ViewModel) File
    $hook_content = @"
import { useQuery } from '@tanstack/react-query';
import { $($f)Repository } from '../repository/$f.repository';

export const use$($f_name)ViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['$f'],
    queryFn: () => $($f)Repository.get$($f_name)Data(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
"@
    $hook_content | Out-File -FilePath "$f_dir/hooks/use$($f_name)ViewModel.ts" -Encoding utf8

    # 5. Component File
    $comp_content = @"
import React from 'react';
import { $($f_name)Model } from '../models/$f.model';

interface $($f_name)CardProps {
  item: $($f_name)Model;
}

export const $($f_name)Card: React.FC<$($f_name)CardProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
    </div>
  );
};
"@
    $comp_content | Out-File -FilePath "$f_dir/components/$($f_name)Card.tsx" -Encoding utf8

    # 6. Page File
    $page_content = @"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { use$($f_name)ViewModel } from '../hooks/use$($f_name)ViewModel';
import { $($f_name)Card } from '../components/$($f_name)Card';
import LoadingSkeleton from '@/core/components/LoadingSkeleton';

const $($f_name)Page: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = use$($f_name)ViewModel();

  if (isLoading) return <LoadingSkeleton className="h-64 w-full" />;
  if (error) return <div className="p-4 text-red-500">{t('common.error')}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold group flex items-center gap-3">
        <span className="p-2 bg-primary/10 rounded-lg text-primary">
           $f_name
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item) => (
          <$($f_name)Card key={item.id} item={item} />
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

export default $($f_name)Page;
"@
    $page_content | Out-File -FilePath "$f_dir/pages/$($f_name)Page.tsx" -Encoding utf8

    # 7. Routes File
    $route_content = @"
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const $($f_name)Page = lazy(() => import('../pages/$($f_name)Page'));

export const $($f)Routes: RouteObject[] = [
  {
    path: '$f',
    element: <$($f_name)Page />,
  },
];
"@
    $route_content | Out-File -FilePath "$f_dir/routes/$f.routes.tsx" -Encoding utf8
}
