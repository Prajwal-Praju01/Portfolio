'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

const certifications = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Online Learning Platform',
    year: '2024',
    skills: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    year: '2024',
    skills: ['PyTorch', 'Deep Learning', 'Computer Vision'],
  },
  {
    title: 'Advanced JavaScript & TypeScript',
    issuer: 'Udemy',
    year: '2023',
    skills: ['TypeScript', 'ES6+', 'Async Programming'],
  },
]

const Certifications = () => {
  return (
    <div className="bg-white border border-dark-200 rounded-xl p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Award className="text-primary-600" size={28} />
        <h3 className="text-2xl font-bold text-dark-900">Certifications & Learning</h3>
      </div>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="border-l-4 border-primary-500 pl-4 py-2 hover:bg-primary-50 transition-colors rounded-r-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-dark-900 mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-dark-600 mb-2">
                  {cert.issuer} • {cert.year}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
