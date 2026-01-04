'use client'

import { ArrowRight } from 'lucide-react'

export default function ContactButton() {
  const handleClick = () => {
    window.open('http://schroniskoorzechowce.pl/?pageid=7', '_blank')
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[56px] rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 active:bg-emerald-900 transition-colors shadow-lg hover:shadow-xl"
      style={{ cursor: 'pointer', WebkitTapHighlightColor: 'rgba(45, 122, 88, 0.3)' }}
    >
      Wyślij wiadomość
      <ArrowRight className="w-5 h-5" />
    </button>
  )
}
