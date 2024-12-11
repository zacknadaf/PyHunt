import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
      <div className="absolute inset-0">
        <img
          src="https://www.cassini.eu/hackathons/sites/default/files/styles/hero_image_2560x768_/public/2024-09/HERO%20-%20homepage_0.jpg.webp?itok=BjjaUxF_"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">PyHunt 2024</h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-200">
            Unleash Your Python Powers: Code, Compete, Conquer!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="text-lg font-semibold px-8 py-3 rounded-full bg-white/10">
              Registration Fee: ₹99
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
