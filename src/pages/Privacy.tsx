import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-indigo">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p>We collect information that you provide directly to us when registering for PyHunt, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Institute Name</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your registration</li>
            <li>Communicate with you about the event</li>
            <li>Provide support and assistance</li>
            <li>Send important updates about PyHunt</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul className="list-none pl-6">
            <li>Email: support@brightbattle.com</li>
            <li>Phone: +91 8855944455</li>
          </ul>
        </section>
      </div>
    </div>
  );
}