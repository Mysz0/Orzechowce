import Link from 'next/link'
import { ArrowLeft, BookOpen, Scale, FileText, Shield, Heart } from 'lucide-react'
import ContactButton from '@/components/ContactButton'

export default function LekturaPage() {
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
                <p className="text-xs text-gray-600">Lektura obowiązkowa</p>
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
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Lektura obowiązkowa
                </h1>
                <p className="text-emerald-700 font-medium">Przepisy i regulacje dotyczące ochrony zwierząt</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Poniżej znajdziesz najważniejsze akty prawne regulujące kwestie ochrony zwierząt, 
                odpowiedzialności właścicieli oraz działalności schronisk w Polsce. Znajomość tych 
                przepisów pomoże Ci lepiej zrozumieć prawa i obowiązki związane z opieką nad zwierzętami.
              </p>
            </div>
          </div>

          {/* Main Laws */}
          <div className="space-y-6 mb-8">
            {/* Ustawa o ochronie zwierząt */}
            <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ustawa o ochronie zwierząt
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Ustawa z dnia 21 sierpnia 1997 r. o ochronie zwierząt (Dz.U. 1997 nr 111 poz. 724)
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Podstawowy akt prawny regulujący zasady postępowania ze zwierzętami w Polsce. 
                  Określa prawa zwierząt, obowiązki właścicieli oraz konsekwencje za znęcanie się nad zwierzętami.
                </p>

                <div className="bg-emerald-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Najważniejsze zapisy:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Zwierzę jest istotą żyjącą zdolną do odczuwania cierpienia (Art. 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Człowiek jest winien zwierzęciu poszanowanie, ochronę i opiekę (Art. 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Zakaz znęcania się nad zwierzętami (Art. 6)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Obowiązek zapewnienia zwierzęciu odpowiednich warunków bytowania (Art. 5)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Regulacje dotyczące schronisk dla zwierząt (Art. 11)</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu19971110724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Przeczytaj pełny tekst ustawy
                </a>
              </div>
            </div>

            {/* Kodeks karny */}
            <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-700" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Kodeks karny - Art. 35
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Odpowiedzialność karna za znęcanie się nad zwierzętami
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Artykuł 35 Kodeksu karnego określa kary za znęcanie się nad zwierzętami, 
                  w tym zabijanie, okaleczanie lub powodowanie cierpienia.
                </p>

                <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                  <h3 className="font-semibold text-gray-900 mb-2">Kary:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Kara pozbawienia wolności do lat 3 za znęcanie się nad zwierzęciem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Surowsze kary w przypadku działania ze szczególnym okrucieństwem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Możliwość orzeczenia zakazu posiadania zwierząt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ustawa o utrzymaniu czystości */}
            <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ustawa o utrzymaniu czystości i porządku w gminach
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Obowiązki właścicieli zwierząt domowych
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Określa obowiązki właścicieli zwierząt związane z utrzymaniem czystości 
                  w miejscach publicznych oraz rejestrację i oznakowanie zwierząt.
                </p>

                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Główne obowiązki:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Sprzątanie po swoim zwierzęciu w miejscach publicznych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Obowiązek posiadania kagańca i smyczy w określonych miejscach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Rejestracja i oznakowanie psa (chip lub tatuaż)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Odpowiedzialność za szkody wyrządzone przez zwierzę</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100 p-8 md:p-12 mb-8">
            <div className="flex items-start gap-3 mb-6">
              <Heart className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-gray-900">Inne ważne informacje</h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Prawo lokalne</h3>
                <p>
                  Poszczególne gminy mogą wprowadzać dodatkowe przepisy dotyczące utrzymania zwierząt. 
                  Warto zapoznać się z lokalnymi regulacjami obowiązującymi w Twoim miejscu zamieszkania.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Prawo unijne</h3>
                <p>
                  Polska podlega również regulacjom Unii Europejskiej dotyczącym ochrony zwierząt, 
                  w tym konwencji europejskiej o ochronie zwierząt towarzyszących.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Obowiązki weterynaryjne</h3>
                <p>
                  Właściciel zwierzęcia jest zobowiązany do zapewnienia opieki weterynaryjnej, 
                  szczepień (w tym obowiązkowego szczepienia przeciw wściekliźnie dla psów) 
                  oraz leczenia w przypadku choroby lub urazu.
                </p>
              </div>
            </div>
          </div>

          {/* Important note */}
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-emerald-100 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8">
            <h3 className="font-semibold text-gray-900 mb-3">📚 Dlaczego warto znać przepisy?</h3>
            <p className="text-gray-700 leading-relaxed">
              Znajomość przepisów prawnych dotyczących ochrony zwierząt to nie tylko obowiązek każdego 
              właściciela, ale także wyraz odpowiedzialności i troski o dobrostan zwierzęcia. 
              Wiedza o prawach i obowiązkach pomaga uniknąć problemów prawnych, a przede wszystkim 
              zapewnić zwierzęciu najlepszą możliwą opiekę. Pamiętaj: adopcja to poważna decyzja 
              i długoterminowe zobowiązanie!
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Masz pytania dotyczące przepisów prawnych lub potrzebujesz dodatkowych informacji?
            </p>
            <ContactButton />
          </div>
        </div>
      </main>
    </div>
  )
}
