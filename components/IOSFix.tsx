'use client'

import { useEffect } from 'react'

export default function IOSFix() {
  useEffect(() => {
    // Add passive touchstart listener to fix iOS Safari hesitation
    const handler = () => {}
    document.addEventListener('touchstart', handler, { passive: true })
    
    return () => {
      document.removeEventListener('touchstart', handler)
    }
  }, [])

  return null
}
