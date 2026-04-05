import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import ResponsiveSidebar from './ResponsiveSidebar';
import { X } from 'lucide-react';
import CustomButton from '@/core/components/CustomButton';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      <TopNavigation onMenuClick={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <ResponsiveSidebar className="hidden md:flex w-64 flex-shrink-0 sticky top-16 h-[calc(100vh-64px)]" />
        
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" 
              onClick={closeSidebar}
            />
            
            {/* Sidebar content */}
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-slate-900 pt-5 pb-4">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <CustomButton
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={closeSidebar}
                >
                  <X className="h-6 w-6" />
                </CustomButton>
              </div>
              <ResponsiveSidebar onClose={closeSidebar} className="border-r-0" />
            </div>
          </div>
        )}

        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-4 md:p-6 pb-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
