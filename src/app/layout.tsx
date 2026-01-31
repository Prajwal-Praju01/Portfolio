import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Prajwal B N | Full-Stack Web Developer',
    template: '%s | Prajwal B N'
  },
  description: 'Full-Stack Web Developer building scalable, production-ready web applications with AI and real-time analytics. Specializing in React, Next.js, FastAPI, and AI/ML integration.',
  keywords: ['Full-Stack Developer', 'Web Developer', 'React', 'Next.js', 'FastAPI', 'AI/ML', 'Portfolio', 'Prajwal B N'],
  authors: [{ name: 'Prajwal B N' }],
  creator: 'Prajwal B N',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prajwalbn.dev',
    title: 'Prajwal B N | Full-Stack Web Developer',
    description: 'Full-Stack Web Developer building scalable, production-ready web applications with AI and real-time analytics.',
    siteName: 'Prajwal B N Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prajwal B N | Full-Stack Web Developer',
    description: 'Full-Stack Web Developer building scalable, production-ready web applications with AI and real-time analytics.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
