'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const techCategories = [
  {
    category: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    color: 'from-green-500 to-emerald-500',
    techs: ['Python', 'Flask', 'FastAPI', 'Node.js', 'REST API'],
  },
  {
    category: 'AI/ML',
    color: 'from-purple-500 to-pink-500',
    techs: ['PyTorch', 'YOLOv8', 'XGBoost', 'OpenCV', 'Scikit-learn'],
  },
  {
    category: 'Database',
    color: 'from-orange-500 to-red-500',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'SQLite'],
  },
]

const TechStack = () => {
  return (
    <Section className="bg-dark-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Modern technologies I use to build powerful, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 border border-dark-200 hover:shadow-xl transition-all hover:border-transparent"
            >
              <div className={`bg-gradient-to-br ${category.color} text-white text-sm font-bold px-4 py-2 rounded-lg inline-block mb-4`}>
                {category.category}
              </div>
              <ul className="space-y-2">
                {category.techs.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-dark-700">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.color}`}></span>
                    <span className="font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default TechStack
