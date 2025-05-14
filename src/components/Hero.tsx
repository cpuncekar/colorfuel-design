import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background color blocks */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-yellow-400 opacity-10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fuel Your Design <span className="text-indigo-600">With Color</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover beautiful color palettes to inspire your next design project. 
            Browse our curated collection of vibrant color combinations.
          </p>
          <Link 
            to="/browse" 
            className="inline-flex items-center bg-indigo-600 text-white font-medium py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Explore Palettes
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;