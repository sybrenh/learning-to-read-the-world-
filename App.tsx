import React, { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { CountryData, MapMode, QuizState, QuizModeType } from './types';
import { COUNTRY_DATA, INITIAL_CENTER, INITIAL_ZOOM } from './constants';
import InfoPanel from './components/InfoPanel';
import QuizOverlay from './components/QuizOverlay';
import { Brain, Map as MapIcon, RotateCcw, Type, MapPin } from 'lucide-react';

// Fix for default leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// --- Helper Component to handle map movement ---
const MapController = ({ center, zoom }: { center: [number, number], zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, map]);
  return null;
};

const App: React.FC = () => {
  const [mode, setMode] = useState<MapMode>('explore');
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  
  // Quiz State
  const [quizState, setQuizState] = useState<QuizState>({
    isActive: false,
    mode: 'script',
    currentCountryId: null,
    currentWord: null,
    score: 0,
    total: 0,
    feedback: null,
  });

  // Derived state for the current quiz target
  const quizTarget = useMemo(() => 
    COUNTRY_DATA.find(c => c.id === quizState.currentCountryId) || null
  , [quizState.currentCountryId]);

  // Start or Reset Quiz
  const startQuiz = (quizMode: QuizModeType = 'script') => {
    const randomCountry = COUNTRY_DATA[Math.floor(Math.random() * COUNTRY_DATA.length)];
    const randomWord = randomCountry.commonWords[Math.floor(Math.random() * randomCountry.commonWords.length)];
    
    setQuizState({
      isActive: true,
      mode: quizMode,
      currentCountryId: randomCountry.id,
      currentWord: randomWord,
      score: 0,
      total: 0,
      feedback: null,
    });
    setMode('quiz');
    setSelectedCountry(null);
  };

  const nextQuestion = () => {
    let nextCountry;
    // Simple randomizer ensuring not same twice in a row if possible
    do {
       nextCountry = COUNTRY_DATA[Math.floor(Math.random() * COUNTRY_DATA.length)];
    } while (nextCountry.id === quizState.currentCountryId && COUNTRY_DATA.length > 1);

    const nextWord = nextCountry.commonWords[Math.floor(Math.random() * nextCountry.commonWords.length)];

    setQuizState(prev => ({
      ...prev,
      currentCountryId: nextCountry.id,
      currentWord: nextWord,
      feedback: null,
    }));
  };

  const handleCountryClick = (country: CountryData) => {
    if (mode === 'explore') {
      setSelectedCountry(country);
    } else if (mode === 'quiz' && !quizState.feedback) {
      // Quiz Logic
      const isCorrect = country.id === quizState.currentCountryId;
      setQuizState(prev => ({
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        total: prev.total + 1,
        feedback: isCorrect ? 'correct' : 'incorrect'
      }));
    }
  };

  const createCustomIcon = (country: CountryData, isTarget: boolean = false) => {
    // In Quiz mode, hide content unless we are in the feedback state.
    const showLabel = mode === 'explore' || !!quizState.feedback;
    
    let content = '?';
    if (showLabel) {
      if (country.scriptImageUrl) {
         content = `<img src="${country.scriptImageUrl}" alt="${country.name}" class="h-6 w-auto" />`;
      } else {
         content = country.characters;
      }
    }
    
    return L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div class="script-marker" style="
          color: ${showLabel ? '#111827' : '#9CA3AF'}; 
          font-size: ${showLabel ? '14px' : '18px'};
        ">
          <div class="marker-label border-2 ${isTarget ? 'border-green-500 bg-green-50' : 'border-transparent'}">
            ${content}
          </div>
        </div>
      `,
      iconSize: [60, 30],
      iconAnchor: [30, 15]
    });
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 text-gray-900">
      {/* --- Top Navigation --- */}
      <div className="absolute top-4 left-4 z-[1002] flex flex-col gap-2">
        <div className="bg-white/90 backdrop-blur rounded-lg shadow-lg p-1 flex gap-1 border border-gray-200">
          <button
            onClick={() => { setMode('explore'); setSelectedCountry(null); }}
            className={`px-3 py-2 rounded-md flex items-center gap-2 text-sm font-semibold transition-all ${
              mode === 'explore' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MapIcon size={16} /> Explore
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-1 self-center"></div>

          <button
            onClick={() => startQuiz('script')}
            className={`px-3 py-2 rounded-md flex items-center gap-2 text-sm font-semibold transition-all ${
              mode === 'quiz' && quizState.mode === 'script'
                ? 'bg-indigo-600 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Type size={16} /> Script Quiz
          </button>
          
          <button
            onClick={() => startQuiz('word')}
            className={`px-3 py-2 rounded-md flex items-center gap-2 text-sm font-semibold transition-all ${
              mode === 'quiz' && quizState.mode === 'word'
                ? 'bg-emerald-600 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MapPin size={16} /> Word Quiz
          </button>
        </div>
        
        {mode === 'quiz' && (
          <div className="bg-white/90 backdrop-blur rounded-lg shadow-lg p-2 border border-gray-200 animate-in slide-in-from-top-2">
            <button 
              onClick={() => startQuiz(quizState.mode)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw size={12} /> Restart Quiz
            </button>
          </div>
        )}
      </div>

      {/* --- Map --- */}
      <MapContainer 
        center={INITIAL_CENTER} 
        zoom={INITIAL_ZOOM} 
        style={{ width: '100%', height: '100%' }}
        className="outline-none"
        zoomControl={false}
        minZoom={2}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          noWrap={true}
        />

        {/* Dynamic Markers */}
        {COUNTRY_DATA.map((country) => {
          // Logic for highlighting correct/incorrect in quiz result
          const isCorrectAnswer = mode === 'quiz' && quizState.feedback && country.id === quizState.currentCountryId;
          
          return (
            <Marker
              key={country.id}
              position={[country.lat, country.lng]}
              icon={createCustomIcon(country, isCorrectAnswer || false)}
              eventHandlers={{
                click: () => handleCountryClick(country),
              }}
            >
              {mode === 'explore' && (
                <Popup className="font-sans">
                  <div className="text-center">
                    <h3 className="font-bold text-lg">{country.name}</h3>
                    <p className="text-sm text-gray-500">Click for details</p>
                  </div>
                </Popup>
              )}
            </Marker>
          );
        })}
        
        <MapController center={INITIAL_CENTER} zoom={INITIAL_ZOOM} />
      </MapContainer>

      {/* --- Overlays --- */}
      {mode === 'explore' && (
        <InfoPanel 
          country={selectedCountry} 
          onClose={() => setSelectedCountry(null)} 
        />
      )}

      {mode === 'quiz' && (
        <QuizOverlay 
          quizState={quizState} 
          targetCountry={quizTarget}
          onNextQuestion={nextQuestion}
        />
      )}
    </div>
  );
};

export default App;
