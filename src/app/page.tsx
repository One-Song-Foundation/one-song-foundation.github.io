import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Despair to Song:<br />
              <span className="text-blue-600">Funding the Journey to Recovery</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
              Creating Pathways to Healing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              We believe that every person deserves access to effective, transformative treatment for mental health and addiction. Yet for too many, financial barriers and insurance limitations block the road to recovery. Our nonprofit public charity bridges this gap offering financial support for treatment that saves lives, restores dignity, and empowers lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative group inline-block">
                <button disabled className="bg-blue-300 text-white px-8 py-4 rounded-full font-semibold text-lg opacity-60 cursor-not-allowed">
                  Donate Now
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  Pending 501c status
                </span>
              </div>
              <Link 
                href="/team" 
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">The Problem</h2>
            <div className="bg-red-50 p-8 rounded-2xl">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Too many people are shut out of recovery. Insurance policies often deny or limit access to the most effective mental health and addiction treatment options. Even when coverage exists, it frequently falls short-leaving individuals and their families with unaffordable bills and incomplete care. These gaps lead to higher relapse rates, prolonged suffering, and, too often, preventable deaths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">The Solution</h2>
            <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed">
              We help people overcome the obstacles standing in the way of true healing.
            </p>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Through donor-supported funding, we:</h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Bridge the financial gap between insurance and actual treatment costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Support access to longer, more impactful stays in treatment
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Help individuals and families navigate a complex and often hostile system
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Provide dignity-based, person-centered care options
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Champion lasting recovery and reduce recidivism
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Offer education and advocacy to reduce stigma and inspire hope
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-xl text-gray-700 mt-12 text-center">
              Together, we create new pathways to healing.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Philosophy</h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              <strong>The name of our foundation comes from the ancient idea of the "one song" — a unifying thread of love and truth that lives beneath all things.</strong><br />
              Recovery is not just about surviving–it's about remembering this deeper melody, buried beneath trauma, addiction, and despair. For those walking the path of recovery, hearing that song again can mean the difference between life and death.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">We believe recovery is a sacred journey:</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  One that demands courage, support, and time
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  One that deserves community investment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  One that leads to the release of each person's unique gifts to the world
                </li>
              </ul>
            </div>
            <p className="text-xl text-gray-700 mt-12 leading-relaxed">
              By helping individuals find their way back to this song, we help them reclaim their lives and in doing so, we all heal.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">When one person reconnects with their true self:</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Families begin to breathe easier
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Children feel safer
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Generational cycles can shift
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Communities begin to change
                </li>
              </ul>
            </div>
            <p className="text-xl text-gray-700 mt-8 leading-relaxed">
              Recovery is never just personal--it's collective. Your support helps restore the song not just in one soul, but in the many lives they touch.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How You Can Help</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every donation opens a door. When you give, you're not just funding treatment. You're restoring hope. You're dissolving shame. You're changing a life.
            </p>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Join us in the movement to break barriers and bring healing where it's needed most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative group inline-block">
                <button disabled className="bg-blue-300 text-white px-8 py-4 rounded-full font-semibold text-lg opacity-60 cursor-not-allowed">
                  Donate Now
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  Pending 501c status
                </span>
              </div>
              <Link 
                href="/team" 
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
