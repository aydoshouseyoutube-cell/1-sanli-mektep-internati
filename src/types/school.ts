export interface StatisticItem {
  id: string;
  value: string;
  label: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  position: string;
  photoUrl: string;
  bio?: string;
  education?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  photoUrl: string;
  author?: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  photoUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'olimpiada' | 'sport' | 'bilim' | 'oner' | 'oqiwshi';
  categoryLabel: string;
  date: string;
  description: string;
  photoUrl?: string;
  recipient?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'mektep' | 'oqiwshilar' | 'ustazlar' | 'issharalar' | 'jetiskenlikler';
  categoryLabel: string;
  photoUrl: string;
  date?: string;
}

export interface AboutSectionData {
  history: string;
  purpose: string;
  tasks: string[];
  achievementsSummary: string;
}

export interface DirectorData {
  name: string;
  position: string;
  photoUrl: string;
  welcomeHeading: string;
  message: string;
}

export interface StudentInfoData {
  schedule: {
    period: string;
    time: string;
    description: string;
  }[];
  rules: string[];
  usefulResources: {
    title: string;
    description: string;
    category: string;
  }[];
  news: {
    title: string;
    date: string;
    description: string;
  }[];
}

export interface ParentInfoData {
  importantNotes: string[];
  announcements: {
    title: string;
    date: string;
    content: string;
  }[];
  documents: {
    title: string;
    description: string;
    type: string;
  }[];
  parentingAdvice: {
    title: string;
    content: string;
  }[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  telegramUsername: string;
  telegramLink: string;
  address: string;
  workingHours: string;
}

export interface SchoolData {
  schoolName: string;
  fullSchoolName: string;
  heroTitle: string;
  heroSubtitle: string;
  welcomeTitle: string;
  welcomeText: string;
  schoolPhotoUrl: string;
  logoUrl?: string;
  stats: StatisticItem[];
  about: AboutSectionData;
  director: DirectorData;
  teachers: Teacher[];
  news: NewsArticle[];
  events: SchoolEvent[];
  achievements: Achievement[];
  gallery: GalleryPhoto[];
  students: StudentInfoData;
  parents: ParentInfoData;
  contact: ContactInfo;
}
