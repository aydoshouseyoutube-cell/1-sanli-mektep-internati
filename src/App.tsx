import React, { useState, useEffect } from 'react';
import { SchoolData } from './types/school';
import { getSchoolData, subscribeToSchoolData } from './services/storage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { AboutSection } from './components/AboutSection';
import { DirectorSection } from './components/DirectorSection';
import { TeachersSection } from './components/TeachersSection';
import { NewsSection } from './components/NewsSection';
import { EventsSection } from './components/EventsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { GallerySection } from './components/GallerySection';
import { StudentsSection } from './components/StudentsSection';
import { ParentsSection } from './components/ParentsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<SchoolData>(getSchoolData);
  const [adminOpen, setAdminOpen] = useState<boolean>(false);
  const [adminInitialTab, setAdminInitialTab] = useState<string>('tiykarǵı');
  const [activeSection, setActiveSection] = useState<string>('bas-bet');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Subscribe to storage updates
  useEffect(() => {
    const unsubscribe = subscribeToSchoolData((updatedData) => {
      setData(updatedData);
    });
    return () => unsubscribe();
  }, []);

  // Scroll listener for active section & back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionIds = [
        'bas-bet',
        'mektep-haqqinda',
        'ustazlar',
        'janaliklar',
        'is-sharalar',
        'jetiskenlikler',
        'fotogalereya',
        'oqiwshilar',
        'ata-analar',
        'baylanis'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAdmin = (tab = 'tiykarǵı') => {
    setAdminInitialTab(tab);
    setAdminOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Official Top Navigation Bar */}
      <Header
        data={data}
        onOpenAdmin={() => handleOpenAdmin('tiykarǵı')}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Real School Photo & Statistics */}
        <Hero
          data={data}
          onOpenAdmin={(tab) => handleOpenAdmin(tab || 'foto')}
        />

        {/* 2. Welcome Section */}
        <WelcomeSection data={data} />

        {/* 3. About School (Tariyx, Maqset, Wazıypalar, Jetiskenlikler) */}
        <AboutSection data={data} />

        {/* 4. Mektep Direktorı */}
        <DirectorSection director={data.director} />

        {/* 5. Ustazlar */}
        <TeachersSection
          teachers={data.teachers}
          onOpenAdmin={(tab) => handleOpenAdmin(tab || 'ustazlar')}
        />

        {/* 6. Sońǵı jańalıqlar */}
        <NewsSection
          news={data.news}
          onOpenAdmin={(tab) => handleOpenAdmin(tab || 'janaliklar')}
        />

        {/* 7. Is-sharalar */}
        <EventsSection
          events={data.events}
          onOpenAdmin={(tab) => handleOpenAdmin(tab || 'issharalar')}
        />

        {/* 8. Jetiskenlikler */}
        <AchievementsSection
          achievements={data.achievements}
          onOpenAdmin={(tab) => handleOpenAdmin(tab || 'jetiskenlikler')}
        />

        {/* 9. Fotogalereya with Lightbox */}
        <GallerySection
          gallery={data.gallery}
          schoolPhotoUrl={data.schoolPhotoUrl}
          onOpenAdmin={(tab) => handleOpenAdmin(tab || 'fotogalereya')}
        />

        {/* 10. Oqıwshılar ushın */}
        <StudentsSection students={data.students} />

        {/* 11. Ata-analar ushın */}
        <ParentsSection
          parents={data.parents}
          contact={data.contact}
        />

        {/* 12. Biz benen baylanısıń */}
        <ContactSection
          contact={data.contact}
          schoolName={data.schoolName}
        />
      </main>

      {/* 13. Official Footer */}
      <Footer
        data={data}
        onOpenAdmin={() => handleOpenAdmin('tiykarǵı')}
      />

      {/* Admin Dashboard Modal */}
      {adminOpen && (
        <AdminDashboard
          initialData={data}
          initialTab={adminInitialTab}
          onClose={() => setAdminOpen(false)}
          onDataUpdated={(updated) => setData(updated)}
        />
      )}

      {/* Floating Quick Action: Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-blue-900/90 hover:bg-blue-800 text-white shadow-lg backdrop-blur-xs transition-all hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Joqarıǵa kóteriliw"
        >
          <ArrowUp className="w-5 h-5 text-amber-300" />
        </button>
      )}

      {/* Floating Admin Quick Access Badge (bottom left) */}
      <button
        onClick={() => handleOpenAdmin('tiykarǵı')}
        type="button"
        className="fixed bottom-6 left-6 z-30 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-semibold shadow-lg backdrop-blur-xs transition-all hover:scale-105 border border-slate-700/60 cursor-pointer"
        title="Basqarıw paneli"
      >
        <ShieldCheck className="w-4 h-4 text-amber-400" />
        <span className="hidden sm:inline">Basqarıw paneli</span>
      </button>
    </div>
  );
}
