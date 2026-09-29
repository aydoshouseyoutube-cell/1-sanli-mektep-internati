import React from 'react';
import { NewsArticle } from '../types/school';
import { X, Calendar, User, Share2 } from 'lucide-react';

interface NewsModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-800 uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Jabıw"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug font-display">
            {article.title}
          </h3>

          {/* Photo */}
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={article.photoUrl}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-3.5 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-lg text-slate-700 text-sm font-medium leading-relaxed">
            {article.summary}
          </div>

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
            {article.content}
          </div>

          {article.author && (
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-700" />
                <span>Dóretiwshi: {article.author}</span>
              </div>
              <span className="font-semibold text-slate-700">1-sanlı mektep-internatı</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
          >
            Jabıw
          </button>
        </div>
      </div>
    </div>
  );
};
