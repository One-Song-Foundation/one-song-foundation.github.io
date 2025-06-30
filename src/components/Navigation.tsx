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
            {/* Custom tooltip wrapper for Donate button */}
            <div className="relative group">
              <button disabled className="text-blue-600 font-bold px-6 py-2 rounded-full transition-colors opacity-60 cursor-not-allowed group-hover:bg-blue-300 group-hover:text-white">
                Donate
              </button>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                Pending 501c status
              </span>
            </div>
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
            {/* Custom tooltip wrapper for Donate button (mobile) */}
            <div className="relative group w-full">
              <button disabled className="block bg-blue-300 text-white px-6 py-2 rounded-full font-medium text-center opacity-60 cursor-not-allowed w-full">
                Donate
              </button>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                Pending 501c status
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 