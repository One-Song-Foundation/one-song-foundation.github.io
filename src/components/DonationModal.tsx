'use client'

import { useState } from 'react'
import { FaTimes, FaHeart } from 'react-icons/fa'

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
                    className="w-56 h-56 object-contain rounded-lg shadow cursor-pointer" 
                    onClick={() => setZoomSrc('/paypal.png')} 
                  />
                  <button
                    onClick={() => setZoomSrc('/paypal.png')}
                    className="mt-3 text-sm font-medium text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                  >
                    PayPal
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/venmo.png" 
                    alt="Venmo QR Code" 
                    className="w-56 h-56 object-contain rounded-lg shadow cursor-pointer" 
                    onClick={() => setZoomSrc('/venmo.png')} 
                  />
                  <button
                    onClick={() => setZoomSrc('/venmo.png')}
                    className="mt-3 text-sm font-medium text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                  >
                    Venmo
                  </button>
                </div>
              </div>

              {/* Tax Information */}
              <p className="text-xs text-gray-500 mt-6 text-center">
                One Song Foundation is a 501(c)(3) nonprofit organization. 
                Your donation may be tax-deductible.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
