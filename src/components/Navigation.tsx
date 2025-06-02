'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            One Song Foundation
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Programs
            </Link>
            <Link href="/stories" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Stories
            </Link>
            <Link href="/donate" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Donate
            </Link>
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
            <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Programs
            </Link>
            <Link href="/stories" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Stories
            </Link>
            <Link href="/donate" className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-center">
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 