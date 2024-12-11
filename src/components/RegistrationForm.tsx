import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  institute: string;
  slot: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    institute: '',
    slot: '',
  });

  const slots = [
    '10:00 AM - 12:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, integrate with PhonePe API here
    toast.success('Registration initiated! Redirecting to payment...');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Register for PyHunt</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="institute" className="block text-sm font-medium text-gray-700">Institute Name</label>
          <input
            type="text"
            id="institute"
            name="institute"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.institute}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="slot" className="block text-sm font-medium text-gray-700">Preferred Slot</label>
          <select
            id="slot"
            name="slot"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.slot}
            onChange={handleChange}
          >
            <option value="">Select a slot</option>
            {slots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm text-gray-600 mb-2">Registration Fee: ₹99</p>
          <p className="text-xs text-gray-500">Payment will be processed via PhonePe</p>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}