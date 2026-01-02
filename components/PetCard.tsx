'use client'

import Image from 'next/image'
import { type Pet } from '@/lib/supabase'
import { Heart, Calendar, MapPin } from 'lucide-react'

interface PetCardProps {
  pet: Pet
}

export default function PetCard({ pet }: PetCardProps) {
  const speciesEmoji = pet.species === 'dog' ? '🐕' : pet.species === 'cat' ? '🐈' : '🐾'
  const sexLabel = pet.sex === 'male' ? '♂️ Samiec' : pet.sex === 'female' ? '♀️ Samica' : ''

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-orange-200 to-orange-300">
        {pet.image_url ? (
          <Image
            src={pet.image_url}
            alt={pet.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            {speciesEmoji}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-orange-600">
          {pet.species === 'dog' ? 'Pies' : pet.species === 'cat' ? 'Kot' : 'Zwierzę'}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pet.name}</h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {pet.age && (
            <span className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              {pet.age} {pet.age === 1 ? 'rok' : pet.age < 5 ? 'lata' : 'lat'}
            </span>
          )}
          {sexLabel && (
            <span className="inline-flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {sexLabel}
            </span>
          )}
        </div>

        {pet.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {pet.description}
          </p>
        )}

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span>Schronisko Orzechowce</span>
        </div>

        <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
          <Heart className="w-5 h-5" />
          Adoptuj mnie!
        </button>
      </div>
    </div>
  )
}
