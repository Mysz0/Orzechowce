'use client'

import Image from 'next/image'
import { useState } from 'react'
import { type Pet } from '@/lib/supabase'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

interface PetCardProps {
  pet: Pet
  onOpen?: (pet: Pet) => void
}

export default function PetCard({ pet, onOpen }: PetCardProps) {
  const speciesLabel = pet.species === 'dog' ? 'Pies' : pet.species === 'cat' ? 'Kot' : 'Zwierzę'
  const sexLabel = pet.sex === 'male' ? 'Samiec' : pet.sex === 'female' ? 'Samica' : ''
  const fallbackInitial = pet.species === 'dog' ? 'P' : pet.species === 'cat' ? 'K' : 'Z'
    const primaryImage = pet.image_urls?.[0] || pet.image_url

  return (
    <div
      onClick={() => onOpen?.(pet)}
      className="bg-white border border-emerald-50 rounded-2xl shadow-[0_18px_40px_rgba(45,122,88,0.08)] overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(45,122,88,0.12)]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen?.(pet)
        }
      }}
    >
      <div className="relative h-60 bg-gradient-to-br from-emerald-50 to-emerald-100">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={pet.name}
            width={220}
            height={160}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-semibold text-gray-500">
            {fallbackInitial}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/85 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 border border-emerald-100">
          {speciesLabel}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{pet.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{speciesLabel}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {pet.age && (
            <span className="inline-flex items-center gap-2 text-sm text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-full">
              <Calendar className="w-4 h-4" />
              {pet.age} {pet.age === 1 ? 'rok' : pet.age < 5 ? 'lata' : 'lat'}
            </span>
          )}
          {sexLabel && (
            <span className="inline-flex items-center gap-2 text-sm text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-full">
              {sexLabel}
            </span>
          )}
        </div>

        {pet.description && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {pet.description}
          </p>
        )}

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>Schronisko Orzechowce</span>
        </div>
        <div className="mt-1 w-full inline-flex items-center justify-between px-0 py-1 text-sm font-semibold text-gray-900">
          <span>Kliknij, aby zobaczyć opis</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
