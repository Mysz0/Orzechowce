"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { getPets, type Pet } from '@/lib/supabase'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PetStrip() {
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState(true)
  const stripRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [offset, setOffset] = useState(0)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    const load = async () => {
      const data = await getPets()
      setPets(data)
      setLoading(false)
    }
    load()
  }, [])

  // Measure single track width (half of doubled list)
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const width = trackRef.current.scrollWidth / 2
        setTrackWidth(width)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [pets])

  // Smooth looping marquee using transform
  useEffect(() => {
    if (loading || trackWidth === 0) return

    let frame: number
    const speed = 0.6 // px per frame ~60fps

    const tick = () => {
      setOffset((prev) => {
        const next = paused ? prev : prev - speed
        if (Math.abs(next) >= trackWidth) {
          return 0
        }
        return next
      })
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [loading, paused, trackWidth])

  const scrollBy = (delta: number) => {
    // Adjust offset manually for buttons
    setOffset((prev) => {
      const next = prev - delta
      if (Math.abs(next) >= trackWidth) return 0
      return next
    })
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-700/80">Nasi podopieczni</p>
          <h3 className="text-2xl font-semibold text-gray-900">Aktualnie w schronisku</h3>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Przewiń w lewo"
            onClick={() => scrollBy(-320)}
            className="h-10 w-10 rounded-full border border-emerald-200 bg-white text-emerald-800 hover:border-emerald-300 flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Przewiń w prawo"
            onClick={() => scrollBy(320)}
            className="h-10 w-10 rounded-full border border-emerald-200 bg-white text-emerald-800 hover:border-emerald-300 flex items-center justify-center shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={stripRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative overflow-hidden"
      >
        {loading && (
          <div className="flex gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-40 w-56 rounded-xl bg-emerald-100 animate-pulse flex-shrink-0"
              />
            ))}
          </div>
        )}

        {!loading && pets.length === 0 && (
          <div className="text-sm text-gray-600">Brak dostępnych zwierząt w bazie.</div>
        )}

        {!loading && pets.length > 0 && (
          <div
            ref={trackRef}
            className="flex gap-3"
            style={{
              transform: `translateX(${offset}px)`,
              transition: 'transform 0s linear',
              width: 'max-content',
            }}
          >
            {[...pets, ...pets].map((pet, idx) => {
              const primary = pet.image_urls?.[0]
              return (
                <div
                  key={`${pet.id}-${idx}`}
                  className="flex-shrink-0 rounded-xl overflow-hidden border border-emerald-100 bg-white shadow-sm"
                  style={{ width: 220, height: 160 }}
                >
                  {primary ? (
                    <Image
                      src={primary}
                      alt={pet.name}
                      width={220}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-emerald-50 text-emerald-800 flex items-center justify-center text-lg font-semibold">
                      {pet.name}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}