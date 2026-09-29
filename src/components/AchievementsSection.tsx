import React, { useState, useMemo } from 'react';
import { Achievement } from '../types/school';
import { Trophy, Award, Calendar, UserCheck, Plus } from 'lucide-react';

interface AchievementsSectionProps {
  achievements: Achievement[];
  onOpenAdmin: (tab?: string) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements, onOpenAdmin }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Barlıǵı' },
    { id: 'olimpiada', label: 'Pán olimpiadaları' },
    { id: 'sport', label: 'Sport jetiskenlikleri' },
    { id: 'bilim', label: 'Bilim báykewleri' },
    { id: 'oner', label: 'Óner hám mádeniyat' },
    { id: 'oqiwshi', label: 'Oqıwshılardıń jetiskenlikleri' }
  ];

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === 'all') return achievements;
    return achievements.filter((a) => a.category === selectedCategory);
  }, [achievements, selectedCategory]);

  return (
    <section id="jetiskenlikler" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Mektep maqtanıshları</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Jetiskenlikler
            </h2>
            <div className="w-16 h-1 bg-amber-500 my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm max-w-xl">
              Pán olimpiadaları, sport, kórkem óner hám ilimiy jarıslarda mektebimiz qolǵa kirgizgen jeńisler.
            </p>
          </div>

          <button
            onClick={() => onOpenAdmin('jetiskenlikler')}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-900 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4 text-blue-700" />
            <span>Jetiskenlik qosıw</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col group"
            >
              {item.photoUrl && (
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden relative">
                  <img
                    src={item.photoUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-1 bg-amber-500 text-slate-950 font-bold text-[10px] rounded uppercase tracking-wider">
                    {item.categoryLabel}
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-700" />
                    <span>{item.date}-jıl</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.recipient && (
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-800 font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{item.recipient}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
