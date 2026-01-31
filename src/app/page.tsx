import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Achievements from '@/components/home/Achievements'
import Stats from '@/components/home/Stats'
import TechStack from '@/components/home/TechStack'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <Stats />
      <TechStack />
      <FeaturedProjects />
      <CTA />
    </>
  )
}
