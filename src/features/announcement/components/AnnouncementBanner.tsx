import React, { useState, useEffect } from 'react';
import { Megaphone, X, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CustomButton from '@/core/components/CustomButton';

const AnnouncementBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [announcement, setAnnouncement] = useState<{
    id: string;
    message: string;
    link?: string;
  } | null>(null);

  useEffect(() => {
    // Mock push event / fetch from admin
    setTimeout(() => {
      setAnnouncement({
        id: '1',
        message: 'A new Pet Adoption Fair is happening this weekend! Join us at the PetEco Center.',
        link: '/adoption',
      });
    }, 2000);
  }, []);

  if (!isVisible || !announcement) return null;

  return (
    <div className="relative bg-primary-600 text-white py-2 px-4 shadow-lg animate-in slide-in-from-top duration-500">
      <div className="mx-auto flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 animate-pulse" />
          <span className="text-sm font-semibold">{announcement.message}</span>
        </div>
        {announcement.link && (
          <a
            href={announcement.link}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-white text-primary-600 px-2 py-1 rounded hover:bg-slate-100 transition-colors"
          >
            Learn More <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
      <CustomButton
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-white hover:bg-white/20"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
      </CustomButton>
    </div>
  );
};

export default AnnouncementBanner;
