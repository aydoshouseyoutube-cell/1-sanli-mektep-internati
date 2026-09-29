import React, { useState, useMemo } from 'react';
import { Teacher } from '../types/school';
import { GraduationCap, BookOpen, Plus } from 'lucide-react';

interface TeachersSectionProps {
  teachers: Teacher[];
  onOpenAdmin: (tab?: string) => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ teachers, onOpenAdmin }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  const subjects = useMemo(() => {
    const list = Array.from(new Set(teachers.map((t) => t.subject).filter(Boolean)));
    return ['all', ...list];
  }, [teachers]);

  const filteredTeachers = useMemo(() => {
    if (selectedSubject === 'all') return teachers;
    return teachers.filter((t) => t.subject === selectedSubject);
  }, [teachers, selectedSubject]);

  return (
    <section id="ustazlar" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
            <span>Pedagogik jámáát</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Ustazlar
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Mektep-internatımızda joqarı mamanlıqqa hám kóp jıllıq tájiriybege iye pedagoglar jaslarǵa bilim berip kelmekte.
          </p>
        </div>

        {/* Filter Controls */}
        {subjects.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedSubject === sub
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sub === 'all' ? 'Barlıq ustazlar' : sub}
              </button>
            ))}
          </div>
        )}

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-slate-50 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col group"
            >
              {/* Photo Area */}
              <div className="aspect-[4/4.5] bg-slate-200 overflow-hidden relative">
                <img
                  src={teacher.photoUrl}
                  alt={teacher.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5 px-2 py-1 bg-blue-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold rounded">
                  {teacher.subject}
                </div>
              </div>

              {/* Info Area */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-900 transition-colors">
                    {teacher.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-blue-700 text-xs font-medium mt-1">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>{teacher.subject}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {teacher.position}
                  </p>
                </div>

                {teacher.education && (
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                    <span>{teacher.education}</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Card to invite Admin to add teacher */}
          <div
            onClick={() => onOpenAdmin('ustazlar')}
            className="border-2 border-dashed border-slate-200 hover:border-blue-400 bg-slate-50/50 hover:bg-blue-50/30 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors min-h-[300px]"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
              <Plus className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm">Jańa ustaz qosıw</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-[200px]">
              Basqarıw paneli arqalı ustazlar dizimin jańalań
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
