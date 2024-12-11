import React from 'react';
import { Users, Calendar, Code2, Award } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Real-World Challenges',
    description: 'Solve industry-level Python problems and showcase your skills',
  },
  {
    icon: Users,
    title: 'Network & Collaborate',
    description: 'Connect with fellow developers and industry experts',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Choose your preferred time slot for maximum convenience',
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Earn recognized certificates and add value to your portfolio',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Participate?</h2>
          <p className="text-xl text-gray-600">Experience the ultimate Python programming challenge</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}