import React, { useState, useEffect } from 'react';
import { SchoolData } from '../types/school';
import { Menu, X, Send, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeaderProps {
  data: SchoolData;
  onOpenAdmin: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ data, onOpenAdmin, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#bas-bet', label: 'Bas bet', id: 'bas-bet' },
    { href: '#mektep-haqqinda', label: 'Mektep haqqında', id: 'mektep-haqqinda' },
    { href: '#ustazlar', label: 'Ustazlar', id: 'ustazlar' },
    { href: '#janaliklar', label: 'Jańalıqlar', id: 'janaliklar' },
    { href: '#is-sharalar', label: 'Is-sharalar', id: 'is-sharalar' },
    { href: '#jetiskenlikler', label: 'Jetiskenlikler', id: 'jetiskenlikler' },
    { href: '#fotogalereya', label: 'Fotogalereya', id: 'fotogalereya' },
    { href: '#oqiwshilar', label: 'Oqıwshılar ushın', id: 'oqiwshilar' },
    { href: '#ata-analar', label: 'Ata-analar ushın', id: 'ata-analar' },
    { href: '#baylanis', label: 'Baylanıs', id: 'baylanis' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
          : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Zone */}
          <a
            href="#bas-bet"
            onClick={(e) => handleNavClick(e, '#bas-bet')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm border border-blue-800 shrink-0">
              1
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight tracking-tight group-hover:text-blue-700 transition-colors">
                {data.schoolName}
              </span>
              <span className="text-[11px] text-slate-700 font-medium hidden sm:inline-block">
                Nókis qalası
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 7).map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-2.5 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-blue-900 font-semibold bg-blue-50'
                    : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Dropdown or remaining links */}
            <div className="relative group">
              <button
                type="button"
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-md transition-colors flex items-center gap-1"
              >
                Kóbirek
                <span className="text-[10px] text-slate-500">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-1 hidden group-hover:block group-focus-within:block">
                {navLinks.slice(7).map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Action Zone: Telegram + Admin */}
          <div className="flex items-center gap-2">
            <a
              href={data.contact.telegramLink || 'https://t.me/nukus1Qmi'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md border border-blue-200 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              title="Telegramǵa ótiw"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Telegram</span>
            </a>

            <button
              onClick={onOpenAdmin}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
              title="Mektep basqarıw paneli"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
              <span className="hidden sm:inline">Basqarıw</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Menyudi ashıw"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-65px)] overflow-y-auto px-4 py-6">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={data.contact.telegramLink || 'https://t.me/nukus1Qmi'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              Telegramǵa ótiw ({data.contact.telegramUsername || '@nukus1Qmi'})
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-800 font-medium text-sm hover:bg-slate-200 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Mektep basqarıw paneli
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
