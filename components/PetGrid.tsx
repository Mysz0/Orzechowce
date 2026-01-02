'use client'

import { useState, useEffect } from 'react'
import { getPets, type Pet } from '@/lib/supabase'
import PetCard from './PetCard'
import { Filter } from 'lucide-react'

export default function PetGrid() {
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat'>('all')

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

  const dogCount = pets.filter(p => p.species === 'dog').length
  const catCount = pets.filter(p => p.species === 'cat').length

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-8 flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700 font-medium">Filtruj:</span>
        </div>
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            filter === 'all'
              ? 'bg-orange-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Wszystkie ({pets.length})
        </button>
        <button
          onClick={() => setFilter('dog')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            filter === 'dog'
              ? 'bg-orange-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          🐕 Psy ({dogCount})
        </button>
        <button
          onClick={() => setFilter('cat')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            filter === 'cat'
              ? 'bg-orange-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          🐈 Koty ({catCount})
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
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </div>
  )
}
