'use client'

import Link from 'next/link'
import { Mail, Linkedin, Github, MapPin, Phone, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import ContactForm from '@/components/contact/ContactForm'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'prajwalpraju4539@gmail.com',
    href: 'mailto:prajwalpraju4539@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 82964 53928',
    href: 'tel:+918296453928',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/prajwal-bn-2a81202b6',
    href: 'https://www.linkedin.com/in/prajwal-bn-2a81202b6',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Prajwal-Praju01',
    href: 'https://github.com/Prajwal-Praju01',
  },
]

export default function ContactPageContent() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <Container size="md">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Let's Connect
            </h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Have a project in mind or looking for a developer? I'd love to hear from you. 
              Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-dark-700 mb-8 leading-relaxed">
                I'm currently open to internship and entry-level opportunities in Full-Stack Development. 
                Whether you have a question, want to discuss a project, or just want to connect, 
                feel free to reach out through any of the channels below.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                    className="flex items-start gap-4 p-4 bg-white border border-dark-200 rounded-lg hover:border-primary-400 hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      <contact.icon size={24} />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-dark-600 mb-1">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-dark-900 hover:text-primary-600 transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-dark-900 font-medium">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="relative flex h-3 w-3 mt-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900 mb-1">
                      Available for opportunities
                    </p>
                    <p className="text-sm text-green-700">
                      I'm currently seeking internship and entry-level roles. 
                      I typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white border border-dark-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-dark-900 mb-6">
                  Send Me a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Quick Links Section */}
      <Section className="py-12 bg-dark-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-dark-900 mb-6">
              Prefer Social Media?
            </h2>
            <p className="text-dark-600 mb-8">
              Connect with me on your preferred platform. I'm active on LinkedIn and GitHub.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                href="https://www.linkedin.com/in/prajwal-bn-2a81202b6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-dark-200 rounded-lg hover:border-primary-500 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <Linkedin size={24} className="text-[#0A66C2]" />
                <span className="font-medium text-dark-900">Connect on LinkedIn</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                href="https://github.com/Prajwal-Praju01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-dark-200 rounded-lg hover:border-primary-500 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <Github size={24} className="text-dark-900" />
                <span className="font-medium text-dark-900">Follow on GitHub</span>
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-6 border-t border-dark-200"
            >
              <p className="text-dark-700 mb-4 font-medium">
                Want to see my complete background and experience?
              </p>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-xl font-semibold">
                  <Download size={24} />
                  <span>Download My Resume</span>
                </button>
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
