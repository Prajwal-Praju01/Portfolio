import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import Container from '@/components/ui/Container'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Prajwal-Praju01', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prajwal-bn-2a81202b6', icon: Linkedin },
    { name: 'Email', href: 'mailto:prajwalpraju4539@gmail.com', icon: Mail },
  ]

  return (
    <footer className="bg-dark-900 text-dark-100 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white hover:text-primary-400 transition-colors">
              <span className="font-mono">{'<'}PBN{' />'}</span>
            </Link>
            <p className="mt-3 text-sm text-dark-400">
              Building scalable, production-ready web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-dark-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-dark-800 text-center text-sm text-dark-400">
          <p>© {currentYear} Prajwal B N. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
