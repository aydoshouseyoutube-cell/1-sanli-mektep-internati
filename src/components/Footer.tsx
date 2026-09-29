import React from 'react';
import { SchoolData } from '../types/school';
import { Send, MapPin, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  data: SchoolData;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onOpenAdmin }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#bas-bet', label: 'Bas bet' },
    { href: '#mektep-haqqinda', label: 'Mektep haqqında' },
    { href: '#ustazlar', label: 'Ustazlar' },
    { href: '#janaliklar', label: 'Jańalıqlar' },
    { href: '#is-sharalar', label: 'Is-sharalar' },
    { href: '#jetiskenlikler', label: 'Jetiskenlikler' },
    { href: '#fotogalereya', label: 'Fotogalereya' },
    { href: '#oqiwshilar', label: 'Oqıwshılar ushın' },
    { href: '#ata-analar', label: 'Ata-analar ushın' },
    { href: '#baylanis', label: 'Baylanıs' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Identity & Address */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-lg border border-blue-800 shrink-0">
                1
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  {data.schoolName}
                </h3>
                <span className="text-xs text-amber-400 font-medium">
                  {data.fullSchoolName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {data.heroSubtitle}. Bilimlendiriw salasında talantlı jaslardı qollap-quwatlawshı arnawlı bilimlendiriw mekemesi.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-medium text-white">{data.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Telefon: {data.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Elektron pochta: {data.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Send className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Telegram: {data.contact.telegramUsername}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Sayt boyınsha navigaciya
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(item.href)}
                  type="button"
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-left py-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Telegram Callout & Admin */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Rásmiy Telegram kanal
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Telegram arqalı biz benen baylanısıń
            </p>
            <a
              href={data.contact.telegramLink || 'https://t.me/nukus1Qmi'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Telegramǵa ótiw</span>
            </a>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                type="button"
                className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>Mektep basqarıw paneline kiriw</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with exact Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 1-sanlı Qánigelestirilgen mektep-internatı</p>
          <p className="text-slate-500 text-[11px]">
            {data.contact.address}
          </p>
        </div>

      </div>
    </footer>
  );
};
