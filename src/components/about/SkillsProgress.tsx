'use client'

import { motion } from 'framer-motion'

interface SkillBarProps {
  skill: string
  level: number
  color: string
}

const SkillBar = ({ skill, level, color }: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-dark-900 font-medium">{skill}</span>
        <span className="text-dark-600 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-dark-100 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full ${color}`}
        ></motion.div>
      </div>
    </div>
  )
}

const SkillsProgress = () => {
  const skills = [
    { skill: 'React & Next.js', level: 90, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { skill: 'Python (Flask/FastAPI)', level: 95, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { skill: 'TypeScript & JavaScript', level: 88, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
    { skill: 'AI/ML (PyTorch, YOLOv8)', level: 85, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { skill: 'Database Design (SQL/NoSQL)', level: 87, color: 'bg-gradient-to-r from-indigo-500 to-blue-500' },
    { skill: 'REST API & Authentication', level: 92, color: 'bg-gradient-to-r from-red-500 to-orange-500' },
  ]

  return (
    <div className="bg-white border border-dark-200 rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-dark-900 mb-6">Skill Proficiency</h3>
      {skills.map((item, index) => (
        <SkillBar key={index} {...item} />
      ))}
    </div>
  )
}

export default SkillsProgress
