'use client'

import Link from 'next/link'
import { Briefcase, GraduationCap, Download, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import SkillBadge from '@/components/ui/SkillBadge'
import Button from '@/components/ui/Button'
import SkillsProgress from '@/components/about/SkillsProgress'
import Certifications from '@/components/about/Certifications'

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 'C', 'Java'],
  frontend: ['React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'React Router', 'Framer Motion', 'Material-UI', 'Chart.js', 'Three.js', 'React Three Fiber'],
  backend: ['Flask', 'FastAPI', 'Node.js', 'Express.js', 'Gunicorn', 'REST API', 'JWT Authentication', 'SQLAlchemy'],
  database: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL', 'Redis'],
  aiml: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'YOLOv8', 'OpenCV', 'Pandas', 'NumPy', 'Keras', 'Computer Vision', 'NLP', 'Deep Learning'],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Linux', 'Jupyter', 'Google Colab'],
  cloud: ['Render', 'Heroku', 'Railway', 'Vercel'],
}

const experience = [
  {
    title: 'Fullstack dev',
    organization: 'Defense Research Organization',
    duration: 'Sep 2025 - Nov 2025 (2 months)',
    location: 'Bangalore, India',
    description: [
      'Developed AI-powered drone surveillance system with real-time object detection using YOLOv8',
      'Implemented secure authentication and role-based access control for defense-grade applications',
      'Built analytics dashboards and automated reporting systems',
      'Collaborated with senior engineers on high-security projects',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Rajarajeswari College of Engineering',
    duration: '2022 - 2026',
    location: 'Bangalore, India',
    highlights: [
      'CGPA: 8.36/10',
      'Relevant Coursework: Data Structures, Algorithms, Web Development, Machine Learning, Database Management',
      'Final Year Project: AgroPro-AI-Powered Smart Agricultural Advisory Platform',
    ],
  },
]

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              About Me
            </h1>
            <motion.div
              className="w-20 h-1 bg-primary-600 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              A passionate Full-Stack Developer dedicated to building impactful, 
              scalable web applications that solve real-world problems.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section className="py-12">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-dark-700 leading-relaxed mb-4">
              I'm Prajwal B N, a Full-Stack Web Developer with hands-on experience in building 
              production-ready applications that combine modern web technologies with AI/ML capabilities. 
              My journey in software development has been driven by a passion for creating solutions 
              that make a real difference.
            </p>
            <p className="text-lg text-dark-700 leading-relaxed mb-4">
              With expertise spanning React-based frontends, Python backend frameworks, and AI/ML integration, 
              I've successfully delivered projects ranging from real-time drone surveillance systems to 
              healthcare platforms managing thousands of records. I thrive in environments where I can 
              learn, contribute, and build systems that scale.
            </p>
            <p className="text-lg text-dark-700 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              technologies. Whether it's implementing secure authentication systems, optimizing 
              database queries, or building intuitive user interfaces, I approach every challenge 
              with curiosity and determination.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section className="py-12 bg-dark-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-dark-900 mb-8 text-center"
            >
              Technical Skills
            </motion.h2>

            <div className="space-y-8">
              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="languages" />
                  ))}  
                </div>
              </motion.div>

              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="frontend" />
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  Backend Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="backend" />
                  ))}
                </div>
              </motion.div>

              {/* Database */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  Databases
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.database.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="database" />
                  ))}
                </div>
              </motion.div>

              {/* AI/ML */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  AI/ML & Data Science
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.aiml.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="ai" />
                  ))}
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="tools" />
                  ))}
                </div>
              </motion.div>

              {/* Cloud */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                  Cloud & Deployment
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.cloud.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="cloud" />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Progress & Certifications */}
      <Section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <SkillsProgress />
            <Certifications />
          </div>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section className="py-12">
        <Container size="md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-dark-900 mb-8 flex items-center justify-center gap-3"
          >
            <Briefcase className="text-primary-600" size={32} />
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white border-l-4 border-primary-600 p-6 rounded-r-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-900">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-dark-600 text-sm md:text-right">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-dark-700">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Education Section */}
      <Section className="py-12 bg-dark-50">
        <Container size="md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-dark-900 mb-8 flex items-center justify-center gap-3"
          >
            <GraduationCap className="text-primary-600" size={32} />
            Education
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-900">
                      {edu.degree}
                    </h3>
                    <p className="text-green-600 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-dark-600 text-sm md:text-right">
                    <p>{edu.duration}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-dark-700">
                      <span className="text-green-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What I'm Looking For */}
      <Section className="py-12">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl p-8 md:p-12 text-center hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-3xl font-bold mb-4">
              What I'm Looking For
            </h2>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              I'm actively seeking internship and entry-level opportunities where I can contribute 
              to impactful projects, collaborate with experienced teams, and continue growing as a 
              Full-Stack Developer. I'm particularly interested in roles involving modern web technologies, 
              AI/ML integration, and scalable system design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="font-medium">Full-Stack Development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="font-medium">AI/ML Integration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="font-medium">Product Development</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="gap-2 !bg-white !text-primary-700 hover:!bg-primary-50 w-full sm:w-auto"
                >
                  Get In Touch
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  <Download size={20} />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
