import type { Metadata } from 'next'
import AboutPageContent from '@/components/about/AboutPageContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Prajwal B N, a Full-Stack Web Developer with expertise in React, Next.js, FastAPI, and AI/ML integration.',
}

export default function AboutPage() {
  return <AboutPageContent />
}
