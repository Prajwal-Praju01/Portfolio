import type { Metadata } from 'next'
import ContactPageContent from '@/components/contact/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Prajwal B N for opportunities, collaborations, or just to say hello.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
