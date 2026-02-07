'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

interface ProjectDetailProps {
  project: {
    id: string
    title: string
    tagline: string
    description: string
    year: string
    problem: string
    solution: string
    features: string[]
    technologies: Array<{
      category: string
      items: string[]
    }>
    outcomes: string[]
    images?: string[]
    links?: {
      github?: string
      live?: string
    }
  }
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <Section className="pt-24 pb-16">
      <Container size="md">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-dark-600 hover:text-primary-600 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full flex items-center gap-2">
              <Calendar size={14} />
              {project.year}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-dark-600 mb-6">
            {project.tagline}
          </p>

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button variant="outline" className="gap-2">
                    <Github size={20} />
                    View Source
                  </Button>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button className="gap-2">
                    <ExternalLink size={20} />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Project Images */}
        {project.images && project.images.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative w-full rounded-xl overflow-hidden border border-dark-200 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Screenshot ${index + 1}`}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl aspect-video flex items-center justify-center border border-primary-300"
          >
            <p className="text-primary-700 font-medium">Project Screenshots Coming Soon</p>
          </motion.div>
        )}

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-dark-900 mb-4">Overview</h2>
          <p className="text-dark-700 text-lg leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-dark-900 mb-4">The Problem</h2>
          <p className="text-dark-700 leading-relaxed">
            {project.problem}
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-dark-900 mb-4">The Solution</h2>
          <p className="text-dark-700 leading-relaxed">
            {project.solution}
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-dark-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white border border-dark-200 rounded-lg hover:border-primary-400 hover:shadow-md transition-all"
              >
                <span className="text-primary-600 font-bold mt-1">✓</span>
                <span className="text-dark-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-dark-900 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-dark-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-dark-900 mb-4">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-md font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-8 bg-primary-50 border border-primary-200 rounded-xl hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-bold text-dark-900 mb-6">Key Outcomes & Impact</h2>
          <ul className="space-y-4">
            {project.outcomes.map((outcome, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-dark-700 text-lg pt-1">{outcome}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 bg-dark-50 rounded-lg border border-dark-200 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-dark-900 mb-4">
            Interested in learning more?
          </h2>
          <p className="text-dark-600 mb-6">
            I'd love to discuss this project in detail and share insights about the development process.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Get In Touch
              <ArrowLeft size={20} className="rotate-180" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
