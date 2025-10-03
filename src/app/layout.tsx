import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'One Song Foundation - Supporting the Journey Back to Self Love',
  description: 'Creating pathways to healing through financial support for mental health and addiction treatment.',
  keywords: 'mental health, addiction treatment, recovery, financial support, treatment center, mental health foundation',
  authors: [{ name: 'One Song Foundation' }],
  creator: 'One Song Foundation',
  publisher: 'One Song Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onesongfoundation.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'One Song Foundation - Supporting the Journey Back to Self Love',
    description: 'Creating pathways to healing through financial support for mental health and addiction treatment.',
    url: 'https://onesongfoundation.org',
    siteName: 'One Song Foundation',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'One Song Foundation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Song Foundation - Supporting the Journey Back to Self Love',
    description: 'Creating pathways to healing through financial support for mental health and addiction treatment.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add your actual Google verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17617905689"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'AW-17617905689');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white flex flex-col`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 