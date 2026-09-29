import React from 'react';
import { SchoolData } from '../types/school';
import { ArrowRight, Sparkles, Award, GraduationCap } from 'lucide-react';

interface WelcomeSectionProps {
  data: SchoolData;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ data }) => {
  const scrollToAbout = () => {
    const el = document.getElementById('mektep-haqqinda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Mektep jámááti atınan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            {data.welcomeTitle}
          </h2>

          <div className="w-16 h-1 bg-amber-500 mx-auto my-6 rounded-full"></div>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal text-balance">
            {data.welcomeText}
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={scrollToAbout}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            >
              <span>Tolıǵıraq</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Quick value pillars */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-200 text-left">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Sapalı tálim</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Tereńlestirilgen pánler boyınsha zamanagóy tálim standartları hám qánigelesken oqıtıw metodikası.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Joqarı nátiyjeler</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Pán olimpiadaları, tańlawlar hám báykewlerde turaqlı jeńisler hám jetiskenlikler.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Jaslar tárbiyası</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Milliy qádiriyatlarǵa húrmet, kásipke baǵdarlaw hám intellektual salawatı bálent tulǵanı tárbiyalaw.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
