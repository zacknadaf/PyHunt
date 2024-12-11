import React from 'react';
import { Trophy } from 'lucide-react';

const prizes = [
  {
    position: '1st',
    amount: '₹1,00,000',
    color: 'from-yellow-400 to-yellow-300',
    icon: '🥇',
  },
  {
    position: '2nd',
    amount: '₹50,000',
    color: 'from-gray-300 to-gray-200',
    icon: '🥈',
  },
  {
    position: '3rd',
    amount: '₹25,000',
    color: 'from-amber-700 to-amber-600',
    icon: '🥉',
  },
];

export default function PrizesSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Prizes Worth ₹1,75,000</h2>
          <p className="text-xl text-gray-300">Compete for glory and amazing rewards!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize) => (
            <div
              key={prize.position}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${prize.color} rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform`}></div>
              <div className="relative bg-gray-800 p-8 rounded-lg transform transition-transform group-hover:-translate-y-1">
                <div className="text-6xl mb-4">{prize.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{prize.position} Prize</h3>
                <p className="text-3xl font-bold text-yellow-400">{prize.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}