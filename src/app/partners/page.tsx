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
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                At One Song, we are always looking to partner with treatment centers providing excellent care. If you believe you are offering exceptional mental health or addiction treatment services, we would love to meet you and learn more about what you do.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                We understand that excellent care is not cheap, and many clients may not have the financial means to afford it. That's what we hope to address at One Song. By providing scholarships or grants, we can help more clients access transformative treatment and increase the effectiveness of their care.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                For partnership inquiries, please email
                {' '}
                <a href="mailto:partnerships@onesongfoundation.org?subject=Partnership%20Inquiry" className="text-blue-700 hover:underline">partnerships@onesongfoundation.org</a>.
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
                <span className="mb-4 h-20 flex items-center justify-center text-3xl font-extrabold text-blue-600 animate-pulse">🚀 Coming Soon! 🚀</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 