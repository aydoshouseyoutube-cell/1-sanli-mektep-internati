import React from 'react';
import { SchoolData } from '../types/school';
import { Send, Camera, BookOpen, Newspaper } from 'lucide-react';

interface HeroProps {
  data: SchoolData;
  onOpenAdmin: (tab?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenAdmin }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bas-bet" className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle geometric pattern & background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: School Title & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-800/80 border border-blue-700/60 text-amber-300 text-xs font-medium tracking-wide uppercase mb-4">
              <span>Nókis qalası bilimlendiriw mákemesi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-tight font-display text-balance">
              {data.heroTitle}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-xl">
              {data.heroSubtitle}
            </p>

            {/* Two Primary Action Buttons as Requested */}
            <div className="mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('mektep-haqqinda')}
                type="button"
                className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>MEKTEP HAQQINDA</span>
              </button>

              <button
                onClick={() => scrollTo('janaliklar')}
                type="button"
                className="px-6 py-3 rounded-lg bg-blue-800/90 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all border border-blue-600/60 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Newspaper className="w-4 h-4" />
                <span>JAŃALÍQLAR</span>
              </button>
            </div>

            {/* Telegram Channel Callout */}
            <div className="mt-6 pt-5 border-t border-blue-800/60 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs sm:text-sm text-blue-200">
                Telegram arqalı biz benen baylanısıń
              </span>
              <a
                href={data.contact.telegramLink || 'https://t.me/nukus1Qmi'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-blue-500 hover:bg-blue-400 text-white font-medium text-xs transition-colors shrink-0 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegramǵa ótiw</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real School Photo Card */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
              {/* Photo Frame */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={data.schoolPhotoUrl}
                  alt={`${data.schoolName} imaratı`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Photo Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 sm:p-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
                    Rásmiy mektep imaratı
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white leading-snug">
                    {data.fullSchoolName}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {data.contact.address}
                  </p>
                </div>

                {/* Direct quick button to upload/replace real photo */}
                <button
                  onClick={() => onOpenAdmin('foto')}
                  type="button"
                  className="shrink-0 p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-medium border border-white/30 transition-colors flex items-center gap-1.5"
                  title="Mektep fotosúwretin almastırıw"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Súwretti almastırıw</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Bar as requested */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl shadow-lg border border-slate-200/80 p-6 sm:p-8 text-slate-900">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {data.stats.map((stat, idx) => (
              <div
                key={stat.id || idx}
                className={`flex flex-col items-center justify-center text-center ${
                  idx > 0 && idx % 2 === 0 ? 'pt-4 md:pt-0' : ''
                } ${idx % 2 !== 0 && idx > 1 ? 'pt-4 md:pt-0' : ''}`}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-900 tracking-tight font-mono tabular-nums">
                  {stat.value}
                </span>
                <span className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
