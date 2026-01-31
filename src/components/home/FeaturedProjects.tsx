'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { projectsData } from '@/data/projects'

const FeaturedProjects = () => {
  return (
    <Section className="bg-dark-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Production-ready applications combining modern web technologies with AI/ML capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="bg-white rounded-xl overflow-hidden h-full border-2 border-dark-200 hover:border-primary-500 transition-all hover:shadow-2xl group relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                  
                  {/* Project Thumbnail */}
                  {project.images && project.images.length > 0 ? (
                    <div className="relative w-full h-48 bg-dark-100 overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <p className="text-primary-700 font-medium text-sm">Preview Coming Soon</p>
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-dark-600 mb-4 line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Key Outcomes */}
                    <ul className="space-y-2 mb-4">
                      {project.outcomes.slice(0, 2).map((outcome, idx) => (
                        <li key={idx} className="text-sm text-dark-700 flex items-start line-clamp-2">
                          <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.flatMap(tech => tech.items).slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                      View case study
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button variant="outline" size="lg" className="gap-2">
              View All Projects
              <ExternalLink size={20} />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}

export default FeaturedProjects
