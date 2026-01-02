import Link from 'next/link'
import { ArrowLeft, Heart, FileText } from 'lucide-react'
import ContactButton from '@/components/ContactButton'

export default function OneFivePercentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-xl group-hover:bg-emerald-800 transition-colors">
                S
              </div>
              <div>
                <p className="font-semibold text-gray-900">Schronisko Orzechowce</p>
                <p className="text-xs text-gray-600">1,5% dla Schroniska</p>
              </div>
            </Link>
            <ContactButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót do strony głównej
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_25px_80px_rgba(45,122,88,0.12)] p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  1,5% dla Schroniska
                </h1>
                <p className="text-emerald-700 font-medium">Przekaż 1,5% podatku i pomóż zwierzętom</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Z radością informujemy, że <strong>Stowarzyszenie "Kudłate serce"</strong> uzyskało możliwość pozyskiwania 1,5% podatku dochodowego na rzecz OPP. Zapamiętajcie nasz KRS, który powinniście wpisać w swoich zeznaniach podatkowych.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wspierając "Kudłate serce" macie pewność, że każda złotówka czy rzecz materialna trafi tam gdzie powinna, czyli do Schroniska w Orzechowcach. Obszar zainteresowań członków Stowarzyszenia opiera się jedynie na pomocy tzw. Orzeszkom.
              </p>
            </div>
          </div>

          {/* How to donate section */}
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-emerald-700" />
              <h2 className="text-2xl font-bold text-gray-900">Jak przekazać 1,5% podatku?</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-sm font-bold">1</span>
                  Wypełnij zeznanie podatkowe PIT
                </h3>
                <p className="text-gray-700 ml-10">
                  W formularzu PIT znajdź sekcję dotyczącą przekazania 1,5% podatku na organizację pożytku publicznego (OPP).
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-sm font-bold">2</span>
                  Wpisz nasz numer KRS
                </h3>
                <p className="text-gray-700 ml-10 mb-3">
                  W odpowiednim polu wpisz numer KRS Stowarzyszenia "Kudłate serce":
                </p>
                <div className="ml-10 bg-white rounded-xl p-4 border-2 border-emerald-200">
                  <p className="text-2xl font-bold text-emerald-700 text-center tracking-wide">
                    KRS 0000644790
                  </p>
                </div>
                <div className="ml-10 mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-sm text-amber-900 font-medium">
                    ⚠️ Wpisanie poprawnego KRS jest bardzo ważne! Błędny numer nie pomoże zwierzakom ze Schroniska w Orzechowcach. Należy pamiętać, że w formularzach PIT często są już wpisane gotowe numery KRS. Sprawdźcie dokładnie swoje PIT-y!
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-sm font-bold">3</span>
                  Złóż zeznanie
                </h3>
                <p className="text-gray-700 ml-10">
                  Wyślij zeznanie podatkowe do urzędu skarbowego. Twoje 1,5% trafi automatycznie do naszego schroniska!
                </p>
              </div>
            </div>
          </div>

          {/* What we achieved */}
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Co udało się osiągnąć dzięki Waszej hojności?</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Do tej pory mogliśmy zapewnić specjalistyczne badania i leczenie zwierzętom schorowanym, starszym i wymagającym szczególnej troski. Zakupiliśmy między innymi:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Tabletki i środki na kompleksowe odrobaczanie, odkleszczanie i odpchlanie wszystkich psów i kotów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Leki i suplementy wspomagające serce, wątrobę, nerki, trzustkę oraz dla psów dużych ras z problemami ze stawami</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Specjalistyczną karmę dietetyczną dla psów otyłych, z wrażliwym układem pokarmowym i alergiami</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Kilkaset kilogramów karmy suchej i mokrej dla psów, kotów, szczeniąt i kociąt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Wyposażenie: wagę, klatki wiklinowe dla kotów, kastry, baseniki, materiały do remontów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Budy dla psów, domki, legowiska i drapaki do małej kociarni, zadaszenie boksów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Wyposażenie powstającego schroniskowego ambulatorium oraz remont kuchni</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important info */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 p-8 md:p-12 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ważne informacje</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Przekazanie 1,5% podatku <strong>nic Cię nie kosztuje</strong> – to część podatku, który i tak musisz zapłacić.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Możesz przekazać 1,5% nawet jeśli nie masz zobowiązania podatkowego do zapłaty.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Każda złotówka trafia bezpośrednio na utrzymanie schroniska, opiekę weterynaryjną i wyposażenie dla zwierząt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Możesz rozliczać się samodzielnie lub przez biuro rachunkowe – oba sposoby są równie proste.</span>
              </li>
            </ul>
          </div>

          {/* Bank account */}
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Możesz również wesprzeć nas wpłatą bezpośrednią</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Tylko dzięki wspólnemu zaangażowaniu Stowarzyszenie "Kudłate serce" będzie mogło w pełni rozwinąć skrzydła i jeszcze skuteczniej pomagać orzechowskim bezdomniakom.
            </p>
            
            <div className="bg-emerald-50 rounded-xl p-6 space-y-3">
              <p className="font-semibold text-gray-900">Stowarzyszenie "Kudłate serce"</p>
              <p className="text-gray-700"><span className="font-medium">KRS:</span> 0000644790</p>
              <p className="text-gray-700"><span className="font-medium">Nr konta:</span> 82 1750 0012 0000 0000 3545 9887</p>
              <div className="border-t border-emerald-200 pt-3 mt-3">
                <p className="text-sm text-gray-600 mb-2">Dane do wpłat zagranicznych / Donations from other countries:</p>
                <p className="text-gray-700"><span className="font-medium">BIC (SWIFT):</span> RCBWPLPW</p>
                <p className="text-gray-700"><span className="font-medium">IBAN:</span> PL 82 1750 0012 0000 0000 3545 9887</p>
              </div>
            </div>
          </div>

          {/* Thank you note */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-medium mb-2">
              Dziękujemy wszystkim ludziom o "kudłatych sercach" za wsparcie!
            </p>
            <p className="text-gray-600 italic">
              Dzięki Wam nasza pomoc jest realna, ponieważ zebrane środki wykorzystujemy jak najrozsądniej na najpilniejsze i nie cierpiące zwłoki potrzeby. Bądźcie z nami nadal! ❤️
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
