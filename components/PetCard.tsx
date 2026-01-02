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
  const primaryImage = pet.image_urls?.[0]

  return (
    <div
      onClick={() => onOpen?.(pet)}
      className="group/card bg-white border border-emerald-50 rounded-2xl shadow-[0_18px_40px_rgba(45,122,88,0.08)] overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(45,122,88,0.12)] active:scale-[0.98]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen?.(pet)
        }
      }}
    >
      <div className="relative h-60 bg-gradient-to-br from-emerald-50 to-emerald-100 overflow-hidden group">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={pet.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-semibold text-gray-500">
            {fallbackInitial}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/85 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 border border-emerald-100 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
          {speciesLabel}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 h-72">
        <div className="transition-transform duration-300 flex-shrink-0">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300 break-words">{pet.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{speciesLabel}</p>
        </div>

        <div className="flex flex-wrap gap-2 transition-all duration-300 flex-shrink-0">
          {pet.age && (
            <span className="inline-flex items-center gap-2 text-sm text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-emerald-100 hover:shadow-md">
              <Calendar className="w-4 h-4" />
              {pet.age} {pet.age === 1 ? 'rok' : pet.age < 5 ? 'lata' : 'lat'}
            </span>
          )}
          {sexLabel && (
            <span className="inline-flex items-center gap-2 text-sm text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-emerald-100 hover:shadow-md">
              {sexLabel}
            </span>
          )}
        </div>

        <div className="flex-1 overflow-hidden">
          {pet.description && (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 break-words transition-colors duration-300">
              {pet.description}
            </p>
          )}
        </div>

        <div className="flex-shrink-0 space-y-2 mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
            <MapPin className="w-4 h-4" />
            <span>Schronisko Orzechowce</span>
          </div>
          <div className="w-full inline-flex items-center justify-between px-0 py-1 text-sm font-semibold text-gray-900 transition-all duration-300 group-hover:gap-3">
            <span className="transition-colors duration-300 group-hover:text-emerald-700">Kliknij, aby zobaczyć opis</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  )
}
