'use client'

import { useEffect } from 'react'

export default function ScrollReveal({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-4', 'duration-700')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const element = document.querySelector(`[data-scroll-reveal]`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div data-scroll-reveal className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}
