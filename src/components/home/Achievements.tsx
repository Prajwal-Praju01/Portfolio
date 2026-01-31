'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Trophy, Target, Rocket, Shield } from 'lucide-react'

const achievements = [
  {
    icon: Shield,
    title: 'Defense Internship',
    description: 'Developed security-critical surveillance systems for defense applications',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'AI Innovation',
    description: 'Built 5 ML models with 93-97% accuracy for agricultural intelligence',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Production Ready',
    description: 'Shipped 3 full-stack projects with real-world impact and scalability',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Trophy,
    title: 'Tech Excellence',
    description: 'Mastered 15+ technologies across frontend, backend, and AI/ML',
    color: 'from-green-500 to-emerald-500',
  },
]

const Achievements = () => {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Key Achievements
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Highlights that demonstrate technical excellence and real-world impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="relative bg-white border-2 border-dark-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10 blur-xl`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <achievement.icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Achievements
