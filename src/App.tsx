import { BrowserRouter } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppRouter from '@/core/routing/AppRouter';
import { ThemeProvider } from '@/core/theme/ThemeProvider';
import LoadingSkeleton from '@/core/components/LoadingSkeleton';
import AIAssistantOverlay from '@/features/ai_assistant/components/AIAssistantOverlay';
import AnnouncementBanner from '@/features/announcement/components/AnnouncementBanner';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Handle RTL/LTR based on current language
    const dir = i18n.dir();
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <AnnouncementBanner />
          <Suspense fallback={<LoadingSkeleton className="h-screen w-full" />}>
            <AppRouter />
          </Suspense>
          <AIAssistantOverlay />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
