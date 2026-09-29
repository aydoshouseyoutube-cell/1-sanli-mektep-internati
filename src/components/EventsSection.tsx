import React from 'react';
import { SchoolEvent } from '../types/school';
import { CalendarDays, Clock, MapPin, Plus } from 'lucide-react';

interface EventsSectionProps {
  events: SchoolEvent[];
  onOpenAdmin: (tab?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events, onOpenAdmin }) => {
  return (
    <section id="is-sharalar" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <CalendarDays className="w-3.5 h-3.5 text-amber-600" />
              <span>Joba hám máresimler</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Is-sharalar
            </h2>
            <div className="w-16 h-1 bg-amber-500 my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm max-w-xl">
              Mektebimizde ótkeriliwi rejelestirilgen ilimiy, mádeniy, tárbiyalıq hám sport ilajları kestesi.
            </p>
          </div>

          <button
            onClick={() => onOpenAdmin('issharalar')}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-900 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4 text-blue-700" />
            <span>Is-shara qosıw</span>
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div>
                {/* Date badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 bg-blue-900 text-amber-300 font-mono font-bold text-xs rounded-md">
                    {event.date}
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                      <Clock className="w-3.5 h-3.5 text-blue-700" />
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-900 transition-colors">
                  {event.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {event.location && (
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
