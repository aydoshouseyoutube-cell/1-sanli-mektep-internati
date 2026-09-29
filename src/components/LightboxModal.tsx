import React, { useEffect, useCallback } from 'react';
import { GalleryPhoto } from '../types/school';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const currentPhoto = currentIndex !== null && photos[currentIndex] ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex - 1 + photos.length) % photos.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex + 1) % photos.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  if (!currentPhoto || currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-10 text-white">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <span className="px-2.5 py-1 bg-white/20 rounded-md backdrop-blur-xs">
            {currentIndex + 1} / {photos.length}
          </span>
          <span className="hidden sm:inline text-slate-300">
            {currentPhoto.categoryLabel}
          </span>
        </div>

        <button
          onClick={onClose}
          type="button"
          className="p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white cursor-pointer"
          aria-label="Jabıw"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.photoUrl}
          alt={currentPhoto.title}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Caption */}
        <div className="mt-3 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-lg text-center max-w-xl text-white">
          <p className="text-sm font-medium">{currentPhoto.title}</p>
          <div className="flex items-center justify-center gap-2 text-[11px] text-amber-300 mt-0.5">
            <Tag className="w-3 h-3" />
            <span>{currentPhoto.categoryLabel}</span>
            {currentPhoto.date && <span>· {currentPhoto.date}</span>}
          </div>
        </div>
      </div>

      {/* Left Navigation */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          type="button"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
          aria-label="Aldıńǵı súwret"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Right Navigation */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          type="button"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
          aria-label="Keyingi súwret"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
