import React from 'react';

export default function Applicants() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Scholarship Program
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-700 mb-8 font-semibold">
              Financial Support for Your Recovery Journey
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              One Song Foundation offers scholarships that help offset the cost of mental health and addiction treatment for individuals facing financial barriers. We believe access to quality care should be available to everyone, regardless of ability to pay.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>

            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">1</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect with a Partner Treatment Center</h3>
                    <p className="text-gray-700">
                      Our scholarship program works through referrals from our partner treatment centers. Start by reaching out to a treatment center about your care needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">2</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Referred for a Scholarship</h3>
                    <p className="text-gray-700">
                      If you demonstrate financial need, the treatment center will refer you to One Song Foundation and provide you with our scholarship application.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">3</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">We Review Your Application</h3>
                    <p className="text-gray-700">
                      We personally review each application. Our focus is on understanding your financial situation and how we can help make treatment accessible for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">4</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Funds Go Directly to Your Treatment</h3>
                    <p className="text-gray-700">
                      If approved, scholarship funds are paid directly to the treatment center on your behalf. This ensures the funds are used for your care and treatment services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Important Information</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong>Scholarship funds are paid directly to treatment centers</strong>, not to applicants. This ensures that funds are used for their intended purpose: supporting your treatment and recovery.
                </p>
                <p>
                  Our application focuses on understanding your <strong>financial need</strong>. Medical and clinical assessments are handled by the treatment center, not by One Song Foundation.
                </p>
                <p>
                  We review applications personally and typically respond within <strong>5-7 business days</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Center Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">For Treatment Centers</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We are always happy to partner with treatment centers who share our commitment to accessible, quality care. If your organization would like to become a referral partner, we'd love to hear from you.
            </p>
            <a
              href="mailto:info@onesongfoundation.org"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us About Partnering
            </a>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Questions?</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              If you have questions about our scholarship program or the application process, please don't hesitate to reach out.
            </p>
            <a
              href="mailto:info@onesongfoundation.org"
              className="text-blue-600 text-xl font-semibold hover:text-blue-700 transition-colors"
            >
              info@onesongfoundation.org
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
