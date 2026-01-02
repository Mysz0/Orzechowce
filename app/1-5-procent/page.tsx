import Link from 'next/link'
import { ArrowLeft, Heart, FileText } from 'lucide-react'
import ContactButton from '@/components/ContactButton'
import Header from '@/components/Header'

export default function OneFivePercentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Header currentPage="1-5-procent" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót do strony głównej
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="surface-hero p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold heading-strong">
                  1,5% dla Schroniska
                </h1>
                <p className="text-emerald-700 dark:text-emerald-400 font-medium">Przekaż 1,5% podatku i pomóż zwierzętom</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-soft leading-relaxed mb-4">
                Z radością informujemy, że <strong>Stowarzyszenie "Kudłate serce"</strong> uzyskało możliwość pozyskiwania 1,5% podatku dochodowego na rzecz OPP. Zapamiętajcie nasz KRS, który powinniście wpisać w swoich zeznaniach podatkowych.
              </p>
              <p className="text-soft leading-relaxed">
                Wspierając "Kudłate serce" macie pewność, że każda złotówka czy rzecz materialna trafi tam gdzie powinna, czyli do Schroniska w Orzechowcach. Obszar zainteresowań członków Stowarzyszenia opiera się jedynie na pomocy tzw. Orzeszkom.
              </p>
            </div>
          </div>

          {/* How to donate section */}
          <div className="surface-section p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
              <h2 className="text-2xl font-bold heading-strong">Jak przekazać 1,5% podatku?</h2>
            </div>

            <div className="space-y-6">
              <div className="panel-emerald">
                <h3 className="font-semibold heading-strong mb-3 flex items-center gap-2">
                  <span className="number-badge">1</span>
                  Wypełnij zeznanie podatkowe PIT
                </h3>
                <p className="text-soft ml-10">
                  W formularzu PIT znajdź sekcję dotyczącą przekazania 1,5% podatku na organizację pożytku publicznego (OPP).
                </p>
              </div>

              <div className="panel-emerald">
                <h3 className="font-semibold heading-strong mb-3 flex items-center gap-2">
                  <span className="number-badge">2</span>
                  Wpisz nasz numer KRS
                </h3>
                <p className="text-soft ml-10 mb-3">
                  W odpowiednim polu wpisz numer KRS Stowarzyszenia "Kudłate serce":
                </p>
                <div className="ml-10 krs-box">
                  <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 text-center tracking-wide">
                    KRS 0000644790
                  </p>
                </div>
                <div className="ml-10 mt-4 warning-amber">
                  <p className="text-sm">
                    ⚠️ Wpisanie poprawnego KRS jest bardzo ważne! Błędny numer nie pomoże zwierzakom ze Schroniska w Orzechowcach. Należy pamiętać, że w formularzach PIT często są już wpisane gotowe numery KRS. Sprawdźcie dokładnie swoje PIT-y!
                  </p>
                </div>
              </div>

              <div className="panel-emerald">
                <h3 className="font-semibold heading-strong mb-3 flex items-center gap-2">
                  <span className="number-badge">3</span>
                  Złóż zeznanie
                </h3>
                <p className="text-soft ml-10">
                  Wyślij zeznanie podatkowe do urzędu skarbowego. Twoje 1,5% trafi automatycznie do naszego schroniska!
                </p>
              </div>
            </div>
          </div>

          {/* What we achieved */}
          <div className="surface-section p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold heading-strong mb-6">Co udało się osiągnąć dzięki Waszej hojności?</h3>
            <div className="space-y-4 text-soft leading-relaxed">
              <p>
                Do tej pory mogliśmy zapewnić specjalistyczne badania i leczenie zwierzętom schorowanym, starszym i wymagającym szczególnej troski. Zakupiliśmy między innymi:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="bullet-emerald">•</span>
                  <span>Tabletki i środki na kompleksowe odrobaczanie, odkleszczanie i odpchlanie wszystkich psów i kotów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bullet-emerald">•</span>
                  <span>Leki i suplementy wspomagające serce, wątrobę, nerki, trzustkę oraz dla psów dużych ras z problemami ze stawami</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bullet-emerald">•</span>
                  <span>Specjalistyczną karmę dietetyczną dla psów otyłych, z wrażliwym układem pokarmowym i alergiami</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bullet-emerald">•</span>
                  <span>Kilkaset kilogramów karmy suchej i mokrej dla psów, kotów, szczeniąt i kociąt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bullet-emerald">•</span>
                  <span>Wyposażenie: wagę, klatki wiklinowe dla kotów, kastry, baseniki, materiały do remontów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bullet-emerald">•</span>
                  <span>Budy dla psów, domki, legowiska i drapaki do małej kociarni, zadaszenie boksów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bullet-emerald">•</span>
                  <span>Wyposażenie powstającego schroniskowego ambulatorium oraz remont kuchni</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important info */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-blue-100 dark:border-blue-800/50 p-8 md:p-12 mb-8">
            <h3 className="text-xl font-bold heading-strong mb-4">Ważne informacje</h3>
            <ul className="space-y-3 text-soft">
              <li className="flex items-start gap-3">
                <span className="bullet-emerald">•</span>
                <span>Przekazanie 1,5% podatku <strong>nic Cię nie kosztuje</strong> – to część podatku, który i tak musisz zapłacić.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bullet-emerald">•</span>
                <span>Możesz przekazać 1,5% nawet jeśli nie masz zobowiązania podatkowego do zapłaty.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bullet-emerald">•</span>
                <span>Każda złotówka trafia bezpośrednio na utrzymanie schroniska, opiekę weterynaryjną i wyposażenie dla zwierząt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bullet-emerald">•</span>
                <span>Możesz rozliczać się samodzielnie lub przez biuro rachunkowe – oba sposoby są równie proste.</span>
              </li>
            </ul>
          </div>

          {/* Bank account */}
          <div className="surface-section p-8 md:p-12">
            <h3 className="text-2xl font-bold heading-strong mb-4">Możesz również wesprzeć nas wpłatą bezpośrednią</h3>
            <p className="text-soft mb-6 leading-relaxed">
              Tylko dzięki wspólnemu zaangażowaniu Stowarzyszenie "Kudłate serce" będzie mogło w pełni rozwinąć skrzydła i jeszcze skuteczniej pomagać orzechowskim bezdomniakom.
            </p>
            
            <div className="panel-emerald rounded-xl space-y-3">
              <p className="font-semibold heading-strong">Stowarzyszenie "Kudłate serce"</p>
              <p className="text-soft"><span className="font-medium">KRS:</span> 0000644790</p>
              <p className="text-soft"><span className="font-medium">Nr konta:</span> 82 1750 0012 0000 0000 3545 9887</p>
              <div className="border-t border-emerald-200 dark:border-emerald-700 pt-3 mt-3">
                <p className="text-sm text-muted mb-2">Dane do wpłat zagranicznych / Donations from other countries:</p>
                <p className="text-soft"><span className="font-medium">BIC (SWIFT):</span> RCBWPLPW</p>
                <p className="text-soft"><span className="font-medium">IBAN:</span> PL 82 1750 0012 0000 0000 3545 9887</p>
              </div>
            </div>
          </div>

          {/* Thank you note */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium mb-2">
              Dziękujemy wszystkim ludziom o "kudłatych sercach" za wsparcie!
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              Dzięki Wam nasza pomoc jest realna, ponieważ zebrane środki wykorzystujemy jak najrozsądniej na najpilniejsze i nie cierpiące zwłoki potrzeby. Bądźcie z nami nadal! ❤️
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
