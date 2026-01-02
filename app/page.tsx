import Link from 'next/link'
import { PawPrint, ArrowRight } from 'lucide-react'
import PetStrip from '@/components/PetStrip'

export const dynamic = 'force-dynamic'

export default function Home() {
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
            <Link href="/adopt" className="px-3 py-2 rounded-full hover:bg-emerald-50 transition-colors">Adopcje</Link>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700/80 mb-4">Adoptuj odpowiedzialnie</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                Zobacz psy i koty gotowe do adopcji.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-8">
              One potrzebują Twojej miłości i wsparcia. Przeglądaj listę naszych podopiecznych, poznaj ich wiek, charakter i potrzeby. Kliknij kartę, aby otworzyć pełny opis zwierzęcia.
              </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/adopt"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors shadow-sm"
              >
                Przeglądaj zwierzęta
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="http://schroniskoorzechowce.pl/?pageid=7"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-emerald-200 text-emerald-900 font-semibold hover:border-emerald-300 bg-white/70 transition-colors"
              >
                Skontaktuj się
              </a>
            </div>
          </div>

          <div className="relative bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_25px_80px_rgba(45,122,88,0.12)] p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">O schronisku</p>
                <p className="text-3xl font-semibold mt-2 text-gray-900">Schronisko dla Bezdomnych Zwierząt w Orzechowcach</p>
              </div>
              <div className="h-10 min-w-[3rem] rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-semibold uppercase tracking-wide px-3">Info</div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Jesteśmy jednostką organizacyjną Urzędu Miasta Przemyśla. Pod opieką mamy ponad 200 zwierząt. Zapewniamy bezpieczeństwo, opiekę weterynaryjną i szukamy nowych domów dla psów i kotów.</p>
              <p>Przyjmujemy zagubione lub ranne zwierzęta przekazane przez służby miejskie i Policję. Zwierzęta po przyjęciu przechodzą kwarantannę i po 14 dniach mogą trafić do adopcji.</p>
              <p>Pomóc możesz na wiele sposobów: adopcja, wolontariat, wsparcie finansowe lub rzeczowe (karma, środki higieniczne, wyposażenie). Kontakt: 37-712 Orzechowce 3, tel. 16 672 07 07 (do 15:00), e-mail: schr.orzechowce@gazeta.pl.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pet strip */}
      <section className="container mx-auto px-4 pb-14">
        <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-6">
          <PetStrip />
        </div>
      </section>

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
