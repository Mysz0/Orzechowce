import Link from 'next/link'
import { Heart, PawPrint } from 'lucide-react'
import PetGrid from '@/components/PetGrid'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PawPrint className="w-8 h-8 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Schronisko Orzechowce</h1>
                <p className="text-sm text-gray-600">Znajdź swojego przyjaciela</p>
              </div>
            </div>
            <Link 
              href="/admin"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Panel Administracyjny
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One potrzebują Twojej miłości!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Docenią każdy Twój dobry gest i będą Ci wdzięczne za każde uczucie
          </p>
          <div className="flex items-center justify-center gap-2 text-orange-100">
            <Heart className="w-6 h-6 fill-current" />
            <span className="text-lg">Adopcja to miłość na całe życie</span>
            <Heart className="w-6 h-6 fill-current" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <PetGrid />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Schronisko dla Bezdomnych Zwierząt</h3>
            <p className="text-gray-400 mb-4">Orzechowce</p>
            <div className="flex justify-center gap-4 text-sm text-gray-400">
              <Link href="http://schroniskoorzechowce.pl" className="hover:text-white transition-colors">
                Strona główna
              </Link>
              <span>•</span>
              <Link href="http://schroniskoorzechowce.pl/?pageid=7" className="hover:text-white transition-colors">
                Kontakt
              </Link>
              <span>•</span>
              <Link href="http://schroniskoorzechowce.pl/?pageid=17" className="hover:text-white transition-colors">
                Pomoc
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
