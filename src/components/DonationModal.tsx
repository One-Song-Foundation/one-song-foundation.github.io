'use client'

import { useState } from 'react'
import { FaPaypal } from 'react-icons/fa'
import Icon from './ui/Icon'
import Button from './ui/Button'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-os-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-os-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sand-200">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 inline-flex items-center justify-center">
              <Icon name="heart" size={20} />
            </span>
            <h2 className="font-display text-2xl font-semibold text-ink-900 m-0">Make a Donation</h2>
          </div>
          <button
            onClick={onClose}
            className="text-ink-400 hover:text-ink-700 transition-colors"
            aria-label="Close"
          >
            <Icon name="x" size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {zoomSrc ? (
            <div className="flex flex-col items-center">
              <img src={zoomSrc} alt="Donation QR" className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto rounded-os-lg shadow-os-md" />
              <div className="mt-4 flex items-center gap-3">
                <Button variant="secondary" onClick={() => setZoomSrc(null)}>Back</Button>
                <a
                  href={zoomSrc || '#'}
                  download
                  className="os-btn os-btn--primary"
                >
                  Download
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Mission Statement */}
              <p className="text-ink-600 mb-8 text-center text-lg">
                Your donation helps provide financial support for mental health and addiction treatment,
                creating pathways to healing for those in need.
              </p>

              {/* Donation QR Codes */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <img
                    src="/paypal.png"
                    alt="PayPal QR Code"
                    className="w-56 h-56 object-contain rounded-os-lg shadow-os-sm cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-os-md hover:ring-2 hover:ring-amber-300"
                    onClick={() => setZoomSrc('/paypal.png')}
                  />
                  <Button variant="secondary" size="sm" className="mt-3" onClick={() => setZoomSrc('/paypal.png')}>
                    Donate via PayPal
                  </Button>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/venmo.png"
                    alt="Venmo QR Code"
                    className="w-56 h-56 object-contain rounded-os-lg shadow-os-sm cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-os-md hover:ring-2 hover:ring-amber-300"
                    onClick={() => setZoomSrc('/venmo.png')}
                  />
                  <Button variant="secondary" size="sm" className="mt-3" onClick={() => setZoomSrc('/venmo.png')}>
                    Donate via Venmo
                  </Button>
                </div>
              </div>

              {/* PayPal Giving Fund Button */}
              <div className="mb-6">
                <a
                  href="https://www.paypal.com/fundraiser/charity/5615963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="os-btn os-btn--ghost os-btn--block"
                >
                  <FaPaypal className="text-base text-green-700" />
                  <span>Donate via PayPal Giving Fund</span>
                </a>
              </div>

              {/* Tax Information */}
              <p className="text-xs text-ink-500 mt-6 text-center">
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
