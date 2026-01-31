'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Container size="sm">
        <div className="text-center">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          
          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg text-dark-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. 
            It might have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="gap-2">
                <Home size={20} />
                Go Home
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={20} />
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
