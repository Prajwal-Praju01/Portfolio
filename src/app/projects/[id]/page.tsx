import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projectsData } from '@/data/projects'
import ProjectDetail from '@/components/projects/ProjectDetail'

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

  return <ProjectDetail project={project} />
}
