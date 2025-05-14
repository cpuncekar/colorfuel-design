import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Palette } from '../types';
import { getContrastColor, copyToClipboard } from '../utils/colorUtils';

interface PaletteCardProps {
  palette: Palette;
}

const PaletteCard: React.FC<PaletteCardProps> = ({ palette }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  const handleCopyColor = (color: string, index: number) => {
    copyToClipboard(color);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{palette.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {palette.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex h-20 mb-4 rounded-lg overflow-hidden">
          {palette.colors.map((color, index) => (
            <div 
              key={index}
              className="flex-1 transition-transform duration-300 hover:scale-105 cursor-pointer relative group"
              style={{ backgroundColor: color }}
              onClick={() => handleCopyColor(color, index)}
            >
              <div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: `${color}BB` }}
              >
                {copiedIndex === index ? (
                  <Check size={20} color={getContrastColor(color)} />
                ) : (
                  <Copy size={20} color={getContrastColor(color)} />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1 text-xs font-mono">
          {palette.colors.map((color, index) => (
            <div 
              key={index}
              className="text-center cursor-pointer hover:text-indigo-600 transition-colors"
              onClick={() => handleCopyColor(color, index)}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaletteCard;