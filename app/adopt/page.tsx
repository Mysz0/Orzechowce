import Link from 'next/link'
import { ArrowRight, PawPrint } from 'lucide-react'
import PetGrid from '@/components/PetGrid'

export const dynamic = 'force-dynamic'

export default function AdoptPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-emerald-50/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
              <PawPrint className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Schronisko Orzechowce</h1>
              <p className="text-sm text-gray-500">Adopcje psów i kotów</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-gray-800">
            <Link href="/" className="px-3 py-2 rounded-full hover:bg-emerald-50 transition-colors">Strona główna</Link>
            <Link href="/adopt" className="px-3 py-2 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">Adopcje</Link>
            <Link 
              href="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 text-sm font-medium text-emerald-900 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
            >
              Panel administracyjny
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700/80 mb-4">Adopcje</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Znajdź swojego przyszłego przyjaciela.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Przeglądaj dostępne psy i koty. Kliknij kartę, aby zobaczyć pełny opis, temperament i status adopcji.
          </p>
        </div>
      </section>

      {/* Grid */}
      <main className="container mx-auto px-4 pb-16">
        <PetGrid />
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white/85 backdrop-blur py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-gray-900">Schronisko dla Bezdomnych Zwierząt Orzechowce</p>
            <p className="text-gray-500">Wspieraj adopcje, dziel się informacją.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="http://schroniskoorzechowce.pl" className="hover:text-emerald-800 text-gray-700 transition-colors">Strona główna</Link>
            <span className="text-gray-400">/</span>
            <Link href="http://schroniskoorzechowce.pl/?pageid=7" className="hover:text-emerald-800 text-gray-700 transition-colors">Kontakt</Link>
            <span className="text-gray-400">/</span>
            <Link href="http://schroniskoorzechowce.pl/?pageid=17" className="hover:text-emerald-800 text-gray-700 transition-colors">Pomoc</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
