import React, { useState, useMemo } from 'react';
import PaletteCard from '../components/PaletteCard';
import { palettes } from '../data/palettes';
import { Search, Filter } from 'lucide-react';

const Browse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    palettes.forEach(palette => {
      palette.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);
  
  // Filter palettes based on search term and selected tag
  const filteredPalettes = useMemo(() => {
    return palettes.filter(palette => {
      const matchesSearch = searchTerm === '' || 
        palette.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        palette.colors.some(color => color.toLowerCase().includes(searchTerm.toLowerCase())) ||
        palette.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTag = selectedTag === null || palette.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Browse Palettes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful color palettes to inspire your next design project.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, color, or tag"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center mr-2">
                  <Filter size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Filter:</span>
                </div>
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedTag === null
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                      tag === selectedTag
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {filteredPalettes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPalettes.map(palette => (
              <PaletteCard key={palette.id} palette={palette} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No palettes found. Try a different search term or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;