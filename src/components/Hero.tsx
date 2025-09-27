import { ArrowRight, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coral/20 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sunshine-yellow/20 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img 
              src={theme === 'light' ? "/logo-black.svg" : "/logo-white.svg"} 
              alt="Broniks Creatives" 
              className="h-24 md:h-32 w-auto mx-auto mb-6"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up delay-200">
            Fun Learning
            <br />
            <span className="text-coral relative">
              Made Easy
              <BookOpen className="absolute -top-2 -right-20 text-sky-blue animate-bounce" size={32} />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Digital educational products designed to make learning fun and engaging for kindergarten and elementary school students. Printable worksheets, activities, and games that teachers and parents love.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
            <button 
              onClick={scrollToPortfolio}
              className="group bg-coral text-white px-8 py-4 rounded-full hover:bg-coral/90 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Shop Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button 
              onClick={scrollToPortfolio}
              className="group border-2 border-slate-gray dark:border-gray-300 text-slate-gray dark:text-gray-300 px-8 py-4 rounded-full hover:bg-slate-gray hover:text-white dark:hover:bg-gray-300 dark:hover:text-slate-gray transition-all duration-300 font-semibold text-lg"
            >
              Browse Products
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up delay-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-coral mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Happy Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sky-blue mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Digital Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sunshine-yellow mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Grade Levels</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;