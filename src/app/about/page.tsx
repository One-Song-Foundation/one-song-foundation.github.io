import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">About One Song Foundation</h1>
            <h2 className="text-2xl md:text-3xl text-blue-700 mb-8 font-semibold">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our mission is to create pathways to healing by providing financial support for mental health and addiction treatment, ensuring everyone has access to transformative care regardless of their background or resources.
            </p>
            <div className="bg-white p-10 rounded-2xl shadow-md mt-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How We Help</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
              </p>
              <ul className="text-xl text-gray-700 leading-relaxed list-disc list-inside mt-8 space-y-3 text-center max-w-2xl mx-auto">
                <li>Bridges financial gap</li>
                <li>Grants longer more impactful stays</li>
                <li>Promotes excellence in treatment</li>
              </ul>
            </div>
            {/* New Section: What Sets Us Apart */}
            <div className="bg-white p-10 rounded-2xl shadow-md mt-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">Qualities of Exceptional Treatment</h3>
              <div className="flex flex-col md:flex-row justify-center gap-10'">
                {/* Column 1 */}
                <div className="flex-1 max-w-xs mx-auto">
                  <div className="flex justify-center mb-4">
                    <span role="img" aria-label="lightbulb" className="text-4xl">💡</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 text-center">Innovative & Curated Curriculum</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                    <li>Blends psychological and somatic wisdom</li>
                    <li>Clients achieve lasting change and a felt shift in their experience of life</li>
                    <li>Provides a strong post graudation program</li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="flex-1 max-w-xs mx-auto">
                  <div className="flex justify-center mb-4">
                    <span role="img" aria-label="conversation" className="text-4xl">🗣️</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 text-center">High-touch, Intimate and Meaningful Care</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                    <li>Group sizes are intentionally small, 6 to 8 clients maximum</li>
                    <li>Dual facilitation in each group (3-4 clients per clinician)</li>
                    <li>Clients don't get lost in the shuffle</li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div className="flex-1 max-w-xs mx-auto">
                  <div className="flex justify-center mb-4">
                    <span role="img" aria-label="meditation" className="text-4xl">🧘</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 text-center">Deeply Rooted Staff Culture</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
                    <li>Lives their recovery, have experienced the change that they want to help others achieve</li>
                    <li>They embody presence, integrity, and authentic recovery</li>
                    <li>They are committed to the mission of the organization and a living example</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}   