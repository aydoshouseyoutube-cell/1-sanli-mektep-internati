import React, { useState, useMemo } from 'react';
import { GalleryPhoto } from '../types/school';
import { Image as ImageIcon, Maximize2, Plus } from 'lucide-react';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  gallery: GalleryPhoto[];
  schoolPhotoUrl: string;
  onOpenAdmin: (tab?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  gallery,
  schoolPhotoUrl,
  onOpenAdmin
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Barlıǵı' },
    { id: 'mektep', label: 'Mektep' },
    { id: 'oqiwshilar', label: 'Oqıwshılar' },
    { id: 'ustazlar', label: 'Ustazlar' },
    { id: 'issharalar', label: 'Is-sharalar' },
    { id: 'jetiskenlikler', label: 'Jetiskenlikler' },
  ];

  // Ensure gallery photos with category 'mektep' use the school photo if it matches
  const displayPhotos = useMemo(() => {
    return gallery.map((item) => {
      if (item.category === 'mektep' && (!item.photoUrl || item.id === 'gal-1')) {
        return { ...item, photoUrl: schoolPhotoUrl };
      }
      return item;
    });
  }, [gallery, schoolPhotoUrl]);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') return displayPhotos;
    return displayPhotos.filter((p) => p.category === selectedCategory);
  }, [displayPhotos, selectedCategory]);

  return (
    <section id="fotogalereya" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-blue-700" />
              <span>Súwretler arxivi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Fotogalereya
            </h2>
            <div className="w-16 h-1 bg-amber-500 my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm max-w-xl">
              Mektep imaratı, oqıwshılarımızdıń oqıw procesi, ustazlar hám áhmiyetli ilajlardan fotolavhalar.
            </p>
          </div>

          <button
            onClick={() => onOpenAdmin('fotogalereya')}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-900 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4 text-blue-700" />
            <span>Súwret qosıw</span>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id || idx}
              onClick={() => {
                const targetIdx = displayPhotos.findIndex((p) => p.id === photo.id);
                setLightboxIndex(targetIdx !== -1 ? targetIdx : idx);
              }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs cursor-pointer"
            >
              <img
                src={photo.photoUrl}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover overlay with zoom affordance */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div className="self-end p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    {photo.categoryLabel}
                  </span>
                  <p className="text-sm font-semibold text-white mt-1 leading-snug">
                    {photo.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={displayPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
