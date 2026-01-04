'use client'

export default function ScrollToContactButton() {
  const handleScroll = () => {
    const element = document.getElementById('kontakt')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleScroll}
      type="button"
      className="inline-flex items-center gap-2 px-6 py-4 min-h-[56px] rounded-full border-2 border-emerald-200 dark:border-emerald-700 text-emerald-900 dark:text-emerald-100 font-semibold hover:border-emerald-300 dark:hover:border-emerald-600 bg-white/70 dark:bg-gray-800/70 transition-colors"
      style={{ cursor: 'pointer', WebkitTapHighlightColor: 'rgba(45, 122, 88, 0.3)' }}
    >
      Skontaktuj się
    </button>
  )
}
