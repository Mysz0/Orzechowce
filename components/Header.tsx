'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PawPrint } from 'lucide-react'
import AccessibilitySettings from './AccessibilitySettings'

interface HeaderProps {
  currentPage?: 'home' | 'adopt' | 'ankieta' | '1-5-procent' | 'lektura'
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-white/85 dark:bg-gray-900/85 border-b border-emerald-50/60 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-3">
        <button 
          onClick={() => router.push('/')}
          type="button"
          className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
          style={{ cursor: 'pointer', WebkitTapHighlightColor: 'rgba(45, 122, 88, 0.3)', background: 'transparent', border: 'none', padding: 0 }}
        >
          <div className="h-10 w-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center" style={{ pointerEvents: 'none' }}>
            <PawPrint className="w-5 h-5" />
          </div>
          <div className="text-left" style={{ pointerEvents: 'none' }}>
            <h1 className="text-base md:text-xl font-semibold text-gray-900 dark:text-white">Schronisko Orzechowce</h1>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Adopcje psów i kotów</p>
          </div>
        </button>
        <nav className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200">
          <button 
            onClick={() => router.push('/')}
            type="button"
            className={`px-2 md:px-3 py-2 rounded-full transition-colors ${
              currentPage === 'home' 
                ? 'text-emerald-700 dark:text-emerald-400 font-semibold' 
                : 'hover:text-emerald-700 dark:hover:text-emerald-400'
            }`}
            style={{ cursor: 'pointer', WebkitTapHighlightColor: 'rgba(45, 122, 88, 0.3)', background: 'transparent', border: 'none' }}
          >
            Strona główna
          </button>
          <button 
            onClick={() => router.push('/adopt')}
            type="button"
            className={`px-2 md:px-3 py-2 rounded-full transition-colors ${
              currentPage === 'adopt' 
                ? 'text-emerald-700 dark:text-emerald-400 font-semibold' 
                : 'hover:text-emerald-700 dark:hover:text-emerald-400'
            }`}
            style={{ cursor: 'pointer', WebkitTapHighlightColor: 'rgba(45, 122, 88, 0.3)', background: 'transparent', border: 'none' }}
          >
            Adopcje
          </button>
          <AccessibilitySettings />
        </nav>
      </div>
    </header>
  )
}
