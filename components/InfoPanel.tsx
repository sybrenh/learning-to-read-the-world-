import React from 'react';
import { CountryData } from '../types';
import { X, Globe, Phone, MapPin } from 'lucide-react';

interface InfoPanelProps {
  country: CountryData | null;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ country, onClose }) => {
  if (!country) return null;

  return (
    <div className="absolute top-4 right-4 z-[1001] w-80 md:w-96 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Globe size={20} className="opacity-80"/> 
            {country.name}
          </h2>
          <p className="text-blue-100 text-sm opacity-90">{country.region}</p>
        </div>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto">
        <div className="mb-6 text-center">
          <div className="inline-block p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 min-w-[120px]">
             <span className="text-3xl font-bold text-gray-800 tracking-widest font-mono break-words">
              {country.characters}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-wide">Distinctive Script</p>
        </div>

        {/* Geoguessr Meta Section - HARDCODED DATA */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
            <div className="flex items-center gap-2 text-orange-800 font-semibold text-xs uppercase mb-1">
              <Phone size={12} /> Phone Prefix
            </div>
            <div className="text-2xl font-bold text-gray-800 tracking-tight">
              {country.phonePrefix}
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-100">
             <div className="flex items-center gap-2 text-green-800 font-semibold text-xs uppercase mb-1">
              <MapPin size={12} /> Road Words
            </div>
            <div className="text-sm font-medium text-gray-800 leading-snug">
              {country.commonWords.slice(0, 3).join(', ')}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Identification Guide</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {country.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
