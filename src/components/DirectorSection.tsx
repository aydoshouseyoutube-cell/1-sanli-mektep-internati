import React from 'react';
import { DirectorData } from '../types/school';
import { Quote, UserCheck } from 'lucide-react';

interface DirectorSectionProps {
  director: DirectorData;
}

export const DirectorSection: React.FC<DirectorSectionProps> = ({ director }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Basshılıq</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Mektep direktorı
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full"></div>
        </div>

        {/* Director Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Photo & Identity Column */}
          <div className="md:col-span-4 bg-slate-100 flex flex-col items-center justify-center p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r border-slate-200">
            <div className="w-44 h-48 sm:w-48 sm:h-56 rounded-xl overflow-hidden shadow-sm bg-slate-200 border-2 border-white mb-4">
              <img
                src={director.photoUrl}
                alt={director.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {director.name}
            </h3>
            <p className="text-xs font-medium text-blue-700 mt-1">
              {director.position}
            </p>
            <span className="text-[11px] text-slate-500 mt-2">
              1-sanlı Qánigelestirilgen mektep-internatı
            </span>
          </div>

          {/* Welcome Message Column */}
          <div className="md:col-span-8 p-6 sm:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-amber-600 mb-3">
              <Quote className="w-6 h-6 rotate-180" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Mektep basshısınıń múrájáátı
              </span>
            </div>

            <h4 className="text-2xl font-bold text-slate-900 mb-4 font-display">
              {director.welcomeHeading}
            </h4>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
              "{director.message}"
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Húrmet penen mektep administraciyası</span>
              <span className="font-semibold text-slate-700">Nókis qalası</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
