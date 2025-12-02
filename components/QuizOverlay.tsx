import React from 'react';
import { QuizState, CountryData } from '../types';
import { CheckCircle, XCircle, ArrowRight, Type, MapPin } from 'lucide-react';

interface QuizOverlayProps {
  quizState: QuizState;
  targetCountry: CountryData | null;
  onNextQuestion: () => void;
}

const QuizOverlay: React.FC<QuizOverlayProps> = ({ quizState, targetCountry, onNextQuestion }) => {
  if (!targetCountry) return null;

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1001] w-11/12 max-w-2xl">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all">
        
        {/* Status Bar */}
        <div className="bg-gray-50 px-6 py-2 flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
          <span className="flex items-center gap-2">
            {quizState.mode === 'script' ? <Type size={14}/> : <MapPin size={14}/>}
            {quizState.mode === 'script' ? 'Character Quiz' : 'Word Quiz'}
          </span>
          <span>Score: {quizState.score} / {quizState.total}</span>
        </div>

        <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
          
          {/* Question Section */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-gray-500 text-sm mb-2 uppercase tracking-wide">
              {quizState.mode === 'script' 
                ? "Which country uses these characters?" 
                : "Where would you see this road sign?"}
            </h3>
            
            <div className="bg-gray-100 p-4 rounded-lg inline-block md:block">
              <div className={`font-bold text-gray-800 tracking-wider font-mono ${quizState.mode === 'script' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>
                {quizState.mode === 'script' 
                  ? targetCountry.characters 
                  : (quizState.currentWord || targetCountry.commonWords[0])}
              </div>
            </div>
            
            {quizState.mode === 'word' && (
               <p className="text-xs text-gray-400 mt-2 italic">Common street/road indicator</p>
            )}
          </div>

          {/* Feedback / Action Section */}
          <div className="w-full md:w-auto flex flex-col items-center justify-center min-w-[140px]">
            {!quizState.feedback && (
              <div className="text-center p-3 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-100 animate-pulse">
                Click map to answer
              </div>
            )}

            {quizState.feedback === 'correct' && (
              <div className="flex flex-col items-center gap-3 animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
                  <CheckCircle size={28} />
                  Correct!
                </div>
                <div className="text-sm text-gray-600">It was {targetCountry.name}</div>
                <button 
                  onClick={onNextQuestion}
                  className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full text-sm hover:bg-black transition-colors"
                >
                  Next <ArrowRight size={14} />
                </button>
              </div>
            )}

            {quizState.feedback === 'incorrect' && (
              <div className="flex flex-col items-center gap-3 animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-2 text-red-600 font-bold text-lg">
                  <XCircle size={28} />
                  Wrong
                </div>
                <div className="text-sm text-gray-600">Correct: <b>{targetCountry.name}</b></div>
                <button 
                  onClick={onNextQuestion}
                  className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-red-700 transition-colors"
                >
                  Next <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuizOverlay;
