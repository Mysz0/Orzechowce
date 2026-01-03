import Link from 'next/link'
import {
  AlertTriangle,
  ArrowLeft,
  BookMarked,
  BookOpen,
  ClipboardCheck,
  FileText,
  Heart,
  Home,
  Info,
  PhoneCall,
  Scale,
  Shield,
  ShieldCheck,
  Siren,
} from 'lucide-react'
import ContactButton from '@/components/ContactButton'
import Header from '@/components/Header'

export default function LekturaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Header currentPage="lektura" />

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
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold heading-strong">
                  Lektura obowiązkowa
                </h1>
                <p className="text-emerald-700 dark:text-emerald-400 font-medium">Przepisy i regulacje dotyczące ochrony zwierząt</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-soft leading-relaxed">
                Poniżej znajdziesz najważniejsze informacje dotyczące adopcji zwierząt, zasad wydawania zwierząt ze schroniska, 
                przepisów prawnych oraz ważnych dokumentów i regulaminów. Zapoznanie się z tymi informacjami pomoże Ci 
                lepiej zrozumieć proces adopcji oraz Twoje prawa i obowiązki jako opiekuna zwierzęcia.
              </p>
            </div>
          </div>

          {/* Adoption Rules Section */}
          <div className="surface-section p-8 md:p-12 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold heading-strong mb-2">
                  Zasady wydawania zwierząt do adopcji
                </h2>
                <p className="text-sm text-muted mb-4">
                  Regulamin Schroniska dla Bezdomnych Zwierząt w Orzechowcach
                </p>
              </div>
            </div>

            <div className="space-y-6 text-soft">
              <div className="info-blue">
                <p className="leading-relaxed">
                  Pobyt zwierzęcia w schronisku należy traktować jedynie jako okres przejściowy na czas znalezienia zwierzęciu 
                  bezdomnemu właściwego opiekuna. Codziennie spogląda na nas dwieście par tęsknych oczu zwierząt, które 
                  potrzebują Twojej miłości i wsparcia!
                </p>
              </div>

              <div>
                <h3 className="font-semibold heading-strong mb-3 text-xl">Podstawowe zasady:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bullet-emerald">•</span>
                    <span>Zwierzęta są wydawane do adopcji <strong>bez pobierania jakichkolwiek opłat</strong>. Istnieje możliwość dokonania dobrowolnej wpłaty na rzecz schroniska.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-emerald">•</span>
                    <span>Wydawanie zwierząt odbywa się <strong>codziennie od 9:00 do 17:00</strong>, w dni świąteczne po telefonicznym uzgodnieniu.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-emerald">•</span>
                    <span>Zwierzęta przekazywane są wraz z aktualnym zaświadczeniem o szczepieniu przeciwko wściekliźnie.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-emerald">•</span>
                    <span>Zwierzęta mogą być adoptowane po okresie <strong>14-dniowej kwarantanny</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-emerald">•</span>
                    <span>Każda adopcja wymaga podpisania umowy adopcyjnej.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold heading-strong mb-3 text-xl">Komu NIE wydajemy zwierząt:</h3>
                <ul className="space-y-3 panel-red">
                  <li className="flex items-start gap-3">
                    <span className="bullet-red">✗</span>
                    <span>Osobom <strong>niepełnoletnim</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-red">✗</span>
                    <span>Osobom <strong>nietrzeźwym lub pod wpływem środków odurzających</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-red">✗</span>
                    <span>Osobom znanym z <strong>niewłaściwego traktowania zwierząt</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-red">✗</span>
                    <span>Osobom, którym wcześniej <strong>odebrano zwierzę</strong> z powodu znęcania się</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-red">✗</span>
                    <span>Osobom, które <strong>zwracały adoptowane zwierzęta</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-red">✗</span>
                    <span>Gdy istnieje podejrzenie <strong>handlu zwierzętami lub założenia hodowli</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-red">✗</span>
                    <span>Osobom nie posiadającym <strong>odpowiednich przyborów</strong> do zabrania zwierzęcia (kagańca, smyczy, transportówki)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold heading-strong mb-3 text-xl">Czego NIE wydajemy:</h3>
                <ul className="space-y-3 panel-amber">
                  <li className="flex items-start gap-3">
                    <span className="bullet-amber">✗</span>
                    <span><strong>Psów na łańcuch</strong> - pies nie jest maszyną do pilnowania!</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-amber">✗</span>
                    <span><strong>Szczennych suk i kotek</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-amber">✗</span>
                    <span><strong>Zwierząt "na prezent"</strong> - przyszły opiekun musi zgłosić się osobiście</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-amber">✗</span>
                    <span>Psów do <strong>pilnowania pól, sadów przed dzikimi zwierzętami</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-amber">✗</span>
                    <span>Gdy istnieje podejrzenie wykorzystania do <strong>walk, eksperymentów lub praktyk zoofilskich</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bullet-amber">✗</span>
                    <span>Do <strong>warunków gorszych</strong> od tych w schronisku</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Adopter Obligations */}
          <div className="surface-section p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold heading-strong mb-6">Obowiązki opiekuna po adopcji</h2>
            
            <div className="space-y-4">
              <div className="panel-emerald rounded-xl">
                <h3 className="font-semibold heading-strong mb-3 flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  <span>Wymagane przy adopcji:</span>
                </h3>
                <ul className="space-y-2 ml-4 text-soft">
                  <li className="flex items-start gap-2">
                    <span className="bullet-emerald">•</span>
                    <span>Zapoznanie się i zaakceptowanie regulaminu wydawania zwierząt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-emerald">•</span>
                    <span>Oględziny zwierzęcia i zapoznanie się z jego stanem zdrowia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-emerald">•</span>
                    <span>Podpisanie umowy adopcyjnej</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-emerald">•</span>
                    <span>Wyrażenie zgody na wizyty poadopcyjne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-emerald">•</span>
                    <span>Posiadanie odpowiednich przyborów (smycz, kagańce, transportówka)</span>
                  </li>
                </ul>
              </div>

              <div className="panel-blue rounded-xl">
                <h3 className="font-semibold heading-strong mb-3 flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                  <span>Twoje obowiązki jako opiekuna:</span>
                </h3>
                <ul className="space-y-2 ml-4 text-soft">
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Traktowanie zwierzęcia zgodnie z ustawą o ochronie zwierząt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Zapewnienie odpowiedniego pożywienia, czystej wody i ciepłego schronienia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Zapewnienie opieki weterynaryjnej (szczepienia, odrobaczanie, wizyty kontrolne)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Akceptacja zwierzęcia przez wszystkich domowników</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Wyposażenie zwierzęcia w adresówkę lub obróżkę z numerem telefonu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Poinformowanie schroniska o zaginięciu zwierzęcia lub zmianie adresu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Rejestracja zwierzęcia we właściwym urzędzie (jeśli wymagane)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500 dark:border-purple-600">
                <div className="flex items-start gap-3 text-purple-900 dark:text-purple-200 font-medium">
                  <AlertTriangle className="w-5 h-5 mt-0.5 text-purple-700 dark:text-purple-200" />
                  <p>
                    Schronisko zastrzega sobie prawo do wizyty poadopcyjnej oraz odebrania zwierzęcia 
                    w razie stwierdzenia nieodpowiednich warunków lub nieprawdziwych danych.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Found Animal Information */}
          <div className="surface-section p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold heading-strong mb-6">Co robić gdy znajdziesz bezdomne zwierzę?</h2>

            <div className="space-y-6 text-soft">
              <p className="leading-relaxed">
                Znalazłeś bezpańskiego, porzuconego, zagubionego, rannego psa, kota lub inne zwierzę? 
                Chcesz pomóc bezbronnemu zwierzęciu a nie wiesz jak?
              </p>

              <div className="panel-emerald rounded-xl">
                <h3 className="font-semibold heading-strong mb-4 flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  <span>Ważne numery telefonu:</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Siren className="w-5 h-5 mt-1 text-emerald-700 dark:text-emerald-400" />
                    <div>
                      <p className="font-semibold heading-strong">Straż Miejska (bezdomne zwierzęta)</p>
                      <p className="text-emerald-700 dark:text-emerald-400 text-xl font-bold">986</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 mt-1 text-emerald-700 dark:text-emerald-400" />
                    <div>
                      <p className="font-semibold heading-strong">Policja (znęcanie się nad zwierzętami)</p>
                      <p className="text-emerald-700 dark:text-emerald-400 text-xl font-bold">997</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Co powinieneś zrobić:</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 number-badge">1</span>
                    <span>Upewnij się czy zwierzę jest bezdomne - rozejrzyj się, wypytaj okolicznych mieszkańców</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 number-badge">2</span>
                    <span>Sprawdź czy zwierzę ma obróżkę z adresówką lub numerem telefonu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 number-badge">3</span>
                    <span>Oceń stan zdrowia zwierzęcia - czy jest ranne, chore, wygłodzone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 number-badge">4</span>
                    <span>Zadzwoń do Straży Miejskiej (986) - odłowią zwierzęta stwarzające zagrożenie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 number-badge">5</span>
                    <span>W przypadku rannego zwierzęcia - zgłoś do Straży Miejskiej, która zapewni opiekę weterynaryjną</span>
                  </li>
                </ol>
              </div>

              <div className="panel-red rounded-xl border-l-4 border-red-500 dark:border-red-600">
                <h3 className="font-semibold heading-strong mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span>Kary za znęcanie się nad zwierzętami:</span>
                </h3>
                <ul className="space-y-2 ml-4 text-soft">
                  <li className="flex items-start gap-2">
                    <span className="bullet-red">•</span>
                    <span><strong>Kara pozbawienia wolności do 2 lat</strong> za znęcanie się nad zwierzęciem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-red">•</span>
                    <span><strong>Do 3 lat więzienia</strong> za działanie ze szczególnym okrucieństwem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-red">•</span>
                    <span><strong>Nawiązka od 500 zł do 100 000 zł</strong> na cel związany z ochroną zwierząt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-red">•</span>
                    <span><strong>Porzucenie psa lub kota to forma znęcania się</strong> - grożą te same kary!</span>
                  </li>
                </ul>
              </div>

              <div className="panel-blue rounded-xl">
                <h3 className="font-semibold heading-strong mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                  <span>Ważne informacje:</span>
                </h3>
                <ul className="space-y-2 ml-4 text-soft">
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Koty wolno żyjące (dzikie, miejskie, piwniczne) <strong>nie są bezdomne</strong> - nie należy ich wyłapywać, ale można dokarmiać</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Schronisko nie przyjmuje zwierząt bezpośrednio od właścicieli (tylko w wyjątkowych przypadkach)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bullet-blue">•</span>
                    <span>Zwierzęta do schroniska dostarczane są przez Straż Miejską lub Policję</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Laws */}
          <div className="space-y-6 mb-8">
            {/* Ustawa o ochronie zwierząt */}
            <div className="surface-section p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold heading-strong mb-2">
                    Ustawa o ochronie zwierząt
                  </h2>
                  <p className="text-sm text-muted mb-4">
                    Ustawa z dnia 21 sierpnia 1997 r. o ochronie zwierząt (Dz.U. 1997 nr 111 poz. 724)
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-soft">
                <p>
                  Podstawowy akt prawny regulujący zasady postępowania ze zwierzętami w Polsce. 
                  Określa prawa zwierząt, obowiązki właścicieli oraz konsekwencje za znęcanie się nad zwierzętami.
                </p>

                <div className="panel-emerald rounded-xl p-4">
                  <h3 className="font-semibold heading-strong mb-2">Najważniejsze zapisy:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="bullet-emerald">•</span>
                      <span>Zwierzę jest istotą żyjącą zdolną do odczuwania cierpienia (Art. 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-emerald">•</span>
                      <span>Człowiek jest winien zwierzęciu poszanowanie, ochronę i opiekę (Art. 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-emerald">•</span>
                      <span>Zakaz znęcania się nad zwierzętami (Art. 6)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-emerald">•</span>
                      <span>Obowiązek zapewnienia zwierzęciu odpowiednich warunków bytowania (Art. 5)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-emerald">•</span>
                      <span>Regulacje dotyczące schronisk dla zwierząt (Art. 11)</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu19971110724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Przeczytaj pełny tekst ustawy
                </a>
              </div>
            </div>

            {/* Kodeks karny */}
            <div className="surface-section p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-700 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold heading-strong mb-2">
                    Kodeks karny - Art. 35
                  </h2>
                  <p className="text-sm text-muted mb-4">
                    Odpowiedzialność karna za znęcanie się nad zwierzętami
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-soft">
                <p>
                  Artykuł 35 Kodeksu karnego określa kary za znęcanie się nad zwierzętami, 
                  w tym zabijanie, okaleczanie lub powodowanie cierpienia.
                </p>

                <div className="panel-red rounded-xl p-4 border-l-4 border-red-500 dark:border-red-600">
                  <h3 className="font-semibold heading-strong mb-2">Kary:</h3>
                  <ul className="space-y-2 ml-4 text-soft">
                    <li className="flex items-start gap-2">
                      <span className="bullet-red">•</span>
                      <span>Kara pozbawienia wolności do lat 3 za znęcanie się nad zwierzęciem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-red">•</span>
                      <span>Surowsze kary w przypadku działania ze szczególnym okrucieństwem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-red">•</span>
                      <span>Możliwość orzeczenia zakazu posiadania zwierząt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ustawa o utrzymaniu czystości */}
            <div className="surface-section p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold heading-strong mb-2">
                    Ustawa o utrzymaniu czystości i porządku w gminach
                  </h2>
                  <p className="text-sm text-muted mb-4">
                    Obowiązki właścicieli zwierząt domowych
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-soft">
                <p>
                  Określa obowiązki właścicieli zwierząt związane z utrzymaniem czystości 
                  w miejscach publicznych oraz rejestrację i oznakowanie zwierząt.
                </p>

                <div className="panel-blue rounded-xl p-4">
                  <h3 className="font-semibold heading-strong mb-2">Główne obowiązki:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="bullet-blue">•</span>
                      <span>Sprzątanie po swoim zwierzęciu w miejscach publicznych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-blue">•</span>
                      <span>Obowiązek posiadania kagańca i smyczy w określonych miejscach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-blue">•</span>
                      <span>Rejestracja i oznakowanie psa (chip lub tatuaż)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bullet-blue">•</span>
                      <span>Odpowiedzialność za szkody wyrządzone przez zwierzę</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Important Documents and Links */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 p-8 md:p-12 mb-8">
            <div className="flex items-start gap-3 mb-6">
              <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ważne dokumenty i regulaminy</h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Poniżej znajdziesz linki do oficjalnych dokumentów Miasta Przemyśl i Schroniska dla Bezdomnych Zwierząt w Orzechowcach. 
              Warto się z nimi zapoznać aby wiedzieć jak funkcjonuje Schronisko.
            </p>

            <div className="space-y-3">
              <a
                href="http://przemysl.pl/43159/3512/uchwala-nr-1082008-z-dnia-29-maja-2008-rw-sprawie-utworzenia-jednostki-budzetowej-schronisko-dla-bezdomnych-zwierzat.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-900/50"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400">
                    Uchwała Nr 108/2008 - utworzenie jednostki budżetowej "Schronisko dla Bezdomnych Zwierząt"
                  </span>
                </div>
              </a>

              <a
                href="http://przemysl.pl/40664/3512/statut-schroniska-dla-bezdomnych-zwierzat-w-orzechowcach.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-900/50"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400">
                    Statut Schroniska dla Bezdomnych Zwierząt w Orzechowcach
                  </span>
                </div>
              </a>

              <a
                href="http://przemysl.pl/43162/3512/regulamin-wydawania-zwierzat-ze-schroniska-dla-bezdomnych-zwierzat-w-orzechowcach.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-900/50"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400">
                    Regulamin wydawania zwierząt ze Schroniska dla Bezdomnych Zwierząt w Orzechowcach
                  </span>
                </div>
              </a>

              <a
                href="http://przemysl.pl/40663/3512/regulamin-wolontariatu-na-rzecz-schroniska-dla-bezdomnych-zwierzat-w-orzechowcach.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-900/50"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400">
                    Regulamin wolontariatu i instrukcja pracy dla wolontariuszy
                  </span>
                </div>
              </a>

              <a
                href="http://przemysl.pl/43163/3512/kodeks-etyczny-pracownika-schroniska-dla-bezdomnych-zwierzat-w-orzechowcach.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-900/50"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400">
                    Kodeks etyczny pracownika Schroniska dla Bezdomnych Zwierząt w Orzechowcach
                  </span>
                </div>
              </a>

              <a
                href="http://przemysl.pl/43265/3512/regulamin-schroniska-dla-bezdomnych-zwierzat-w-przemyslu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-900/50"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400">
                    Regulamin Schroniska dla Bezdomnych Zwierząt w Orzechowcach
                  </span>
                </div>
              </a>

              <a
                href="https://bip.przemysl.pl/53079/uchwala-nr-282019-rady-miejskiej-w-przemyslu-z-dnia-18-lutego-2019-r-w-sprawie-przyjecia-programu-opieki-na-zwierzetami-bezdomnymi-oraz-zapobiegania-bezdomnosci-zwierzat-na-terenie-gminy-miejskiej-przemysl-w-2019-roku.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-900/50"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400">
                    Uchwała Nr 28/2019 - Program opieki na zwierzętami bezdomnymi
                  </span>
                </div>
              </a>

              <a
                href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu19971110724"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-900/50"
              >
                <div className="flex items-center gap-3">
                  <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-700 dark:hover:text-indigo-400">
                    Ustawa o ochronie zwierząt z dnia 21 sierpnia 1997 r.
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 p-8 md:p-12 mb-8">
            <div className="flex items-start gap-3 mb-6">
              <Heart className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Inne ważne informacje</h2>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Prawo lokalne</h3>
                <p>
                  Poszczególne gminy mogą wprowadzać dodatkowe przepisy dotyczące utrzymania zwierząt. 
                  Warto zapoznać się z lokalnymi regulacjami obowiązującymi w Twoim miejscu zamieszkania.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Prawo unijne</h3>
                <p>
                  Polska podlega również regulacjom Unii Europejskiej dotyczącym ochrony zwierząt, 
                  w tym konwencji europejskiej o ochronie zwierząt towarzyszących.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Obowiązki weterynaryjne</h3>
                <p>
                  Właściciel zwierzęcia jest zobowiązany do zapewnienia opieki weterynaryjnej, 
                  szczepień (w tym obowiązkowego szczepienia przeciw wściekliźnie dla psów) 
                  oraz leczenia w przypadku choroby lub urazu.
                </p>
              </div>
            </div>
          </div>

          {/* Important note */}
          <div className="surface-section p-8">
            <h3 className="font-semibold heading-strong mb-3 flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
              <span>Dlaczego warto znać przepisy?</span>
            </h3>
            <p className="text-soft leading-relaxed">
              Znajomość przepisów prawnych dotyczących ochrony zwierząt to nie tylko obowiązek każdego 
              właściciela, ale także wyraz odpowiedzialności i troski o dobrostan zwierzęcia. 
              Wiedza o prawach i obowiązkach pomaga uniknąć problemów prawnych, a przede wszystkim 
              zapewnić zwierzęciu najlepszą możliwą opiekę. Pamiętaj: adopcja to poważna decyzja 
              i długoterminowe zobowiązanie!
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Masz pytania dotyczące przepisów prawnych lub potrzebujesz dodatkowych informacji?
            </p>
            <ContactButton />
          </div>
        </div>
      </main>
    </div>
  )
}
