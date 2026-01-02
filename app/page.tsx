import Link from 'next/link'
import { PawPrint, ArrowRight } from 'lucide-react'
import PetStrip from '@/components/PetStrip'
import ContactButton from '@/components/ContactButton'
import ScrollToContactButton from '@/components/ScrollToContactButton'

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
              <ScrollToContactButton />
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
              <p>Pomóc możesz na wiele sposobów: adopcja, wolontariat, wsparcie finansowe lub rzeczowe (karma, środki higieniczne, wyposażenie).</p>
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

      {/* Information Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* 1.5% Card */}
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-emerald-100">
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=400&fit=crop" 
                alt="1.5% dla Schroniska"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">1,5% dla Schroniska</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Przekaż 1,5% podatku dla Stowarzyszenia "Kudłate serce". KRS: 0000644790. Dziękujemy za każdą pomoc!
            </p>
            <Link
              href="/1-5-procent"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors"
            >
              Czytaj więcej
            </Link>
          </div>

          {/* Adoption Questionnaire Card */}
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-emerald-100">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop" 
                alt="Adopcje zwierząt"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Adopcje zwierząt</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dowiedz się jak wygląda proces adopcji i czego się spodziewać. Ankieta adopcyjna czeka w schronisku.
            </p>
            <Link
              href="/ankieta"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors"
            >
              Czytaj więcej
            </Link>
          </div>

          {/* Required Reading Card */}
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-emerald-100">
              <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop" 
                alt="Warunki adopcji"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Warunki adopcji</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Poznaj przepisy i regulacje dotyczące ochrony zwierząt oraz obowiązki właścicieli.
            </p>
            <Link
              href="/lektura"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors"
            >
              Czytaj więcej
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="relative py-16 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Masz pytania lub sugestie?</h2>
              <p className="text-lg text-gray-600">Schronisko dla bezdomnych zwierząt w Orzechowcach</p>
            </div>

            <div className="bg-white/95 backdrop-blur rounded-3xl shadow-[0_25px_80px_rgba(45,122,88,0.15)] p-8 md:p-10 space-y-8 animate-in zoom-in-95 duration-500" style={{ animationDelay: '100ms' }}>
              {/* Address & Hours */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Adres</p>
                  <p className="text-xl font-semibold text-gray-900">37-712 Orzechowce 3</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Kontakt</p>
                  <p className="text-lg text-gray-800">tel. 16 672 07 07 <span className="text-gray-500">(codziennie do godziny 15:00)</span></p>
                  <p className="text-lg text-gray-800">e-mail: <a href="mailto:schr.orzechowce@gazeta.pl" className="text-emerald-700 hover:text-emerald-800 transition-colors">schr.orzechowce@gazeta.pl</a></p>
                </div>
              </div>

              <div className="border-t border-emerald-100 pt-8">
                <ContactButton />
              </div>

              <div className="border-t border-emerald-100 pt-8 space-y-4">
                <p className="text-sm text-gray-700 font-medium">Chcecie pomóc naszym zwierzakom? Prosimy o wpłaty na nasze konto:</p>
                <div className="bg-emerald-50 rounded-xl p-4 space-y-2 text-sm">
                  <p className="text-gray-700"><span className="font-medium">Getin Noble Bank Nr konta:</span> 19 1560 0013 2180 9456 5000 0001</p>
                  <p className="text-gray-700"><span className="font-medium">kod BIC (SWIFT):</span> GBGCPLPK <span className="font-medium">IBAN:</span> PL 19 1560 0013 2180 9456 5000 0001</p>
                </div>
              </div>

              <div className="border-t border-emerald-100 pt-8 space-y-4">
                <p className="text-sm font-medium text-gray-900">Jak do nas dojechać?</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Schronisko jest położone pośród pól między miejscowościami Orły i Orzechowce. Bez wspomagania to skład do nas dotrzeć - punktem orientacyjnym powinny być wiatraki.
                </p>
                <div className="rounded-xl overflow-hidden border border-emerald-200 shadow-lg">
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

              <div className="border-t border-emerald-100 pt-8">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Wydawanie zwierząt odbywa się codziennie, tj. wraz robocze oraz weekendy w godzinach od 9.00 do 17.00, w dni świąteczne jedynie po telefonicznym lub osobistym uzgodnieniu. W innych godzinach niż podane w przypadku zdłożenia się właściciela po telefonicznym lub osobistym uzgodnieniu oraz udokumentowaniu własności zwierzęcia. Obowiązuje posiadanie umowy adopcyjnej.
                </p>
              </div>
            </div>
          </div>
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
