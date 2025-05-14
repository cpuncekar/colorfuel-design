import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <Palette size={28} className="text-indigo-600" strokeWidth={2.5} />
              <span className="font-bold text-xl text-indigo-600 underline underline-offset-2">
                ColorFuel
              </span>
            </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-300 hover:text-indigo-600 ${
                location.pathname === '/' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/browse" 
              className={`font-medium transition-colors duration-300 hover:text-indigo-600 ${
                location.pathname === '/browse' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              Browse
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-300 hover:text-indigo-600 ${
                location.pathname === '/about' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;