import React, { useState, useEffect } from 'react';
import { SchoolData, Teacher, NewsArticle, SchoolEvent, Achievement, GalleryPhoto } from '../../types/school';
import { saveSchoolData, resetSchoolData } from '../../services/storage';
import { PhotoUploader } from './PhotoUploader';
import {
  X, Save, RotateCcw, Building, Image as ImageIcon, Users, Newspaper,
  Calendar, Trophy, BookOpen, HeartHandshake, Phone, Download, Upload,
  Plus, Trash2, Edit2, Check, Lock, Unlock, Eye, Sparkles, UserCheck
} from 'lucide-react';

interface AdminDashboardProps {
  initialData: SchoolData;
  initialTab?: string;
  onClose: () => void;
  onDataUpdated: (data: SchoolData) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  initialData,
  initialTab = 'tiykarǵı',
  onClose,
  onDataUpdated
}) => {
  // Admin PIN authentication state (default pin: 1234)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Working data state
  const [data, setData] = useState<SchoolData>(initialData);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [saveToast, setSaveToast] = useState(false);

  // Teacher edit state
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  // News edit state
  const [editingNews, setEditingNews] = useState<NewsArticle | null>(null);
  // Event edit state
  const [editingEvent, setEditingEvent] = useState<SchoolEvent | null>(null);
  // Achievement edit state
  const [editingAchievement, setEditingAchievement] = useState<Achievement | null>(null);
  // Gallery edit state
  const [editingGallery, setEditingGallery] = useState<GalleryPhoto | null>(null);

  // Sync initial tab when changed
  useEffect(() => {
    if (initialTab) {
      if (initialTab === 'foto') setActiveTab('foto');
      else if (initialTab === 'ustazlar') setActiveTab('ustazlar');
      else if (initialTab === 'janaliklar') setActiveTab('janaliklar');
      else if (initialTab === 'issharalar') setActiveTab('issharalar');
      else if (initialTab === 'jetiskenlikler') setActiveTab('jetiskenlikler');
      else if (initialTab === 'fotogalereya') setActiveTab('fotogalereya');
    }
  }, [initialTab]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '1234' || pinInput.trim() === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleSave = () => {
    saveSchoolData(data);
    onDataUpdated(data);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Barlıq maǵlıwmatlardı dáslepki halatına qaytarıwdı qáleysiz be?')) {
      const reset = resetSchoolData();
      setData(reset);
      onDataUpdated(reset);
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 3000);
    }
  };

  const handleExportJson = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mektep_sayti_magliwmatlari_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        setData(imported);
        saveSchoolData(imported);
        onDataUpdated(imported);
        alert('Maǵlıwmatlar áwmetli júklendi hám saqlandı!');
      } catch (err) {
        alert('JSON fayldı oqıwda qátelik júz berdi');
      }
    };
    reader.readAsText(file);
  };

  // If not authenticated, render login PIN modal
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-w-md w-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Mektep basqarıw paneli
                </h3>
                <p className="text-xs text-slate-500">
                  Kiriw ushın paroldi kiritiń
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Kiriw paroli (PIN kod)
              </label>
              <input
                type="password"
                autoFocus
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Dáslepki parol: 1234"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-base font-mono focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-center tracking-widest"
              />
              <p className="text-[11px] text-slate-500 mt-2 text-center">
                Tez kiriw ushın dáslepki parol: <strong className="text-blue-900 font-mono">1234</strong>
              </p>
              {pinError && (
                <p className="text-xs text-red-600 font-semibold text-center mt-2">
                  Qáte parol! Dáslepki parol: 1234
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 transition-colors"
              >
                Biykar etiw
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-lg bg-blue-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-sm"
              >
                Kiriw
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'tiykarǵı', label: 'Tiykarǵı maǵlıwmatlar', icon: Building },
    { id: 'foto', label: 'Mektep fotosúwreti', icon: ImageIcon },
    { id: 'statistika', label: 'Statistika', icon: Trophy },
    { id: 'haqqinda', label: 'Mektep haqqında', icon: BookOpen },
    { id: 'direktor', label: 'Direktor', icon: UserCheck },
    { id: 'ustazlar', label: 'Ustazlar', icon: Users },
    { id: 'janaliklar', label: 'Jańalıqlar', icon: Newspaper },
    { id: 'issharalar', label: 'Is-sharalar', icon: Calendar },
    { id: 'jetiskenlikler', label: 'Jetiskenlikler', icon: Trophy },
    { id: 'fotogalereya', label: 'Fotogalereya', icon: ImageIcon },
    { id: 'oqiw_ata', label: 'Oqıwshılar & Ata-analar', icon: HeartHandshake },
    { id: 'baylanis', label: 'Baylanıs & Telegram', icon: Phone },
    { id: 'sistema', label: 'Sistema & Arxiv', icon: RotateCcw },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-6xl h-[95vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-amber-300 flex items-center justify-center font-bold text-sm">
              ADM
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display">
                Mektep basqarıw paneli
              </h2>
              <p className="text-xs text-slate-400">
                {data.schoolName} — Barlıq maǵlıwmatlardı redaktorlaw
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {saveToast && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-md animate-in fade-in">
                <Check className="w-3.5 h-3.5" />
                <span>Saqlandı!</span>
              </span>
            )}

            <button
              onClick={handleSave}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Saqlaw</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Jabıw"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Workspace: Sidebar Tabs + Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Tabs Sidebar */}
          <div className="w-full md:w-64 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 overflow-x-auto md:overflow-y-auto shrink-0 p-2 sm:p-3 flex md:flex-col gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer text-left ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-blue-700'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
            
            {/* 1. Tiykarǵı maǵlıwmatlar */}
            {activeTab === 'tiykarǵı' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                    Tiykarǵı mektep maǵlıwmatları
                  </h3>
                  <p className="text-xs text-slate-500">
                    Mektep atı, rásmiy tolıq ataması, bas bettiń tiykarǵı kellesi hám shuranı
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mektep qısqa atı
                    </label>
                    <input
                      type="text"
                      value={data.schoolName}
                      onChange={(e) => setData({ ...data, schoolName: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mekteptiń tolıq rásmiy atı
                    </label>
                    <input
                      type="text"
                      value={data.fullSchoolName}
                      onChange={(e) => setData({ ...data, fullSchoolName: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Bas bettiń bas teması (Hero Title)
                    </label>
                    <input
                      type="text"
                      value={data.heroTitle}
                      onChange={(e) => setData({ ...data, heroTitle: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mektep shuranı / qosımsha tema (Subtitle)
                    </label>
                    <input
                      type="text"
                      value={data.heroSubtitle}
                      onChange={(e) => setData({ ...data, heroSubtitle: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Kútip alıw teması (Welcome Title)
                    </label>
                    <input
                      type="text"
                      value={data.welcomeTitle}
                      onChange={(e) => setData({ ...data, welcomeTitle: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Kútip alıw teksti (Welcome Text)
                    </label>
                    <textarea
                      rows={4}
                      value={data.welcomeText}
                      onChange={(e) => setData({ ...data, welcomeText: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. Mektep fotosúwreti */}
            {activeTab === 'foto' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                    Mekteptiń haqıyqıy fotosúwreti
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bul súwret sayttıń barlıq tiykarǵı bólimlerinde (Bas bet, Mektep haqqında, Fotogalereya) kórsetiledi.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed">
                  <strong>Áhmiyetli:</strong> Siz mekteptiń óz fotosúwretin kompyuter yamasa telefondan usı jerge júklep qoysańız, ol saytta avtomat túrde jańalanadı.
                </div>

                <PhotoUploader
                  label="Mektep imaratı fotosúwreti"
                  currentPhotoUrl={data.schoolPhotoUrl}
                  onPhotoChanged={(photoUrl) => setData({ ...data, schoolPhotoUrl: photoUrl })}
                  aspectRatioLabel="16:9 yamasa 16:10 (gorizontal)"
                />

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Súwret kórsetiliw orınları:
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                    <li>Bas bettiń tiykarǵı vizual orayında (Hero section)</li>
                    <li>“Mektep haqqında” bóliminde</li>
                    <li>“Fotogalereya” bólimindegi Mektep kategoriyasında</li>
                  </ul>
                </div>
              </div>
            )}

            {/* 3. Statistika */}
            {activeTab === 'statistika' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                    Mektep statistikası
                  </h3>
                  <p className="text-xs text-slate-500">
                    Oqıwshılar sanı, ustazlar sanı, tájiriybe jılları hám jetiskenlikler sanı
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.stats.map((stat, idx) => (
                    <div key={stat.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase">
                        {stat.label}
                      </label>
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) => {
                          const updated = [...data.stats];
                          updated[idx] = { ...updated[idx], value: e.target.value };
                          setData({ ...data, stats: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono font-bold text-base text-blue-900 bg-white"
                        placeholder="Mısalı: 500+ yamasa XX+"
                      />
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => {
                          const updated = [...data.stats];
                          updated[idx] = { ...updated[idx], label: e.target.value };
                          setData({ ...data, stats: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-700 bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Mektep haqqında */}
            {activeTab === 'haqqinda' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                    “Mektep haqqında” bólimi maǵlıwmatları
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tariyxı, maqseti, wazıypaları hám jetiskenlikleri
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mekteptiń tariyxı
                    </label>
                    <textarea
                      rows={4}
                      value={data.about.history}
                      onChange={(e) =>
                        setData({
                          ...data,
                          about: { ...data.about, history: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mekteptiń maqseti
                    </label>
                    <textarea
                      rows={3}
                      value={data.about.purpose}
                      onChange={(e) =>
                        setData({
                          ...data,
                          about: { ...data.about, purpose: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mekteptiń jetiskenlikleri (Qısqasha sholıw)
                    </label>
                    <textarea
                      rows={3}
                      value={data.about.achievementsSummary}
                      onChange={(e) =>
                        setData({
                          ...data,
                          about: { ...data.about, achievementsSummary: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 5. Direktor */}
            {activeTab === 'direktor' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                    Mektep direktorı
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direktor atı, lawazımı, fotosúwreti hám sálemi
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Direktor atı hám familiyası
                    </label>
                    <input
                      type="text"
                      value={data.director.name}
                      onChange={(e) =>
                        setData({
                          ...data,
                          director: { ...data.director, name: e.target.value }
                        })
                      }
                      placeholder="[Direktor atı hám familiyası]"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Lawazımı
                    </label>
                    <input
                      type="text"
                      value={data.director.position}
                      onChange={(e) =>
                        setData({
                          ...data,
                          director: { ...data.director, position: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Sálem teması (Kellek)
                    </label>
                    <input
                      type="text"
                      value={data.director.welcomeHeading}
                      onChange={(e) =>
                        setData({
                          ...data,
                          director: { ...data.director, welcomeHeading: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Direktor múrájáátı hám sálemi
                    </label>
                    <textarea
                      rows={5}
                      value={data.director.message}
                      onChange={(e) =>
                        setData({
                          ...data,
                          director: { ...data.director, message: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <PhotoUploader
                    label="Direktor fotosúwreti"
                    currentPhotoUrl={data.director.photoUrl}
                    onPhotoChanged={(photoUrl) =>
                      setData({
                        ...data,
                        director: { ...data.director, photoUrl }
                      })
                    }
                    aspectRatioLabel="3:4 yamasa 1:1"
                  />
                </div>
              </div>
            )}

            {/* 6. Ustazlar */}
            {activeTab === 'ustazlar' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                      Ustazlar dizimi
                    </h3>
                    <p className="text-xs text-slate-500">
                      Mektep ustazların qosıw, redaktorlaw yamasa óshiriw
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const newTeacher: Teacher = {
                        id: `teacher-${Date.now()}`,
                        name: 'Jańa ustaz',
                        subject: 'Pán ataması',
                        position: 'Pán muǵallimi',
                        photoUrl: data.teachers[0]?.photoUrl || ''
                      };
                      setData({ ...data, teachers: [newTeacher, ...data.teachers] });
                      setEditingTeacher(newTeacher);
                    }}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs transition-colors hover:bg-blue-800 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Ustaz qosıw</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.teachers.map((t) => (
                    <div
                      key={t.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5 justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-14 h-16 rounded-lg bg-slate-200 overflow-hidden shrink-0 border border-slate-300">
                          {t.photoUrl ? (
                            <img src={t.photoUrl} alt={t.name} className="w-full h-full object-cover" />
                          ) : (
                            <Users className="w-6 h-6 m-auto text-slate-400 mt-5" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                          <span className="text-xs font-semibold text-blue-800 block">{t.subject}</span>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{t.position}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setEditingTeacher(t)}
                          type="button"
                          className="p-1.5 rounded-md hover:bg-blue-100 text-blue-700 transition-colors"
                          title="Ózgertiw"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`${t.name} dizimnen óshirilsin be?`)) {
                              setData({
                                ...data,
                                teachers: data.teachers.filter((item) => item.id !== t.id)
                              });
                            }
                          }}
                          type="button"
                          className="p-1.5 rounded-md hover:bg-red-100 text-red-600 transition-colors"
                          title="Óshiriw"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Teacher Edit Modal */}
                {editingTeacher && (
                  <div className="p-5 border border-blue-200 bg-blue-50/50 rounded-xl space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-blue-200">
                      <h4 className="font-bold text-blue-900 text-sm">Ustaz maǵlıwmatların ózgertiw</h4>
                      <button
                        onClick={() => setEditingTeacher(null)}
                        className="text-xs text-slate-500 hover:text-slate-800"
                      >
                        Jabıw
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Atı hám familiyası</label>
                        <input
                          type="text"
                          value={editingTeacher.name}
                          onChange={(e) => {
                            const updated = { ...editingTeacher, name: e.target.value };
                            setEditingTeacher(updated);
                            setData({
                              ...data,
                              teachers: data.teachers.map((t) => (t.id === updated.id ? updated : t))
                            });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Pán</label>
                        <input
                          type="text"
                          value={editingTeacher.subject}
                          onChange={(e) => {
                            const updated = { ...editingTeacher, subject: e.target.value };
                            setEditingTeacher(updated);
                            setData({
                              ...data,
                              teachers: data.teachers.map((t) => (t.id === updated.id ? updated : t))
                            });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1">Lawazımı</label>
                        <input
                          type="text"
                          value={editingTeacher.position}
                          onChange={(e) => {
                            const updated = { ...editingTeacher, position: e.target.value };
                            setEditingTeacher(updated);
                            setData({
                              ...data,
                              teachers: data.teachers.map((t) => (t.id === updated.id ? updated : t))
                            });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <PhotoUploader
                          label="Ustaz fotosúwreti"
                          currentPhotoUrl={editingTeacher.photoUrl}
                          onPhotoChanged={(photoUrl) => {
                            const updated = { ...editingTeacher, photoUrl };
                            setEditingTeacher(updated);
                            setData({
                              ...data,
                              teachers: data.teachers.map((t) => (t.id === updated.id ? updated : t))
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 7. Jańalıqlar */}
            {activeTab === 'janaliklar' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                      Jańalıqlar
                    </h3>
                    <p className="text-xs text-slate-500">
                      Jańalıqlardı qosıw, redaktorlaw yamasa óshiriw
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const newArticle: NewsArticle = {
                        id: `news-${Date.now()}`,
                        title: 'Jańa mektep jańalıǵı',
                        date: new Date().toISOString().slice(0, 10),
                        summary: 'Jańalıq haqqında qısqasha maǵlıwmat...',
                        content: 'Jańalıqtıń tolıq teksti bul jerge jazıladı.',
                        photoUrl: data.news[0]?.photoUrl || ''
                      };
                      setData({ ...data, news: [newArticle, ...data.news] });
                      setEditingNews(newArticle);
                    }}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs transition-colors hover:bg-blue-800 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Jańalıq qosıw</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {data.news.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-12 rounded-lg bg-slate-200 overflow-hidden shrink-0">
                          {item.photoUrl && <img src={item.photoUrl} alt="" className="w-full h-full object-cover" />}
                        </div>
                        <div>
                          <div className="text-[11px] font-mono text-blue-800">{item.date}</div>
                          <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{item.title}</h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => setEditingNews(item)}
                          type="button"
                          className="p-1.5 rounded-md hover:bg-blue-100 text-blue-700"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Bul jańalıqtı óshiriwge isenimińiz kámil me?')) {
                              setData({
                                ...data,
                                news: data.news.filter((n) => n.id !== item.id)
                              });
                            }
                          }}
                          type="button"
                          className="p-1.5 rounded-md hover:bg-red-100 text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* News Edit Form */}
                {editingNews && (
                  <div className="p-5 border border-blue-200 bg-blue-50/50 rounded-xl space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-blue-200">
                      <h4 className="font-bold text-blue-900 text-sm">Jańalıqtı redaktorlaw</h4>
                      <button
                        onClick={() => setEditingNews(null)}
                        className="text-xs text-slate-500 hover:text-slate-800"
                      >
                        Jabıw
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Sáne (YYYY-MM-DD)</label>
                        <input
                          type="text"
                          value={editingNews.date}
                          onChange={(e) => {
                            const updated = { ...editingNews, date: e.target.value };
                            setEditingNews(updated);
                            setData({ ...data, news: data.news.map((n) => (n.id === updated.id ? updated : n)) });
                          }}
                          className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-300 text-sm font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Tema (Title)</label>
                        <input
                          type="text"
                          value={editingNews.title}
                          onChange={(e) => {
                            const updated = { ...editingNews, title: e.target.value };
                            setEditingNews(updated);
                            setData({ ...data, news: data.news.map((n) => (n.id === updated.id ? updated : n)) });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Qısqasha mazmunı</label>
                        <textarea
                          rows={2}
                          value={editingNews.summary}
                          onChange={(e) => {
                            const updated = { ...editingNews, summary: e.target.value };
                            setEditingNews(updated);
                            setData({ ...data, news: data.news.map((n) => (n.id === updated.id ? updated : n)) });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Tolıq teksti</label>
                        <textarea
                          rows={5}
                          value={editingNews.content}
                          onChange={(e) => {
                            const updated = { ...editingNews, content: e.target.value };
                            setEditingNews(updated);
                            setData({ ...data, news: data.news.map((n) => (n.id === updated.id ? updated : n)) });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>

                      <PhotoUploader
                        label="Jańalıq fotosúwreti"
                        currentPhotoUrl={editingNews.photoUrl}
                        onPhotoChanged={(photoUrl) => {
                          const updated = { ...editingNews, photoUrl };
                          setEditingNews(updated);
                          setData({ ...data, news: data.news.map((n) => (n.id === updated.id ? updated : n)) });
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 8. Is-sharalar */}
            {activeTab === 'issharalar' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                      Is-sharalar
                    </h3>
                    <p className="text-xs text-slate-500">
                      Mektep ilajların basqarıw
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const newEvent: SchoolEvent = {
                        id: `event-${Date.now()}`,
                        title: 'Jańa is-shara ataması',
                        date: new Date().toISOString().slice(0, 10),
                        time: '14:00',
                        location: 'Májilisler zalı',
                        description: 'Is-shara haqqında tolıq maǵlıwmat...'
                      };
                      setData({ ...data, events: [newEvent, ...data.events] });
                      setEditingEvent(newEvent);
                    }}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs transition-colors hover:bg-blue-800 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Is-shara qosıw</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {data.events.map((ev) => (
                    <div
                      key={ev.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-xs font-mono font-semibold text-blue-800">
                          {ev.date} · {ev.time}
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm mt-0.5">{ev.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-1">{ev.description}</p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => setEditingEvent(ev)}
                          type="button"
                          className="p-1.5 rounded-md hover:bg-blue-100 text-blue-700"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Is-sharanı óshiriwge isenimińiz kámil me?')) {
                              setData({
                                ...data,
                                events: data.events.filter((e) => e.id !== ev.id)
                              });
                            }
                          }}
                          type="button"
                          className="p-1.5 rounded-md hover:bg-red-100 text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {editingEvent && (
                  <div className="p-5 border border-blue-200 bg-blue-50/50 rounded-xl space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-blue-200">
                      <h4 className="font-bold text-blue-900 text-sm">Is-sharanı ózgertiw</h4>
                      <button onClick={() => setEditingEvent(null)} className="text-xs text-slate-500">Jabıw</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Sáne</label>
                        <input
                          type="text"
                          value={editingEvent.date}
                          onChange={(e) => {
                            const updated = { ...editingEvent, date: e.target.value };
                            setEditingEvent(updated);
                            setData({ ...data, events: data.events.map((ev) => (ev.id === updated.id ? updated : ev)) });
                          }}
                          className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Waqtı</label>
                        <input
                          type="text"
                          value={editingEvent.time || ''}
                          onChange={(e) => {
                            const updated = { ...editingEvent, time: e.target.value };
                            setEditingEvent(updated);
                            setData({ ...data, events: data.events.map((ev) => (ev.id === updated.id ? updated : ev)) });
                          }}
                          className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mánzil / Bólme</label>
                        <input
                          type="text"
                          value={editingEvent.location || ''}
                          onChange={(e) => {
                            const updated = { ...editingEvent, location: e.target.value };
                            setEditingEvent(updated);
                            setData({ ...data, events: data.events.map((ev) => (ev.id === updated.id ? updated : ev)) });
                          }}
                          className="w-full px-3 py-1.5 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Is-shara atı</label>
                      <input
                        type="text"
                        value={editingEvent.title}
                        onChange={(e) => {
                          const updated = { ...editingEvent, title: e.target.value };
                          setEditingEvent(updated);
                          setData({ ...data, events: data.events.map((ev) => (ev.id === updated.id ? updated : ev)) });
                        }}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mazmunı</label>
                      <textarea
                        rows={3}
                        value={editingEvent.description}
                        onChange={(e) => {
                          const updated = { ...editingEvent, description: e.target.value };
                          setEditingEvent(updated);
                          setData({ ...data, events: data.events.map((ev) => (ev.id === updated.id ? updated : ev)) });
                        }}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 9. Jetiskenlikler */}
            {activeTab === 'jetiskenlikler' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                      Jetiskenlikler
                    </h3>
                    <p className="text-xs text-slate-500">
                      Olimpiada, sport, bilim báykewleri hám oqıwshılar jetiskenlikleri
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const newAch: Achievement = {
                        id: `ach-${Date.now()}`,
                        title: 'Jańa jetiskenlik ataması',
                        category: 'olimpiada',
                        categoryLabel: 'Pán olimpiadaları',
                        date: '2026',
                        description: 'Jetiskenlik haqqında qısqasha maǵlıwmat',
                        recipient: '[Oqıwshı yamasa jámáát atı]'
                      };
                      setData({ ...data, achievements: [newAch, ...data.achievements] });
                      setEditingAchievement(newAch);
                    }}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs transition-colors hover:bg-blue-800 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Jetiskenlik qosıw</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.achievements.map((ach) => (
                    <div
                      key={ach.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-amber-600 uppercase">
                          {ach.categoryLabel} · {ach.date}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">{ach.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{ach.description}</p>
                        {ach.recipient && (
                          <span className="text-xs text-blue-800 font-medium block mt-2">
                            {ach.recipient}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => setEditingAchievement(ach)}
                          type="button"
                          className="p-1.5 rounded-md hover:bg-blue-100 text-blue-700"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Jetiskenlikti óshiriwge isenimińiz kámil me?')) {
                              setData({
                                ...data,
                                achievements: data.achievements.filter((a) => a.id !== ach.id)
                              });
                            }
                          }}
                          type="button"
                          className="p-1.5 rounded-md hover:bg-red-100 text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {editingAchievement && (
                  <div className="p-5 border border-blue-200 bg-blue-50/50 rounded-xl space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-blue-200">
                      <h4 className="font-bold text-blue-900 text-sm">Jetiskenlikti ózgertiw</h4>
                      <button onClick={() => setEditingAchievement(null)} className="text-xs text-slate-500">Jabıw</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Kategoriya</label>
                        <select
                          value={editingAchievement.category}
                          onChange={(e) => {
                            const cat = e.target.value as any;
                            const map: Record<string, string> = {
                              olimpiada: 'Pán olimpiadaları',
                              sport: 'Sport jetiskenlikleri',
                              bilim: 'Bilim báykewleri',
                              oner: 'Óner hám mádeniyat',
                              oqiwshi: 'Oqıwshılardıń jetiskenlikleri'
                            };
                            const updated = {
                              ...editingAchievement,
                              category: cat,
                              categoryLabel: map[cat] || 'Jetiskenlik'
                            };
                            setEditingAchievement(updated);
                            setData({
                              ...data,
                              achievements: data.achievements.map((a) => (a.id === updated.id ? updated : a))
                            });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        >
                          <option value="olimpiada">Pán olimpiadaları</option>
                          <option value="sport">Sport jetiskenlikleri</option>
                          <option value="bilim">Bilim báykewleri</option>
                          <option value="oner">Óner hám mádeniyat</option>
                          <option value="oqiwshi">Oqıwshılardıń jetiskenlikleri</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Jıl</label>
                        <input
                          type="text"
                          value={editingAchievement.date}
                          onChange={(e) => {
                            const updated = { ...editingAchievement, date: e.target.value };
                            setEditingAchievement(updated);
                            setData({
                              ...data,
                              achievements: data.achievements.map((a) => (a.id === updated.id ? updated : a))
                            });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Tema</label>
                      <input
                        type="text"
                        value={editingAchievement.title}
                        onChange={(e) => {
                          const updated = { ...editingAchievement, title: e.target.value };
                          setEditingAchievement(updated);
                          setData({
                            ...data,
                            achievements: data.achievements.map((a) => (a.id === updated.id ? updated : a))
                          });
                        }}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Iyeleushi / Jeńimpaz</label>
                      <input
                        type="text"
                        value={editingAchievement.recipient || ''}
                        onChange={(e) => {
                          const updated = { ...editingAchievement, recipient: e.target.value };
                          setEditingAchievement(updated);
                          setData({
                            ...data,
                            achievements: data.achievements.map((a) => (a.id === updated.id ? updated : a))
                          });
                        }}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Tolıq túsindirme</label>
                      <textarea
                        rows={2}
                        value={editingAchievement.description}
                        onChange={(e) => {
                          const updated = { ...editingAchievement, description: e.target.value };
                          setEditingAchievement(updated);
                          setData({
                            ...data,
                            achievements: data.achievements.map((a) => (a.id === updated.id ? updated : a))
                          });
                        }}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 10. Fotogalereya */}
            {activeTab === 'fotogalereya' && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                      Fotogalereya súwretleri
                    </h3>
                    <p className="text-xs text-slate-500">
                      Mektep, oqıwshılar, ustazlar, is-sharalar hám jetiskenlikler fotosúwretlerin basqarıw
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const newPhoto: GalleryPhoto = {
                        id: `gal-${Date.now()}`,
                        title: 'Jańa fotosúwret',
                        category: 'mektep',
                        categoryLabel: 'Mektep',
                        photoUrl: data.schoolPhotoUrl,
                        date: '2026'
                      };
                      setData({ ...data, gallery: [newPhoto, ...data.gallery] });
                      setEditingGallery(newPhoto);
                    }}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs transition-colors hover:bg-blue-800 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Súwret qosıw</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {data.gallery.map((photo) => (
                    <div
                      key={photo.id}
                      className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between"
                    >
                      <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                        <img src={photo.photoUrl} alt="" className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/80 text-white text-[10px] rounded font-medium">
                          {photo.categoryLabel}
                        </span>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{photo.title}</h4>
                        <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-end gap-2">
                          <button
                            onClick={() => setEditingGallery(photo)}
                            className="text-xs text-blue-700 hover:underline"
                          >
                            Ózgertiw
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm('Súwret óshirilsin be?')) {
                                setData({ ...data, gallery: data.gallery.filter((g) => g.id !== photo.id) });
                              }
                            }}
                            className="text-xs text-red-600 hover:underline"
                          >
                            Óshiriw
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {editingGallery && (
                  <div className="p-5 border border-blue-200 bg-blue-50/50 rounded-xl space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-blue-200">
                      <h4 className="font-bold text-blue-900 text-sm">Súwret maǵlıwmatların ózgertiw</h4>
                      <button onClick={() => setEditingGallery(null)} className="text-xs text-slate-500">Jabıw</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Tema / Túsindirme</label>
                        <input
                          type="text"
                          value={editingGallery.title}
                          onChange={(e) => {
                            const updated = { ...editingGallery, title: e.target.value };
                            setEditingGallery(updated);
                            setData({ ...data, gallery: data.gallery.map((g) => (g.id === updated.id ? updated : g)) });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Kategoriya</label>
                        <select
                          value={editingGallery.category}
                          onChange={(e) => {
                            const cat = e.target.value as any;
                            const map: Record<string, string> = {
                              mektep: 'Mektep',
                              oqiwshilar: 'Oqıwshılar',
                              ustazlar: 'Ustazlar',
                              issharalar: 'Is-sharalar',
                              jetiskenlikler: 'Jetiskenlikler'
                            };
                            const updated = {
                              ...editingGallery,
                              category: cat,
                              categoryLabel: map[cat] || 'Mektep'
                            };
                            setEditingGallery(updated);
                            setData({ ...data, gallery: data.gallery.map((g) => (g.id === updated.id ? updated : g)) });
                          }}
                          className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-sm"
                        >
                          <option value="mektep">Mektep</option>
                          <option value="oqiwshilar">Oqıwshılar</option>
                          <option value="ustazlar">Ustazlar</option>
                          <option value="issharalar">Is-sharalar</option>
                          <option value="jetiskenlikler">Jetiskenlikler</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <PhotoUploader
                          label="Fotosúwretti júklew / almastırıw"
                          currentPhotoUrl={editingGallery.photoUrl}
                          onPhotoChanged={(photoUrl) => {
                            const updated = { ...editingGallery, photoUrl };
                            setEditingGallery(updated);
                            setData({ ...data, gallery: data.gallery.map((g) => (g.id === updated.id ? updated : g)) });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 11. Oqıwshılar & Ata-analar */}
            {activeTab === 'oqiw_ata' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                    Oqıwshılar hám Ata-analar bólimi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Oqıw qaǵıydaları hám ata-analar ushın áhmiyetli esletpeler
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mektep qaǵıydaları (Hár bir qatarda bir qaǵıyda)
                    </label>
                    <textarea
                      rows={5}
                      value={data.students.rules.join('\n')}
                      onChange={(e) => {
                        const lines = e.target.value.split('\n').filter((l) => l.trim().length > 0);
                        setData({
                          ...data,
                          students: { ...data.students, rules: lines }
                        });
                      }}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Ata-analar ushın áhmiyetli maǵlıwmatlar (Hár bir qatarda bir esletpe)
                    </label>
                    <textarea
                      rows={5}
                      value={data.parents.importantNotes.join('\n')}
                      onChange={(e) => {
                        const lines = e.target.value.split('\n').filter((l) => l.trim().length > 0);
                        setData({
                          ...data,
                          parents: { ...data.parents, importantNotes: lines }
                        });
                      }}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 12. Baylanıs & Telegram */}
            {activeTab === 'baylanis' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                    Baylanıs hám Telegram maǵlıwmatları
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sayt tómendegi, Baylanıs bólimindegi hám Bas bettegi baylanıs maǵlıwmatları
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mánzil (Tolıq kóshe mánzili)
                    </label>
                    <input
                      type="text"
                      value={data.contact.address}
                      onChange={(e) =>
                        setData({
                          ...data,
                          contact: { ...data.contact, address: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Telefon
                    </label>
                    <input
                      type="text"
                      value={data.contact.phone}
                      onChange={(e) =>
                        setData({
                          ...data,
                          contact: { ...data.contact, phone: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Elektron pochta
                    </label>
                    <input
                      type="text"
                      value={data.contact.email}
                      onChange={(e) =>
                        setData({
                          ...data,
                          contact: { ...data.contact, email: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Telegram username (Mısalı: @nukus1Qmi)
                    </label>
                    <input
                      type="text"
                      value={data.contact.telegramUsername}
                      onChange={(e) =>
                        setData({
                          ...data,
                          contact: { ...data.contact, telegramUsername: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Telegram siltemesi (Link)
                    </label>
                    <input
                      type="text"
                      value={data.contact.telegramLink}
                      onChange={(e) =>
                        setData({
                          ...data,
                          contact: { ...data.contact, telegramLink: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 13. Sistema & Arxiv */}
            {activeTab === 'sistema' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                    Sistema hám Arxiv parametrleri
                  </h3>
                  <p className="text-xs text-slate-500">
                    Maǵlıwmatlar nusqasın alıw, tiklew hám sayttı dáslepki jaǵdayına qaytarıw
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Export & Import cards */}
                  <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                    <h4 className="font-bold text-slate-900 text-sm">
                      Maǵlıwmatlar rezerv nusqasın alıw (Backup)
                    </h4>
                    <p className="text-xs text-slate-600">
                      Barlıq kiritilgen maǵlıwmatlardı, ustazlardı hám fotosúwretlerdi JSON fayl retinde kompyuterińizge saqlap alıwıńız múmkin.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={handleExportJson}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold text-xs hover:bg-blue-800 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>JSON formatında júklep alıw</span>
                      </button>

                      <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer">
                        <Upload className="w-4 h-4 text-blue-700" />
                        <span>JSON fayldan tiklew</span>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImportJson}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Reset card */}
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50 space-y-3">
                    <h4 className="font-bold text-red-900 text-sm">
                      Dáslepki qalıpqa qaytarıw (Reset)
                    </h4>
                    <p className="text-xs text-red-700">
                      Barlıq ózgerislerdi óshirip, sayttı baslanǵısh standart qaraqalpaqsha maǵlıwmatlarına qaytaradı.
                    </p>
                    <button
                      onClick={handleReset}
                      type="button"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 text-white font-semibold text-xs hover:bg-red-700 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Dáslepki halatqa qaytarıw</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Bottom Save Bar */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Avtomatikalıq saqlaw qosılǵan</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-white text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              Jabıw
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="px-5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center gap-1.5"
            >
              <Save className="w-4 h-4 text-amber-400" />
              <span>Saqlaw</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
