'use client'

import { ArrowRight } from 'lucide-react'

export default function ContactButton() {
  return (
    <button
      onClick={() => window.open('http://schroniskoorzechowce.pl/?pageid=7', '_blank')}
      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
    >
      Wyślij wiadomość
      <ArrowRight className="w-5 h-5" />
    </button>
  )
}
