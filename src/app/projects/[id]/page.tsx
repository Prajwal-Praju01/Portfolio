import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { projectsData } from '@/data/projects'

interface ProjectPageProps {
  params: {
    id: string
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <Section className="pt-24 pb-16">
      <Container size="md">
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-dark-600 hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
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
        </div>

        {/* Project Images */}
        {project.images && project.images.length > 0 ? (
          <div className="mb-12">
            <div className="grid grid-cols-1 gap-6">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative w-full rounded-xl overflow-hidden border border-dark-200 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Screenshot ${index + 1}`}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl aspect-video flex items-center justify-center border border-primary-300">
            <p className="text-primary-700 font-medium">Project Screenshots Coming Soon</p>
          </div>
        )}

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">Overview</h2>
          <p className="text-dark-700 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">The Problem</h2>
          <p className="text-dark-700 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-12 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">The Solution</h2>
          <p className="text-dark-700 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white border border-dark-200 rounded-lg hover:border-primary-400 transition-colors"
              >
                <span className="text-primary-600 font-bold mt-1">✓</span>
                <span className="text-dark-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-dark-200 rounded-lg p-6">
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
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-12 p-8 bg-primary-50 border border-primary-200 rounded-xl">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">Key Outcomes & Impact</h2>
          <ul className="space-y-4">
            {project.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-dark-700 text-lg pt-1">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-dark-50 rounded-lg border border-dark-200">
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
        </div>
      </Container>
    </Section>
  )
}
