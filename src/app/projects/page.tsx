'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { projectsData } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <Section className="pt-24 pb-16">
      <Container>
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            My Projects
          </h1>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-lg text-dark-600">
            Production-ready applications showcasing full-stack development, AI/ML integration, 
            and real-world problem-solving capabilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl overflow-hidden border-2 border-dark-200 hover:border-primary-500 transition-all hover:shadow-2xl h-full flex flex-col hover:-translate-y-2 duration-300">
                  {/* Project Thumbnail */}
                  {project.images && project.images.length > 0 ? (
                    <div className="relative w-full h-48 bg-dark-100 overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <p className="text-primary-700 font-medium text-sm">No Preview Available</p>
                    </div>
                  )}
                
                <div className="p-8 flex flex-col flex-grow">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h2>

                {/* Tagline */}
                <p className="text-dark-600 mb-4 font-medium">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-dark-600 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Key Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-dark-900 mb-2">
                    Key Technologies:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.flatMap((tech) => tech.items).slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Outcomes Preview */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-dark-900 mb-2">
                    Key Outcomes:
                  </h3>
                  <ul className="space-y-1">
                    {project.outcomes.slice(0, 3).map((outcome, idx) => (
                      <li key={idx} className="text-sm text-dark-700 flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                  {/* View Details Link */}
                  <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    View full case study
                    <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center p-8 bg-dark-50 rounded-lg border-2 border-dashed border-dark-300 hover:border-primary-400 hover:bg-primary-50/50 transition-all duration-300"
        >
          <p className="text-dark-600 text-lg">
            More projects coming soon! I'm constantly working on new ideas and solutions.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
