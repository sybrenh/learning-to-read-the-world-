export interface CountryData {
  id: string;
  name: string;
  lat: number;
  lng: number;
  characters: string;
  description: string;
  region: 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania';
  commonWords: string[];
  phonePrefix: string;
  scriptImageUrl?: string;
}

export type QuizModeType = 'script' | 'word';

export interface QuizState {
  isActive: boolean;
  mode: QuizModeType;
  currentCountryId: string | null;
  currentWord: string | null; // For word quiz mode
  score: number;
  total: number;
  feedback: 'correct' | 'incorrect' | null;
}

export type MapMode = 'explore' | 'quiz';
