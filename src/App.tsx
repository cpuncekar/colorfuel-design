import React, { useRef } from 'react';
import { Palette, Github } from 'lucide-react';
import { palettes } from './data/palettes';
import PaletteCard from './components/PaletteCard';

function App() {
  const browseRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <Palette size={28} className="text-indigo-600" strokeWidth={2.5} />
              <span className="font-bold text-xl text-indigo-600">ColorFuel</span>
            </div>
            <div className="flex gap-6">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-600 hover:text-indigo-600">Home</button>
              <button onClick={() => scrollTo(browseRef)} className="text-gray-600 hover:text-indigo-600">Browse</button>
              <button onClick={() => scrollTo(aboutRef)} className="text-gray-600 hover:text-indigo-600">About</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/4"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-yellow-400 opacity-10 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fuel Your Design <span className="text-indigo-600">With Color</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover beautiful color palettes to inspire your next design project.
          </p>
          <button 
            onClick={() => scrollTo(browseRef)}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            Explore Palettes
          </button>
        </div>
      </section>

      {/* Browse Section */}
      <section ref={browseRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Color Palettes</h2>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {['All', 'Blue', 'Bold', 'Minimal', 'Warm', 'Tech', 'Retro', 'Nature'].map(tag => (
              <span 
                key={tag}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 shadow-sm hover:shadow transition-shadow cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Palette Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {palettes.slice(0, 9).map(palette => (
              <PaletteCard key={palette.id} palette={palette} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About ColorFuel</h2>
            <div className="prose prose-lg mx-auto">
              <p>
                ColorFuel helps designers create harmonious color combinations for their projects. 
                Our curated palettes are carefully selected to work beautifully together, whether 
                you're designing a website, brand identity, or digital product.
              </p>
              <h3>Tips for Using Color Palettes</h3>
              <ul>
                <li>Use your dominant color for 60% of the design, secondary for 30%, and accent for 10%</li>
                <li>Ensure sufficient contrast between text and background colors</li>
                <li>Consider color psychology and how different hues affect user emotions</li>
                <li>Test your palette across different devices and lighting conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} ColorFuel. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://netlify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <span className="text-sm font-medium">Netlify</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;