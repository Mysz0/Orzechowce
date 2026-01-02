import Link from 'next/link'
import { ArrowRight, PawPrint } from 'lucide-react'
import PetGrid from '@/components/PetGrid'
import ContactButton from '@/components/ContactButton'
import Header from '@/components/Header'

export const dynamic = 'force-dynamic'

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header currentPage="adopt" />

      {/* Hero */}
      <section className="relative overflow-hidden py-14 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700/80 dark:text-emerald-400/80 mb-4">Adopcje</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-tight mb-4">
            Znajdź swojego przyszłego przyjaciela.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-8">
            Przeglądaj dostępne psy i koty. Kliknij kartę, aby zobaczyć pełny opis, temperament i status adopcji.
          </p>
        </div>
      </section>

      {/* Grid */}
      <main className="container mx-auto px-4 pb-16 bg-white dark:bg-gray-950">
        <PetGrid />
      </main>

      {/* Contact Section */}
      <section id="kontakt" className="relative py-16 overflow-hidden scroll-mt-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">Masz pytania lub sugestie?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Schronisko dla bezdomnych zwierząt w Orzechowcach</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 md:p-10 space-y-8 animate-in zoom-in-95 duration-500" style={{ animationDelay: '100ms' }}>
              {/* Address & Hours */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Adres</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">37-712 Orzechowce 3</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Kontakt</p>
                  <p className="text-lg text-gray-800 dark:text-gray-200">tel. 16 672 07 07 <span className="text-gray-500 dark:text-gray-400">(codziennie do godziny 15:00)</span></p>
                  <p className="text-lg text-gray-800 dark:text-gray-200">e-mail: <a href="mailto:schr.orzechowce@gazeta.pl" className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors">schr.orzechowce@gazeta.pl</a></p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <ContactButton />
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 space-y-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Chcecie pomóc naszym zwierzakom? Prosimy o wpłaty na nasze konto:</p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 space-y-2 text-sm">
                  <p className="text-gray-700 dark:text-gray-200"><span className="font-medium">Getin Noble Bank Nr konta:</span> 19 1560 0013 2180 9456 5000 0001</p>
                  <p className="text-gray-700 dark:text-gray-200"><span className="font-medium">kod BIC (SWIFT):</span> GBGCPLPK <span className="font-medium">IBAN:</span> PL 19 1560 0013 2180 9456 5000 0001</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 space-y-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Jak do nas dojechać?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Schronisko jest położone pośród pól między miejscowościami Orły i Orzechowce. Bez wspomagania to skład do nas dotrzeć - punktem orientacyjnym powinny być wiatraki.
                </p>
                <div className="rounded-xl overflow-hidden border border-emerald-200 dark:border-gray-600 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.8!2d22.788734!3d49.86141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDUxJzQxLjEiTiAyMsKwNDcnMTkuNCJF!5e0!3m2!1spl!2spl!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Schroniska Orzechowce"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Wydawanie zwierząt odbywa się codziennie, tj. wraz robocze oraz weekendy w godzinach od 9.00 do 17.00, w dni świąteczne jedynie po telefonicznym lub osobistym uzgodnieniu. W innych godzinach niż podane w przypadku zdłożenia się właściciela po telefonicznym lub osobistym uzgodnieniu oraz udokumentowaniu własności zwierzęcia. Obowiązuje posiadanie umowy adopcyjnej.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-100 dark:border-gray-800 bg-white/85 dark:bg-gray-900/85 backdrop-blur py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Schronisko dla Bezdomnych Zwierząt Orzechowce</p>
            <p className="text-gray-500 dark:text-gray-400">Wspieraj adopcje, dziel się informacją.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="http://schroniskoorzechowce.pl" className="hover:text-emerald-800 dark:hover:text-emerald-400 text-gray-700 dark:text-gray-300 transition-colors">Strona główna</Link>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <Link href="http://schroniskoorzechowce.pl/?pageid=7" className="hover:text-emerald-800 dark:hover:text-emerald-400 text-gray-700 dark:text-gray-300 transition-colors">Kontakt</Link>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <Link href="http://schroniskoorzechowce.pl/?pageid=17" className="hover:text-emerald-800 dark:hover:text-emerald-400 text-gray-700 dark:text-gray-300 transition-colors">Pomoc</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
