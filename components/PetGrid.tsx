'use client'

import { useState, useEffect } from 'react'
import { getPets, type Pet } from '@/lib/supabase'
import PetCard from './PetCard'
import { Filter } from 'lucide-react'

export default function PetGrid() {
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat'>('all')
  const [selected, setSelected] = useState<Pet | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  useEffect(() => {
    loadPets()
  }, [])

  async function loadPets() {
    setLoading(true)
    const data = await getPets()
    setPets(data)
    setLoading(false)
  }

  const filteredPets = pets.filter(pet => 
    filter === 'all' ? true : pet.species === filter
  )

  const gallery = selected
    ? (selected.image_urls || [])
    : []

  useEffect(() => {
    if (selected) setGalleryIndex(0)
  }, [selected])

  const dogCount = pets.filter(p => p.species === 'dog').length
  const catCount = pets.filter(p => p.species === 'cat').length

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-10 flex items-center justify-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-emerald-100 shadow-sm">
          <Filter className="w-4 h-4 text-emerald-700" />
          <span className="text-emerald-900 text-sm font-medium">Filtruj</span>
        </div>
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border hover:scale-105 active:scale-95 ${
            filter === 'all'
              ? 'bg-emerald-700 text-white border-emerald-700 shadow-lg'
              : 'bg-white text-emerald-900 border-emerald-200 hover:border-emerald-300'
          }`}
        >
          Wszystkie ({pets.length})
        </button>
        <button
          onClick={() => setFilter('dog')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border hover:scale-105 active:scale-95 ${
            filter === 'dog'
              ? 'bg-emerald-700 text-white border-emerald-700 shadow-lg'
              : 'bg-white text-emerald-900 border-emerald-200 hover:border-emerald-300'
          }`}
        >
          Psy ({dogCount})
        </button>
        <button
          onClick={() => setFilter('cat')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border hover:scale-105 active:scale-95 ${
            filter === 'cat'
              ? 'bg-emerald-700 text-white border-emerald-700 shadow-lg'
              : 'bg-white text-emerald-900 border-emerald-200 hover:border-emerald-300'
          }`}
        >
          Koty ({catCount})
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-orange-600"></div>
          <p className="mt-4 text-gray-600">Ładowanie zwierząt...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredPets.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
          <p className="text-xl text-gray-600 mb-2">Brak zwierząt w tej kategorii</p>
          <p className="text-gray-500">Sprawdź wkrótce - może pojawią się nowe podopieczni!</p>
        </div>
      )}

      {/* Pet Grid */}
      {!loading && filteredPets.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPets.map((pet, idx) => (
            <div key={pet.id} style={{ animation: `fadeInUp 0.5s ease-out ${idx * 50}ms both` }}>
              <PetCard pet={pet} onOpen={setSelected} />
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 animate-in fade-in duration-200"
             onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}>
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all hover:scale-110 active:scale-95 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              Zamknij
            </button>
            <div className="grid md:grid-cols-2 min-h-[460px]">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 min-h-[320px] flex flex-col animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: '100ms' }}>
                {gallery.length > 0 ? (
                  <>
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={gallery[galleryIndex]}
                        alt={selected.name}
                        className="h-full w-full object-cover transition-all duration-500 animate-in fade-in duration-300"
                        key={galleryIndex}
                      />
                      {gallery.length > 1 && (
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
                          <button
                            onClick={() => setGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length)}
                            className="h-10 w-10 rounded-full bg-white/80 text-gray-800 flex items-center justify-center shadow hover:bg-white transition-all hover:scale-110 active:scale-95"
                          >
                            ‹
                          </button>
                          <button
                            onClick={() => setGalleryIndex((prev) => (prev + 1) % gallery.length)}
                            className="h-10 w-10 rounded-full bg-white/80 text-gray-800 flex items-center justify-center shadow hover:bg-white transition-all hover:scale-110 active:scale-95"
                          >
                            ›
                          </button>
                        </div>
                      )}
                    </div>
                    {gallery.length > 1 && (
                      <div className="flex gap-2 p-3 overflow-x-auto">
                        {gallery.map((url, idx) => (
                          <button
                            key={idx}
                            onClick={() => setGalleryIndex(idx)}
                            className={`h-14 w-20 rounded-lg overflow-hidden border transition-all hover:scale-105 ${
                              idx === galleryIndex ? 'border-emerald-500 border-2 scale-105' : 'border-transparent hover:border-emerald-300'
                            }`}
                          >
                            <img src={url} alt={`${selected.name}-${idx}`} className="h-full w-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-semibold text-gray-500">
                    {selected.species === 'dog' ? 'P' : selected.species === 'cat' ? 'K' : 'Z'}
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-500" style={{ animationDelay: '200ms' }}>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Zwierzę do adopcji</p>
                  <h3 className="text-3xl font-semibold text-gray-900">{selected.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{selected.species === 'dog' ? 'Pies' : selected.species === 'cat' ? 'Kot' : 'Zwierzę'}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selected.age !== undefined && (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                      Wiek: {selected.age} {selected.age === 1 ? 'rok' : selected.age < 5 ? 'lata' : 'lat'}
                    </span>
                  )}
                  {selected.sex && (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                      Płeć: {selected.sex === 'male' ? 'Samiec' : 'Samica'}
                    </span>
                  )}
                  {selected.status && (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full capitalize">
                      Status: {selected.status === 'available' ? 'Dostępny' : selected.status === 'reserved' ? 'Zarezerwowany' : 'Adoptowany'}
                    </span>
                  )}
                </div>

                {selected.description && (
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                    {selected.description}
                  </p>
                )}

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-500" aria-hidden />
                  <span>Schronisko Orzechowce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
