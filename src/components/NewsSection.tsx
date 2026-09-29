import React, { useState } from 'react';
import { NewsArticle } from '../types/school';
import { Newspaper, Calendar, ArrowRight, Plus } from 'lucide-react';
import { NewsModal } from './NewsModal';

interface NewsSectionProps {
  news: NewsArticle[];
  onOpenAdmin: (tab?: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news, onOpenAdmin }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section id="janaliklar" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Newspaper className="w-3.5 h-3.5 text-blue-700" />
              <span>Mektep turmısı</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Sońǵı jańalıqlar
            </h2>
            <div className="w-16 h-1 bg-amber-500 my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm max-w-xl">
              Mektep-internatımızda bolıp ótken eń sońǵı jańalıqlar, bilimlendiriw ilajları hám jetiskenlikler.
            </p>
          </div>

          <button
            onClick={() => onOpenAdmin('janaliklar')}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-900 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4 text-blue-700" />
            <span>Jańalıq qosıw</span>
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
            >
              {/* Photo */}
              <div className="aspect-[16/9] bg-slate-200 overflow-hidden relative">
                <img
                  src={item.photoUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium rounded flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-blue-900 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(item)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Tolıǵıraq oqıw</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {item.author && (
                    <span className="text-[11px] text-slate-600 truncate max-w-[120px]">
                      {item.author}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      <NewsModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
