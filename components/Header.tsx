'use client'

import Link from 'next/link'
import { PawPrint } from 'lucide-react'
import AccessibilitySettings from './AccessibilitySettings'

interface HeaderProps {
  currentPage?: 'home' | 'adopt' | 'ankieta' | '1-5-procent' | 'lektura'
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/85 dark:bg-gray-900/85 backdrop-blur border-b border-emerald-50/60 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
            <PawPrint className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base md:text-xl font-semibold text-gray-900 dark:text-white">Schronisko Orzechowce</h1>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Adopcje psów i kotów</p>
          </div>
        </Link>
        <nav className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200">
          <a 
            href="/"
            className={`px-2 md:px-3 py-2 rounded-full ${
              currentPage === 'home' 
                ? 'bg-emerald-50 dark:bg-gray-800 text-emerald-900 dark:text-emerald-400' 
                : ''
            }`}
          >
            Strona główna
          </a>
          <a 
            href="/adopt"
            className={`px-2 md:px-3 py-2 rounded-full ${
              currentPage === 'adopt' 
                ? 'bg-emerald-50 dark:bg-gray-800 text-emerald-900 dark:text-emerald-400' 
                : ''
            }`}
          >
            Adopcje
          </a>
          <AccessibilitySettings />
        </nav>
      </div>
    </header>
  )
}
