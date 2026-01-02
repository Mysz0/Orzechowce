'use client'

export default function ScrollToContactButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href="#kontakt"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-emerald-200 text-emerald-900 font-semibold hover:border-emerald-300 bg-white/70 transition-colors"
    >
      Skontaktuj się
    </a>
  )
}
