import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={theme === 'light' ? "/logo-black.svg" : "/logo-white.svg"} 
              alt="Broniks Educational" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-gray dark:text-gray-300 hover:text-coral transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-gray dark:text-gray-300 hover:text-coral transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-gray dark:text-gray-300 hover:text-coral transition-colors font-medium"
            >
              Featured
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-gray dark:text-gray-300 hover:text-coral transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-coral text-white px-6 py-2 rounded-full hover:bg-coral/90 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            {/* <Sun size={16} className="text-sunshine-yellow" /> */}
            <ThemeToggle />
            {/* <Moon size={16} className="text-sky-blue" /> */}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-gray dark:text-gray-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-gray dark:text-gray-300 hover:text-coral transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-gray dark:text-gray-300 hover:text-coral transition-colors font-medium text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-slate-gray dark:text-gray-300 hover:text-coral transition-colors font-medium text-left"
              >
                Featured
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-gray dark:text-gray-300 hover:text-coral transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-coral text-white px-6 py-2 rounded-full hover:bg-coral/90 transition-colors font-medium text-center"
              >
                Contact
              </button>
              <div className="flex items-center justify-center space-x-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                <ThemeToggle />
                <span className="text-sm text-slate-gray dark:text-gray-300 ml-2">Theme</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;