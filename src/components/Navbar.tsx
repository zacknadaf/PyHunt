import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8" />
            <span className="font-bold text-xl">PyHunt</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/register" className="hover:text-indigo-200">Register</Link>
            <Link to="/terms" className="hover:text-indigo-200">Terms</Link>
            <Link to="/privacy" className="hover:text-indigo-200">Privacy</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}