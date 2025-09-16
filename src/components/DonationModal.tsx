'use client'

import { useState } from 'react'
import { FaPaypal, FaTimes, FaHeart } from 'react-icons/fa'

// PayPal global type declaration
// declare global {
//   interface Window {
//     paypal: {
//       HostedButtons: (config: { hostedButtonId: string }) => {
//         render: (selector: string) => void
//       }
//     }
//   }
// }

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FaHeart className="text-red-500 text-xl" />
            <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {zoomSrc ? (
            <div className="flex flex-col items-center">
              <img src={zoomSrc} alt="Donation QR" className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto rounded-lg shadow" />
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => setZoomSrc(null)}
                  className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <a
                  href={zoomSrc || '#'}
                  download
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Download
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Mission Statement */}
              <p className="text-gray-700 mb-8 text-center text-lg">
                Your donation helps provide financial support for mental health and addiction treatment, 
                creating pathways to healing for those in need.
              </p>

              {/* Donation QR Codes */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="/paypal.png" 
                    alt="PayPal QR Code" 
                    className="w-56 h-56 object-contain rounded-lg shadow cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-200" 
                    onClick={() => setZoomSrc('/paypal.png')} 
                  />
                  <button
                    onClick={() => setZoomSrc('/paypal.png')}
                    className="mt-3 inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-blue-700 border border-blue-200 rounded-md hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Donate via PayPal
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/venmo.png" 
                    alt="Venmo QR Code" 
                    className="w-56 h-56 object-contain rounded-lg shadow cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-200" 
                    onClick={() => setZoomSrc('/venmo.png')} 
                  />
                  <button
                    onClick={() => setZoomSrc('/venmo.png')}
                    className="mt-3 inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-blue-700 border border-blue-200 rounded-md hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Donate via Venmo
                  </button>
                </div>
              </div>

              {/* PayPal Giving Fund Button */}
              <div className="mb-6">
                <a 
                  href="https://www.paypal.com/fundraiser/charity/5615963" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-lg font-semibold text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FaPaypal className="text-base text-blue-600" />
                  <span>Donate via PayPal Giving Fund</span>
                </a>
              </div>

              {/* Tax Information */}
              <p className="text-xs text-gray-500 mt-6 text-center">
                One Song Foundation is a 501(c)(3) nonprofit organization. 
                All donations will be tax-deductible.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
