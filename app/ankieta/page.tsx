'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ClipboardList, Heart, Home, Users, Wallet, AlertCircle, Dog, Cat } from 'lucide-react'
import ContactButton from '@/components/ContactButton'
import Header from '@/components/Header'

export default function AnkietaPage() {
  const [selectedType, setSelectedType] = useState<'dog' | 'cat' | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Header currentPage="ankieta" />

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
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl border border-emerald-100 dark:border-gray-700 shadow-[0_25px_80px_rgba(45,122,88,0.12)] p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <ClipboardList className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Ankieta adopcyjna
                </h1>
                <p className="text-emerald-700 dark:text-emerald-400 font-medium">Pierwszy krok do adopcji</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ankieta adopcyjna to ważny element procesu adopcji. Pomaga nam poznać Twoje warunki mieszkaniowe, 
                doświadczenie ze zwierzętami i oczekiwania. Dzięki temu możemy dopasować odpowiedniego pupila 
                do Twojego stylu życia i upewnić się, że adopcja będzie sukcesem.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 p-4 rounded">
                <p className="text-blue-900 dark:text-blue-200 font-medium">
                  Ankietę należy wypełnić osobiście w schronisku podczas wizyty adopcyjnej. 
                  Zachęcamy do wcześniejszego kontaktu telefonicznego lub mailowego.
                </p>
              </div>
            </div>
          </div>

          {/* Animal Type Selection */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl border border-emerald-100 dark:border-gray-700 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Wybierz rodzaj zwierzęcia</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setSelectedType('dog')}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  selectedType === 'dog'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 shadow-lg scale-105'
                    : 'border-emerald-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20'
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    selectedType === 'dog' ? 'bg-emerald-600' : 'bg-emerald-100 dark:bg-emerald-900/40'
                  }`}>
                    <Dog className={`w-8 h-8 ${selectedType === 'dog' ? 'text-white' : 'text-emerald-700 dark:text-emerald-400'}`} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pies</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ankieta adopcyjna dla psa</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setSelectedType('cat')}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  selectedType === 'cat'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 shadow-lg scale-105'
                    : 'border-emerald-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20'
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    selectedType === 'cat' ? 'bg-emerald-600' : 'bg-emerald-100 dark:bg-emerald-900/40'
                  }`}>
                    <Cat className={`w-8 h-8 ${selectedType === 'cat' ? 'text-white' : 'text-emerald-700 dark:text-emerald-400'}`} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Kot</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ankieta adopcyjna dla kota</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Dog Form */}
          {selectedType === 'dog' && (
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl border border-emerald-100 dark:border-gray-700 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Dog className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ankieta adopcyjna - Pies</h2>
              </div>
              <iframe
                src="http://schroniskoorzechowce.pl/ankieta/psy/ankieta.html"
                width="100%"
                height="2000"
                style={{ border: 0 }}
                title="Ankieta adopcyjna dla psa"
                className="rounded-xl"
              />
            </div>
          )}

          {/* Cat Form */}
          {selectedType === 'cat' && (
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl border border-emerald-100 dark:border-gray-700 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Cat className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ankieta adopcyjna - Kot</h2>
              </div>
              <iframe
                src="http://www.schroniskoorzechowce.pl/ankieta/koty/ankieta.html"
                width="100%"
                height="2000"
                style={{ border: 0 }}
                title="Ankieta adopcyjna dla kota"
                className="rounded-xl"
              />
            </div>
          )}

          {/* What to expect - only show if no type selected */}
          {!selectedType && (
            <>
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl border border-emerald-100 dark:border-gray-700 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Czego możesz się spodziewać w ankiecie?</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Warunki mieszkaniowe</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pytania o rodzaj mieszkania (dom/mieszkanie), dostęp do ogrodu, zabezpieczenia 
                    (ogrodzenie, balustrada balkonu), obecność innych zwierząt w domu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Skład rodziny</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Informacje o osobach zamieszkujących w gospodarstwie domowym, w tym dzieci 
                    (liczba, wiek), zgoda wszystkich domowników na adopcję zwierzęcia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Doświadczenie ze zwierzętami</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Czy masz/miałeś wcześniej zwierzęta? Jakie były Twoje doświadczenia? 
                    Czy znasz podstawy opieki nad psem/kotem?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Aspekty finansowe</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Świadomość kosztów utrzymania zwierzęcia (karma, weterynarz, szczepienia, 
                    akcesoria). Gotowość ponoszenia wydatków związanych z opieką.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Oczekiwania wobec zwierzęcia</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Jaki charakter i temperament zwierzęcia najbardziej Ci odpowiada? 
                    Czy preferujesz zwierzę aktywne czy spokojniejsze? Psa małego czy dużego?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important notes */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl border border-amber-100 dark:border-amber-800/50 p-8 md:p-12 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ważne informacje</h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                <span>
                  Ankieta nie jest dokumentem wiążącym – to narzędzie służące lepszemu poznaniu przyszłego opiekuna.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  Wszystkie odpowiedzi traktujemy poufnie. Zależy nam na szczerości – nie ma złych odpowiedzi.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  W niektórych przypadkach przeprowadzamy wizytę przedadopcyjną w domu kandydata na właściciela.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  Możliwość adopcji nie zależy tylko od wypełnienia ankiety – liczy się również rozmowa 
                  z pracownikami schroniska i "chemia" ze zwierzęciem.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  Po pozytywnym rozpatrzeniu ankiety podpisujesz umowę adopcyjną i możesz zabrać 
                  wybranego pupila do domu!
                </span>
              </li>
            </ul>
          </div>

          {/* Process steps */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl border border-emerald-100 dark:border-gray-700 shadow-[0_18px_40px_rgba(45,122,88,0.08)] p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Proces adopcji krok po kroku</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-gray-800 dark:text-gray-200">Odwiedź schronisko i poznaj nasze zwierzęta</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-gray-800 dark:text-gray-200">Wypełnij ankietę adopcyjną na miejscu</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-gray-800 dark:text-gray-200">Przeprowadzamy rozmowę i ewentualnie wizytę przedadopcyjną</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <p className="text-gray-800 dark:text-gray-200">Podpisujesz umowę adopcyjną</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <p className="text-gray-800 dark:text-gray-200">Zabierasz swojego nowego przyjaciela do domu! 🎉</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Masz pytania dotyczące ankiety lub procesu adopcji?
            </p>
            <ContactButton />
          </div>
          </>
          )}
        </div>
      </main>
    </div>
  )
}
