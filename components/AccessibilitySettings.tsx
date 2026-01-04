'use client'

import { useTheme } from '@/app/ThemeContext'
import { Moon, Sun, Contrast } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

function AccessibilitySettingsContent() {
  const { theme, contrast, toggleTheme, setContrast } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside - use click event only, not touch
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      // Use click instead of mousedown/touchstart to avoid intercepting navigation
      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        className={`p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 ${isOpen ? 'scale-105 shadow-md' : 'scale-100 shadow-sm'}`}
        title="Ustawienia ułatwień dostępu"
      >
        <Contrast className={`w-5 h-5 text-gray-700 dark:text-gray-200 transition-transform duration-200 ${isOpen ? 'rotate-6' : 'rotate-0'}`} />
      </button>

      {/* Settings Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 p-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 will-change-transform">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900 dark:text-white block">
              Motyw
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  toggleTheme()
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                  theme === 'light'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <Sun className="w-4 h-4" />
                Jasny
              </button>
              <button
                onClick={() => {
                  toggleTheme()
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <Moon className="w-4 h-4" />
                Ciemny
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900 dark:text-white block">
              Kontrast
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setContrast('normal')}
                className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  contrast === 'normal'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Normalny
              </button>
              <button
                onClick={() => setContrast('high')}
                className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  contrast === 'high'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Wysoki
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-3 text-xs text-gray-600 dark:text-gray-400">
            <p><strong>Ustawienia ułatwień dostępu</strong></p>
            <p className="mt-1">Te ustawienia będą zapisane w Twojej przeglądarce.</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default function AccessibilitySettings() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <AccessibilitySettingsContent />
}