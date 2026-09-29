import React from 'react';
import { SchoolData } from '../types/school';
import { History, Target, CheckCircle2, Trophy, Building2, MapPin } from 'lucide-react';

interface AboutSectionProps {
  data: SchoolData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section id="mektep-haqqinda" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Májburiy maǵlıwmatlar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Mektep haqqında
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            {data.fullSchoolName} — tálim hám tárbiya salasındaǵı zamanagóy mektep-internatı.
          </p>
        </div>

        {/* School Building Photo Showcase in About Section as requested */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-slate-900">
            <img
              src={data.schoolPhotoUrl}
              alt={`${data.schoolName} fotosúwreti`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center bg-white border-t lg:border-t-0 lg:border-l border-slate-200">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
              Mektep imaratı
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              {data.fullSchoolName}
            </h3>
            <div className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm mt-3">
              <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <span>{data.contact.address}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              Mektep imaratı zamanagóy oqıw xanaları, ximiya, biologiya hám fizika laboratoriyaları, kompyuter klassları, keń sport maydanshası hám oqıwshılar jataqxanası menen tolıq támiyinlengen.
            </p>
          </div>
        </div>

        {/* 4 Distinct Requested Subsections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Mekteptiń tariyxı */}
          <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <History className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Mekteptiń tariyxı
              </h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {data.about.history}
            </p>
          </div>

          {/* 2. Mekteptiń maqseti */}
          <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Mekteptiń maqseti
              </h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {data.about.purpose}
            </p>
          </div>

          {/* 3. Mekteptiń wazıypaları */}
          <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Mekteptiń wazıypaları
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {data.about.tasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Mekteptiń jetiskenlikleri */}
          <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Mekteptiń jetiskenlikleri
              </h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {data.about.achievementsSummary}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Pán olimpiadaları hám jarıslar</span>
              <span className="font-semibold text-blue-800 font-mono">2026-jıl</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
