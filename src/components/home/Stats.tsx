'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Code2, GitBranch, Award, Zap } from 'lucide-react'

const stats = [
  {
    icon: Code2,
    value: 15000,
    suffix: '+',
    label: 'Lines of Code',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: GitBranch,
    value: 50,
    suffix: '+',
    label: 'GitHub Commits',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Award,
    value: 3,
    suffix: '',
    label: 'Production Projects',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Zap,
    value: 95,
    suffix: '%',
    label: 'Code Quality',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <Section className="bg-gradient-to-br from-dark-900 via-primary-900 to-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            By The Numbers
          </h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Measurable impact through code, collaboration, and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <div className={`${stat.bgColor} ${stat.color} w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center`}>
                <stat.icon size={32} />
              </div>
              <div className="mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-primary-200 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Stats
