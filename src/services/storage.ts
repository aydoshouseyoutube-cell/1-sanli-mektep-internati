import { SchoolData } from '../types/school';
import { initialSchoolData } from '../data/defaultData';

const STORAGE_KEY = 'nukus_qanigelestirilgen_mektep_1_data';
const EVENT_KEY = 'mektep_data_changed';

export function getSchoolData(): SchoolData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveSchoolData(initialSchoolData);
      return initialSchoolData;
    }
    const parsed = JSON.parse(raw);
    // Deep merge to ensure newly added properties don't cause undefined crashes
    return {
      ...initialSchoolData,
      ...parsed,
      about: {
        ...initialSchoolData.about,
        ...(parsed.about || {})
      },
      director: {
        ...initialSchoolData.director,
        ...(parsed.director || {})
      },
      students: {
        ...initialSchoolData.students,
        ...(parsed.students || {})
      },
      parents: {
        ...initialSchoolData.parents,
        ...(parsed.parents || {})
      },
      contact: {
        ...initialSchoolData.contact,
        ...(parsed.contact || {})
      }
    };
  } catch (err) {
    console.error('Error reading school data from storage:', err);
    return initialSchoolData;
  }
}

export function saveSchoolData(data: SchoolData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: data }));
  } catch (err) {
    console.error('Error saving school data to storage:', err);
  }
}

export function resetSchoolData(): SchoolData {
  saveSchoolData(initialSchoolData);
  return initialSchoolData;
}

export function subscribeToSchoolData(callback: (data: SchoolData) => void): () => void {
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<SchoolData>;
    if (customEvent.detail) {
      callback(customEvent.detail);
    } else {
      callback(getSchoolData());
    }
  };

  window.addEventListener(EVENT_KEY, handler);
  window.addEventListener('storage', handler);

  return () => {
    window.removeEventListener(EVENT_KEY, handler);
    window.removeEventListener('storage', handler);
  };
}

/**
 * Optimizes and converts an uploaded File to base64 Data URL
 * Resizes large images to maintain high crisp visual quality without overflowing localStorage.
 */
export function processImageFile(file: File, maxDimension = 1600): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Fayldı oqıwda qátelik júz berdi'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Súwretti júklewde qátelik júz berdi'));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Save as high-quality webp or jpeg
        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
        resolve(dataUrl);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}
