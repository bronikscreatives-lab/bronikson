import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img 
              src="/logo-white.svg" 
              alt="Broniks Educational" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed max-w-md">
              We're passionate educators and designers creating high-quality digital learning materials 
              that make education fun, engaging, and effective for young learners worldwide.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-coral transition-colors">
                <div className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-coral transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-coral transition-colors">
                <div className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-coral transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-coral transition-colors">
                <div className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-coral transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-coral transition-colors">
                <div className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-coral transition-colors">
                  <span className="text-sm font-bold">tw</span>
                </div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-coral transition-colors">
                  Reading & Literacy
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-coral transition-colors">
                  Math & Numbers
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-coral transition-colors">
                  Science & Nature
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-coral transition-colors">
                  Arts & Crafts
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-coral transition-colors">
                  Games & Puzzles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-coral" />
                <span className="text-gray-300">support@broniksEducational.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-coral" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-coral mt-1" />
                <div className="text-gray-300">
                  <div>456 Education Avenue</div>
                  <div>Learning District, CA 90210</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Broniks Educational. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-coral transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-coral transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-coral transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;