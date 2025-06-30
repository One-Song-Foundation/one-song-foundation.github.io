import React from 'react';

export default function Partners() {
  return (
    <main className="min-h-screen">
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">Partnerships</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We believe in the power of collaboration. If you are an organization, treatment center, or individual interested in partnering with One Song Foundation to expand access to transformative care, we would love to connect with you.
            </p>
            <div className="bg-white p-10 rounded-2xl shadow-md mt-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Become a Partner</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-2">
                We want to gift scholarships and grants to clients for treatment centers that provide excellent care.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Please reach out to <a href="/team" className="text-blue-700 hover:underline">Chris</a> or <a href="/team" className="text-blue-700 hover:underline">Carl</a> if you are interested in partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Partners Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Partners</h2>
            <ul className="space-y-6">
              <li className="bg-blue-50 rounded-xl p-6 shadow flex flex-col items-center">
                <a href="https://www.embodiedrecovery.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <img src="/embodiedrecovery.svg" alt="Embodied Recovery Logo" className="mb-4 h-16 w-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 