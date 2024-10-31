import React from 'react';
import { ClipboardList, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode }) => {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-sm mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <ClipboardList className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              SmartTODO
            </h1>
          </div>
          <button
            onClick={onToggleDarkMode}
            className="icon-button rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};