import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 8855944455</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:support@brightbattle.com">support@brightbattle.com</a>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/privacy" className="hover:text-indigo-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-indigo-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© {new Date().getFullYear()} BrightBattle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}