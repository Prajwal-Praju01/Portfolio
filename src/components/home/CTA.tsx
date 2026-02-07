'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

const CTA = () => {
  return (
    <Section className="bg-gradient-to-br from-primary-600 via-purple-600 to-primary-800 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating shapes */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            💼 Open for Opportunities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
            I&apos;m actively seeking internship and entry-level opportunities where I can 
            contribute to impactful projects, work with talented teams, and continue growing as a developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="secondary" 
                size="lg" 
                className="gap-2 bg-white !text-primary-700 hover:bg-primary-50 hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
              >
                Get In Touch
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-2 border-white !text-white hover:bg-white hover:!text-primary-700 hover:scale-105 transition-all w-full sm:w-auto"
              >
                View Resume
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default CTA
