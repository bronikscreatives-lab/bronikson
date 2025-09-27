import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="Toggle theme"
    >
      <span
        className={`${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200 flex items-center justify-center`}
      >
        {theme === 'light' ? (
          <Sun size={12} className="text-yellow-500" />
        ) : (
          <Moon size={12} className="text-sky-blue" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
