import React from 'react';
import { ParentInfoData, ContactInfo } from '../types/school';
import { Users, Info, BellRing, FileText, HeartHandshake, PhoneCall, Send } from 'lucide-react';

interface ParentsSectionProps {
  parents: ParentInfoData;
  contact: ContactInfo;
}

export const ParentsSection: React.FC<ParentsSectionProps> = ({ parents, contact }) => {
  return (
    <section id="ata-analar" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Ata-analar menen birge islesiw</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Ata-analar ushın
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Perzentińizdiń bilimi, tárbiyası, mektep rejimi hám zárúr hújjetler boyınsha kerekli barlıq kórsetpeler.
          </p>
        </div>

        {/* 5 Requested Subsections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Áhmiyetli maǵlıwmatlar */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                  <Info className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Áhmiyetli maǵlıwmatlar</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {parents.importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Járiyalar */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <BellRing className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Járiyalar</h3>
              </div>
              <div className="space-y-4">
                {parents.announcements.map((ann, idx) => (
                  <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="text-[10px] font-mono font-bold text-amber-600 mb-1">{ann.date}</div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{ann.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{ann.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Mektep hújjetleri */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Mektep hújjetleri</h3>
              </div>
              <div className="space-y-3">
                {parents.documents.map((doc, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">{doc.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{doc.description}</p>
                      <span className="inline-block mt-1 text-[10px] font-semibold text-blue-800">
                        {doc.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Balalar tárbiyası */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Balalar tárbiyası</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {parents.parentingAdvice.map((advice, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5">{advice.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{advice.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Baylanıs maǵlıwmatları */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-950 text-white shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 text-amber-300 flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Baylanıs maǵlıwmatları</h3>
              </div>
              <p className="text-xs text-blue-200 leading-relaxed mb-4">
                Ata-analar ushın arnawlı qabıllaw waqıtları hám telefon baylanısı:
              </p>
              <div className="space-y-2.5 text-xs text-blue-100">
                <div>
                  <span className="text-[10px] text-blue-300 block uppercase">Telefon:</span>
                  <span className="font-mono font-bold text-sm text-white">{contact.phone}</span>
                </div>
                <div>
                  <span className="text-[10px] text-blue-300 block uppercase">Telegram kanal:</span>
                  <span className="font-bold text-amber-300">{contact.telegramUsername}</span>
                </div>
                <div>
                  <span className="text-[10px] text-blue-300 block uppercase">Qabıllaw kúnleri:</span>
                  <span>{contact.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-800">
              <a
                href={contact.telegramLink || 'https://t.me/nukus1Qmi'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram arqalı soraw jiberiw</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
