import React from 'react';
import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Palette className="h-7 w-7 text-rose-600" />
            <span className="font-semibold text-2xl text-gray-900">Artiproche</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-rose-600 px-3 py-2 font-medium">
              Découvrir
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600 px-3 py-2 font-medium">
              À propos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}