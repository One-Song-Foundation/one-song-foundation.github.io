import type { Metadata } from 'next'
import { Newsreader, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
  variable: '--font-newsreader',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hanken',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
})

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
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'One Song Foundation — Supporting the journey back to self love',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Song Foundation - Supporting the Journey Back to Self Love',
    description: 'Creating pathways to healing through financial support for mental health and addiction treatment.',
    images: ['/og.png'],
  },
  themeColor: '#faf6ee',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
      <body className={`${newsreader.variable} ${hanken.variable} ${jetbrains.variable} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 