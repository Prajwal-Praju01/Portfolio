'use client'

import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'

const Hero = () => {
  return (
    <Section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary-50 via-white to-dark-50 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Open to internships and full-time roles
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-dark-900 mb-6 leading-tight"
          >
            Full-Stack Developer building{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              scalable, production-ready
            </span>{' '}
            web applications
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-dark-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Specializing in <span className="font-semibold text-primary-600">AI-powered systems</span>, 
            {' '}<span className="font-semibold text-purple-600">real-time analytics</span>, and 
            {' '}<span className="font-semibold text-cyan-600">secure authentication</span>. 
            Combining React-based frontends with Python backend frameworks to solve meaningful problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/projects">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                View My Projects
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                <Download size={20} />
                Download Resume
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="https://github.com/Prajwal-Praju01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-dark-200 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-all hover:shadow-md"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/prajwal-bn-2a81202b6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-dark-200 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-all hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:prajwalpraju4539@gmail.com"
              className="p-3 bg-white border border-dark-200 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-all hover:shadow-md"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
