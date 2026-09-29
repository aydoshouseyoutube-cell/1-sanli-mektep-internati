import React, { useRef, useState } from 'react';
import { processImageFile } from '../../services/storage';
import { Upload, Image as ImageIcon, X, Check, Loader2 } from 'lucide-react';

interface PhotoUploaderProps {
  label: string;
  currentPhotoUrl?: string;
  onPhotoChanged: (photoUrl: string) => void;
  aspectRatioLabel?: string;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  label,
  currentPhotoUrl,
  onPhotoChanged,
  aspectRatioLabel = '16:9 yamasa 4:3'
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Tek súwret faylları (JPG, PNG, WebP) qabıllanadı');
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const dataUrl = await processImageFile(file, 1600);
      onPhotoChanged(dataUrl);
    } catch (err: any) {
      setError(err?.message || 'Súwretti qayta islewde qátelik júz berdi');
    } finally {
      setLoading(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          {label}
        </label>
        <span className="text-[11px] text-slate-400">
          Usınıs: {aspectRatioLabel}
        </span>
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-4 bg-slate-50 transition-colors flex flex-col sm:flex-row items-center gap-4"
      >
        {/* Preview thumbnail */}
        <div className="w-32 h-20 sm:w-36 sm:h-24 rounded-lg bg-slate-200 border border-slate-300 overflow-hidden shrink-0 flex items-center justify-center relative">
          {currentPhotoUrl ? (
            <img
              src={currentPhotoUrl}
              alt="Aldınnan kóriw"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageIcon className="w-8 h-8 text-slate-400" />
          )}

          {loading && (
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center text-white">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex-1 w-full text-center sm:text-left space-y-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="px-3.5 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Kompyuterden / telefondan júklew</span>
            </button>

            {currentPhotoUrl && (
              <button
                type="button"
                onClick={() => onPhotoChanged('')}
                className="px-2.5 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3 h-3 text-red-600" />
                <span>Óshiriw</span>
              </button>
            )}
          </div>

          <p className="text-[11px] text-slate-500">
            Súwretti bul jerge súyrep taslasańız da boladı (PNG, JPG, WebP)
          </p>

          {error && (
            <p className="text-xs text-red-600 font-medium mt-1">
              {error}
            </p>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFile(e.target.files[0]);
            }
          }}
        />
      </div>
    </div>
  );
};
