'use client'

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
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
          {/* Mission Statement */}
          <p className="text-gray-700 mb-8 text-center text-lg">
            Your donation helps provide financial support for mental health and addiction treatment, 
            creating pathways to healing for those in need.
          </p>

          {/* Donation Buttons */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <img src="/paypal.png" alt="PayPal QR Code" className="w-56 h-56 object-contain rounded-lg shadow" />
              <span className="mt-3 text-sm font-medium text-gray-700">PayPal</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/venmo.png" alt="Venmo QR Code" className="w-56 h-56 object-contain rounded-lg shadow" />
              <span className="mt-3 text-sm font-medium text-gray-700">Venmo</span>
            </div>
          </div>

          {/* Tax Information */}
          <p className="text-xs text-gray-500 mt-6 text-center">
            One Song Foundation is a 501(c)(3) nonprofit organization. 
            Your donation may be tax-deductible.
          </p>
        </div>
      </div>
    </div>
  )
}
