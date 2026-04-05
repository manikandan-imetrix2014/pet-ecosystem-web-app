import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home, Menu, Bell, User, Search, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/core/theme/ThemeProvider';
import CustomButton from '@/core/components/CustomButton';

interface TopNavigationProps {
  onMenuClick?: () => void;
}

const TopNavigation = ({ onMenuClick }: TopNavigationProps) => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-6">
        {onMenuClick && (
          <CustomButton
            variant="ghost"
            size="icon"
            className="mr-2 md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </CustomButton>
        )}

        <div className="flex items-center gap-2 font-bold text-xl text-primary-600">
          <div className="bg-primary-600 text-white p-1 rounded-lg">
            <Home className="h-6 w-6" />
          </div>
          <span className="hidden sm:inline-block">PetEco</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Search bar hidden on mobile */}
          <div className="hidden lg:flex relative items-center mr-4">
            <Search className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={t('common.search')}
              className="pl-10 h-9 w-64 rounded-full border bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary-500 focus:ring-2 outline-none"
            />
          </div>

          <CustomButton variant="ghost" size="icon" onClick={toggleLanguage}>
            <Globe className="h-5 w-5" />
          </CustomButton>

          <CustomButton variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </CustomButton>

          <CustomButton variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </CustomButton>

          <CustomButton variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </CustomButton>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
