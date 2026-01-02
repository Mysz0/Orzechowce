'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { type Pet } from '@/lib/supabase'
import { ArrowLeft, Upload, Save } from 'lucide-react'

export default function EditPetPage() {
  const router = useRouter()
  const params = useParams()
  const petId = params.id as string
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [pet, setPet] = useState<Pet | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    species: 'dog' as 'dog' | 'cat' | 'other',
    age: '',
    sex: '' as '' | 'male' | 'female',
    description: '',
    image_url: '',
    image_urls: '',
    status: 'available' as 'available' | 'adopted' | 'reserved',
  })

  useEffect(() => {
    loadPet()
  }, [petId])

  async function loadPet() {
    try {
      const res = await fetch(`/api/admin/pets/${petId}`, { cache: 'no-store' })
      if (!res.ok) throw new Error('Failed to load pet')
      const foundPet: Pet = await res.json()

      setPet(foundPet)
      setFormData({
        name: foundPet.name,
        species: foundPet.species,
        age: foundPet.age?.toString() || '',
        sex: foundPet.sex || '',
        description: foundPet.description || '',
        image_url: foundPet.image_url || '',
        image_urls: foundPet.image_urls?.join(', ') || '',
        status: foundPet.status,
      })
    } catch (err) {
      console.error(err)
      setPet(null)
    }
    setLoading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    const updates = {
      name: formData.name,
      species: formData.species,
      age: formData.age ? parseInt(formData.age) : undefined,
      sex: formData.sex || undefined,
      description: formData.description || undefined,
      image_url: formData.image_url || undefined,
      image_urls: formData.image_urls
        ? formData.image_urls
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
        : undefined,
      status: formData.status,
    }

    const res = await fetch(`/api/admin/pets/${petId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    })

    if (!res.ok) {
      alert('Błąd podczas aktualizacji zwierzęcia')
      setSaving(false)
      return
    }

    alert('Zwierzę zostało zaktualizowane!')
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-orange-600"></div>
          <p className="mt-4 text-gray-600">Ładowanie...</p>
        </div>
      </div>
    )
  }

  if (!pet) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Nie znaleziono zwierzęcia</p>
          <Link
            href="/admin"
            className="text-orange-600 hover:text-orange-700"
          >
            Powrót do panelu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Powrót do panelu administracyjnego
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edytuj zwierzę</h1>
          <p className="text-gray-600 mb-8">Zaktualizuj informacje o zwierzęciu</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Imię <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="np. Luna, Max, Mruczek"
                required
              />
            </div>

            {/* Species */}
            <div>
              <label htmlFor="species" className="block text-sm font-medium text-gray-700 mb-2">
                Gatunek <span className="text-red-500">*</span>
              </label>
              <select
                id="species"
                value={formData.species}
                onChange={(e) => setFormData({ ...formData, species: e.target.value as any })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              >
                <option value="dog">🐕 Pies</option>
                <option value="cat">🐈 Kot</option>
                <option value="other">🐾 Inne</option>
              </select>
            </div>

            {/* Age and Sex */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Wiek (w latach)
                </label>
                <input
                  type="number"
                  id="age"
                  min="0"
                  max="30"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="np. 3"
                />
              </div>

              <div>
                <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-2">
                  Płeć
                </label>
                <select
                  id="sex"
                  value={formData.sex}
                  onChange={(e) => setFormData({ ...formData, sex: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Wybierz płeć</option>
                  <option value="male">♂️ Samiec</option>
                  <option value="female">♀️ Samica</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Opis
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Opisz charakterystykę zwierzęcia, jego zachowanie, preferencje..."
              />
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-2">
                <Upload className="w-4 h-4 inline mr-1" />
                URL zdjęcia
              </label>
              <input
                type="url"
                id="image_url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              <p className="mt-2 text-sm text-gray-500">
                Wskazówka: Możesz przesłać zdjęcie do Supabase Storage lub użyć zewnętrznego URL
              </p>
            </div>

            <div>
              <label htmlFor="image_urls" className="block text-sm font-medium text-gray-700 mb-2">
                Dodatkowe zdjęcia (URL, po przecinku)
              </label>
              <textarea
                id="image_urls"
                value={formData.image_urls}
                onChange={(e) => setFormData({ ...formData, image_urls: e.target.value })}
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="https://example.com/a.jpg, https://example.com/b.jpg"
              />
              <p className="mt-2 text-sm text-gray-500">Opcjonalnie, podaj wiele adresów URL oddzielonych przecinkami.</p>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="available">✅ Dostępny do adopcji</option>
                <option value="reserved">⏳ Zarezerwowany</option>
                <option value="adopted">💙 Adoptowany</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <Link
                href="/admin"
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Anuluj
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Zapisywanie...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Zapisz zmiany
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
