'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            <img src="/logo.png" alt="One Song Foundation Logo" className="h-10 w-auto mr-3" />
            <span>One Song Foundation</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <Link href="/" className="text-gray-600 font-bold px-6 py-2 rounded-full transition-colors hover:bg-blue-600 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 font-bold px-6 py-2 rounded-full transition-colors hover:bg-blue-600 hover:text-white">
              About
            </Link>
            <Link href="/team" className="text-gray-600 font-bold px-6 py-2 rounded-full transition-colors hover:bg-blue-600 hover:text-white">
              Team
            </Link>
            <Link href="/partners" className="text-gray-600 font-bold px-6 py-2 rounded-full transition-colors hover:bg-blue-600 hover:text-white">
              Partners
            </Link>
            <a href="https://www.paypal.com/fundraiser/charity/5615963" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold px-6 py-2 rounded-full transition-colors hover:bg-blue-700">
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/team" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Team
            </Link>
            <Link href="/partners" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Partnerships
            </Link>
            <a href="https://www.paypal.com/fundraiser/charity/5615963" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-center hover:bg-blue-700 transition-colors w-full">
              Donate
            </a>
          </div>
        )}
      </div>
    </nav>
  )
} 