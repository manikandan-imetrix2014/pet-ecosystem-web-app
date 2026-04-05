import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Stethoscope, 
  Users, 
  Heart, 
  Calendar, 
  Settings, 
  ShieldAlert,
  MessageSquare,
  Coffee,
  Store,
  BookOpen
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'dashboard.title', path: '/dashboard' },
  { icon: ShoppingBag, label: 'features.pet_shop', path: '/pet-shop' },
  { icon: Stethoscope, label: 'features.vet_doctor', path: '/vet-doctor' },
  { icon: Users, label: 'features.community', path: '/community' },
  { icon: Heart, label: 'features.adoption', path: '/adoption' },
  { icon: Calendar, label: 'features.daycare', path: '/daycare' },
  { icon: MessageSquare, label: 'ai.assistant_title', path: '/ai-assistant' },
  { icon: Coffee, label: 'features.pet_cafe', path: '/pet-cafe' },
  { icon: Store, label: 'features.pharmacy', path: '/pharmacy' },
  { icon: BookOpen, label: 'features.articles', path: '/articles' },
  { icon: ShieldAlert, label: 'features.emergency', path: '/emergency' },
];

const ResponsiveSidebar = ({ className, onClose }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <aside className={cn('flex flex-col h-full border-r bg-white dark:bg-slate-900', className)}>
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group',
                isActive
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/20 dark:text-primary-400'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
              )
            }
          >
            <item.icon className="h-5 w-5 rtl-mirror" />
            <span className="font-medium">{t(item.label)}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <Settings className="h-5 w-5" />
          <span className="font-medium text-sm">Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default ResponsiveSidebar;
