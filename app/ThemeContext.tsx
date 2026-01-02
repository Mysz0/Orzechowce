'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type Contrast = 'normal' | 'high'

interface ThemeContextType {
  theme: Theme
  contrast: Contrast
  toggleTheme: () => void
  setContrast: (contrast: Contrast) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [contrast, setContrastState] = useState<Contrast>('normal')
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const savedContrast = localStorage.getItem('contrast') as Contrast | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'))
    setContrastState(savedContrast || 'normal')
    setMounted(true)
  }, [])

  // Apply theme and contrast to document
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    
    // Apply theme
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Apply contrast
    if (contrast === 'high') {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Save to localStorage
    localStorage.setItem('theme', theme)
    localStorage.setItem('contrast', contrast)
  }, [theme, contrast, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const setContrast = (newContrast: Contrast) => {
    setContrastState(newContrast)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, contrast, toggleTheme, setContrast }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
