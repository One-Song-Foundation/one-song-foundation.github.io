import Link from 'next/link'
import Logo from './ui/Logo'
import Icon from './ui/Icon'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-os site-footer__inner">
        <div className="site-footer__brand">
          <Logo tone="light" height={40} />
          <p>
            A unifying thread of love and truth beneath all things. We bridge the gap between
            insurance and the care that makes lasting recovery possible.
          </p>
          <div className="site-footer__social">
            <a href="mailto:chris@onesongfoundation.org" aria-label="Email"><Icon name="mail" size={18} /></a>
            <a href="tel:+14083209319" aria-label="Phone"><Icon name="phone" size={18} /></a>
          </div>
        </div>
        <div className="site-footer__cols">
          <div>
            <h4>Foundation</h4>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/partners">Partners</Link>
          </div>
          <div>
            <h4>Get help</h4>
            <Link href="/applicants">Apply for support</Link>
            <Link href="/partners">Find treatment</Link>
          </div>
          <div>
            <h4>Give</h4>
            <a href="https://www.paypal.com/fundraiser/charity/5615963" target="_blank" rel="noopener noreferrer">Donate</a>
            <a href="mailto:partnerships@onesongfoundation.org">Partner with us</a>
          </div>
        </div>
      </div>
      <div className="container-os site-footer__legal">
        <span>&copy; {new Date().getFullYear()} One Song Foundation &middot; 501(c)(3) nonprofit &middot; Founded in California</span>
        <span>If you&apos;re in crisis, call or text <strong>988</strong>.</span>
      </div>
    </footer>
  )
}
