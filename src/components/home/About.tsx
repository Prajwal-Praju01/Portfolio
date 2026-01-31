'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const About = () => {
  const highlights = [
    {
      number: '3+',
      label: 'Production Projects',
      description: 'Deployed and maintained',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: '15+',
      label: 'Technologies',
      description: 'Across full-stack',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: '95%',
      label: 'ML Accuracy',
      description: 'Model performance',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-dark-700 text-lg leading-relaxed mb-4">
              I'm a Full-Stack Web Developer with hands-on experience in React-based frontends, 
              Python backend frameworks, secure authentication, and AI-powered systems. 
              I enjoy building real-world applications that solve meaningful problems.
            </p>
            <p className="text-dark-600 leading-relaxed">
              My journey in software development has been driven by curiosity and a passion for 
              creating impactful solutions. From implementing real-time drone surveillance systems 
              to building healthcare platforms managing thousands of records, I focus on writing 
              clean, maintainable code that scales.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="text-center p-6 bg-white rounded-xl border-2 border-dark-200 hover:border-transparent hover:shadow-2xl transition-all hover:-translate-y-2">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-xl`}></div>
                  
                  <div className={`text-5xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-2`}>
                    {item.number}
                  </div>
                  <div className="text-lg font-semibold text-dark-900 mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-dark-600">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
