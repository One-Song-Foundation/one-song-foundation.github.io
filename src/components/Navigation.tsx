'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import DonationModal from './DonationModal'
import Logo from './ui/Logo'
import Button from './ui/Button'
import Icon from './ui/Icon'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/partners', label: 'Partners' },
  { href: '/applicants', label: 'Applicants' },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container-os site-header__inner">
        <Link href="/" className="site-logo" aria-label="One Song Foundation home">
          <Logo height={38} />
        </Link>

        {/* Desktop navigation */}
        <nav className="site-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={'site-nav__link' + (pathname === link.href ? ' is-active' : '')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__cta">
          <Button variant="secondary" size="sm" href="/applicants">Get help</Button>
          <Button
            variant="accent"
            size="sm"
            iconRight={<Icon name="heart" size={15} />}
            onClick={() => setIsDonationModalOpen(true)}
          >
            Donate
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="site-header__menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="container-os">
          <nav className="site-mobile-nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={'site-nav__link' + (pathname === link.href ? ' is-active' : '')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="accent"
              block
              iconRight={<Icon name="heart" size={15} />}
              onClick={() => { setIsMobileMenuOpen(false); setIsDonationModalOpen(true) }}
            >
              Donate
            </Button>
          </nav>
        </div>
      )}

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </header>
  )
}
