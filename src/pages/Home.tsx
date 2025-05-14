import React from 'react';
import Hero from '../components/Hero';
import PaletteCard from '../components/PaletteCard';
import { palettes } from '../data/palettes';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredPalettes = palettes.filter(palette => palette.featured);
  
  return (
    <div>
      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Palettes</h2>
              <p className="text-gray-600 mt-2">Explore our hand-picked color combinations</p>
            </div>
            <Link 
              to="/browse" 
              className="flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
              View all
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPalettes.map(palette => (
              <PaletteCard key={palette.id} palette={palette} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Ready to find your perfect palette?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our extensive collection of color palettes and find the perfect combination for your next project.
          </p>
          <Link 
            to="/browse" 
            className="inline-flex items-center bg-indigo-600 text-white font-medium py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Explore All Palettes
            <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;