import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <div className="prose prose-indigo">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Registration and Participation</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Registration fee is non-refundable</li>
            <li>Participants must be present during their selected time slot</li>
            <li>Valid ID proof is required during the event</li>
            <li>BrightBattle reserves the right to modify event details</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Code of Conduct</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Participants must submit original work</li>
            <li>Any form of plagiarism will lead to disqualification</li>
            <li>Respectful behavior towards all participants is mandatory</li>
            <li>Decision of judges will be final</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p>For any queries regarding these terms, please contact:</p>
          <ul className="list-none pl-6">
            <li>Email: support@brightbattle.com</li>
            <li>Phone: +91 8855944455</li>
          </ul>
        </section>
      </div>
    </div>
  );
}