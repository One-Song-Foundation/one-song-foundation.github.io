import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">One Song Foundation</h3>
            <p className="text-gray-400">
              Creating pathways to healing through financial support for mental health and addiction treatment.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2 w-full">
              <li>
                <Link href="/" className="block w-full text-left text-gray-400 hover:text-white transition-colors px-2 py-1 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block w-full text-left text-gray-400 hover:text-white transition-colors px-2 py-1 rounded">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="block w-full text-left text-gray-400 hover:text-white transition-colors px-2 py-1 rounded">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/partners" className="block w-full text-left text-gray-400 hover:text-white transition-colors px-2 py-1 rounded">
                  Partners
                </Link>
              </li>
              <li>
                <span title="Pending 501c status" className="block w-full text-left cursor-not-allowed text-gray-500 px-2 py-1 rounded opacity-60">
                  Donate
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: <a href="mailto:chris@onesongfoundation.org" className="underline hover:text-white">chris@onesongfoundation.org</a></li>
              <li>Phone: (408) 320-9319</li>
              <li>Founded in California</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} One Song Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 