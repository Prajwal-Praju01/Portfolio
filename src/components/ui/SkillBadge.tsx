'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  skill: string
  category?: string
}

const SkillBadge = ({ skill, category }: SkillBadgeProps) => {
  const categoryColors = {
    frontend: 'bg-blue-100 text-blue-800 border-blue-200',
    backend: 'bg-green-100 text-green-800 border-green-200',
    database: 'bg-purple-100 text-purple-800 border-purple-200',
    ai: 'bg-orange-100 text-orange-800 border-orange-200',
    tools: 'bg-gray-100 text-gray-800 border-gray-200',
    default: 'bg-primary-100 text-primary-800 border-primary-200',
  }

  const colorClass = category 
    ? categoryColors[category as keyof typeof categoryColors] || categoryColors.default
    : categoryColors.default

  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${colorClass}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {skill}
    </motion.span>
  )
}

export default SkillBadge
