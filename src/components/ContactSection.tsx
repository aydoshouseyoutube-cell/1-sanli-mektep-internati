import React, { useState } from 'react';
import { ContactInfo } from '../types/school';
import { Phone, Mail, Send, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  contact: ContactInfo;
  schoolName: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact, schoolName }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="baylanis" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-blue-700" />
            <span>Keri baylanıs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Biz benen baylanısıń
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Sorawlarıńız yamasa usınıslarıńız bolsa bizge xabar qaldırıń yamasa rásmiy baylanıs arqalı xabarlasıń.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Mánzil
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-1 leading-snug">
                  {contact.address}
                </p>
                <span className="text-xs text-slate-500 mt-1 block">
                  {schoolName}
                </span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Telefon
                </span>
                <p className="text-sm sm:text-base font-bold font-mono text-slate-900 mt-1">
                  {contact.phone}
                </p>
                <span className="text-xs text-slate-500 mt-0.5 block">
                  Dúyshembi - Shembi, 08:00 - 18:00
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Elektron pochta
                </span>
                <p className="text-sm sm:text-base font-medium text-slate-900 mt-1">
                  {contact.email}
                </p>
                <span className="text-xs text-slate-500 mt-0.5 block">
                  Rásmiy xat-xabarlar ushın
                </span>
              </div>
            </div>

            {/* Telegram Channel Prominent Card */}
            <div className="p-6 bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl text-white shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">
                    Telegram
                  </span>
                  <p className="text-sm font-bold text-white">
                    {contact.telegramUsername}
                  </p>
                </div>
              </div>
              <p className="text-xs text-blue-200 mb-4 leading-relaxed">
                Telegram arqalı biz benen baylanısıń
              </p>
              <a
                href={contact.telegramLink || 'https://t.me/nukus1Qmi'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegramǵa ótiw</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
              Xabar jollaw
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Mektep administraciyasına sorawıńız yamasa pikir-usınısıńız bar ma? Tómendegi formanı toltırıń.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-emerald-900 text-base">Xabarıńız qabıllandı!</h4>
                <p className="text-xs sm:text-sm text-emerald-700 mt-1">
                  Mektep administraciyası tez arada siz benen baylanısadı. Raxmet!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Atıńız hám familiyańız *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Mısalı: Berdaq Dáwletov"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Telefon nómerińiz
                  </label>
                  <input
                    type="text"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+998 90 123 45 67"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Xabar mazmunı *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Sorawıńız yamasa usınısıńız haqqında tolıq maǵlıwmat qaldırıń..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    Xabar jiberiw
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Xabarlar 1 jumıs kúni dawamında kórip shıǵıladı.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
