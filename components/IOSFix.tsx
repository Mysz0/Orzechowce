'use client'

import { useEffect } from 'react'

export default function IOSFix() {
  useEffect(() => {
    // Comprehensive iOS Safari touch event fixes
    const touchHandler = () => {}
    document.addEventListener('touchstart', touchHandler, { passive: true })
    
    // Remove hover states on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      document.documentElement.classList.add('touch-device')
    }
    
    // Fix double-tap zoom on buttons and links
    const style = document.createElement('style')
    style.textContent = `
      .touch-device * {
        touch-action: manipulation !important;
      }
      button, a, [role="button"] {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.removeEventListener('touchstart', touchHandler)
      document.head.removeChild(style)
    }
  }, [])

  return null
}
