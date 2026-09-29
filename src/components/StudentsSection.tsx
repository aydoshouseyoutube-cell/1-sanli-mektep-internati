import React from 'react';
import { StudentInfoData } from '../types/school';
import { Backpack, Clock, ShieldAlert, BookMarked, Bell } from 'lucide-react';

interface StudentsSectionProps {
  students: StudentInfoData;
}

export const StudentsSection: React.FC<StudentsSectionProps> = ({ students }) => {
  return (
    <section id="oqiwshilar" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Backpack className="w-3.5 h-3.5 text-blue-700" />
            <span>Oqıw processı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Oqıwshılar ushın
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Mektep-internatı tártibi, sabaqlar kestesi, qaǵıydalar hám paydalı oqıw materialları.
          </p>
        </div>

        {/* 4 Requested Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Section 1: Oqıw rejimi (Left Column) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Oqıw rejimi</h3>
                  <span className="text-xs text-slate-500">Kún tártibi hám sabaq waqıtları</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-semibold uppercase text-[11px]">
                      <th className="pb-3 pr-2">Para / Sabaq</th>
                      <th className="pb-3 px-2">Waqtı</th>
                      <th className="pb-3 pl-2">Mazmunı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {students.schedule.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 pr-2 font-medium text-slate-900 whitespace-nowrap">
                          {item.period}
                        </td>
                        <td className="py-2.5 px-2 font-mono text-blue-800 font-semibold whitespace-nowrap">
                          {item.time}
                        </td>
                        <td className="py-2.5 pl-2 text-slate-600">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
              * Oqıw rejimi mektep administraciyası tárepinen tastıyıqlanǵan.
            </div>
          </div>

          {/* Right Column: Rules & Resources & News */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section 2: Mektep qaǵıydaları */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Mektep qaǵıydaları</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {students.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Paydalı maǵlıwmatlar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
                  <BookMarked className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Paydalı maǵlıwmatlar</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {students.usefulResources.map((res, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider mb-1">
                      {res.category}
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs">{res.title}</h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">{res.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Oqıwshılar ushın jańalıqlar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Oqıwshılar ushın jańalıqlar</h3>
              </div>
              <div className="space-y-3">
                {students.news.map((item, idx) => (
                  <div key={idx} className="text-xs border-b border-slate-100 last:border-0 pb-2 last:pb-0">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] mb-0.5">
                      <span className="font-semibold text-blue-800">{item.title}</span>
                      <span>{item.date}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
