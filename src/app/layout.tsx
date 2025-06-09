import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'One Song Foundation - From Despair to Song',
  description: 'Creating pathways to healing through financial support for mental health and addiction treatment.',
  openGraph: {
    title: 'One Song Foundation - From Despair to Song',
    description: 'Creating pathways to healing through financial support for mental health and addiction treatment.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'One Song Foundation Logo',
      },
    ],
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