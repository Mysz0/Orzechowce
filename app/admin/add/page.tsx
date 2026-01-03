'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Upload, Save, PawPrint } from 'lucide-react'

export default function AddPetPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    species: 'dog' as 'dog' | 'cat' | 'other',
    age: '',
    sex: '' as '' | 'male' | 'female',
    description: '',
    image_urls: '',
    status: 'available' as 'available' | 'adopted' | 'reserved',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const petData = {
      name: formData.name,
      species: formData.species,
      age: formData.age ? parseInt(formData.age) : undefined,
      sex: formData.sex || undefined,
      description: formData.description || undefined,
      image_urls: formData.image_urls
        ? formData.image_urls
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
        : undefined,
      status: formData.status,
    }

    const res = await fetch('/api/admin/pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petData),
    })

    if (!res.ok) {
      alert('Błąd podczas dodawania zwierzęcia')
      setLoading(false)
      return
    }

    alert('Zwierzę zostało dodane!')
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/80 backdrop-blur border-b border-emerald-100/60 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Powrót do panelu administracyjnego
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white/95 dark:bg-gray-900/80 backdrop-blur rounded-2xl shadow-xl border border-emerald-100/70 dark:border-gray-800 p-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center">
              <PawPrint className="w-6 h-6 text-emerald-700 dark:text-emerald-300" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dodaj nowe zwierzę</h1>
              <p className="text-gray-600 dark:text-gray-300">Wypełnij formularz, aby dodać zwierzę do bazy</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Imię <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="np. Luna, Max, Mruczek"
                required
              />
            </div>

            {/* Species */}
            <div>
              <label htmlFor="species" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Gatunek <span className="text-red-500">*</span>
              </label>
              <select
                id="species"
                value={formData.species}
                onChange={(e) => setFormData({ ...formData, species: e.target.value as any })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
                required
              >
                <option value="dog">Pies</option>
                <option value="cat">Kot</option>
                <option value="other">Inne</option>
              </select>
            </div>

            {/* Age and Sex */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Wiek (w latach)
                </label>
                <input
                  type="number"
                  id="age"
                  min="0"
                  max="30"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="np. 3"
                />
              </div>

              <div>
                <label htmlFor="sex" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Płeć
                </label>
                <select
                  id="sex"
                  value={formData.sex}
                  onChange={(e) => setFormData({ ...formData, sex: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
                >
                  <option value="">Wybierz płeć</option>
                  <option value="male">Samiec</option>
                  <option value="female">Samica</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Opis
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="Opisz charakterystykę zwierzęcia, jego zachowanie, preferencje..."
              />
            </div>

            {/* Image URLs */}
            <div>
              <label htmlFor="image_urls" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                <Upload className="w-4 h-4 inline mr-1" />
                Zdjęcia (URL, po przecinku)
              </label>
              <textarea
                id="image_urls"
                value={formData.image_urls}
                onChange={(e) => setFormData({ ...formData, image_urls: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="https://example.com/photo1.jpg, https://example.com/photo2.jpg"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Wklej adresy URL zdjęć oddzielone przecinkami. Pierwsze zdjęcie będzie głównym.
              </p>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Status
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                <option value="available">Dostępny do adopcji</option>
                <option value="reserved">Zarezerwowany</option>
                <option value="adopted">Adoptowany</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
              <Link
                href="/admin"
                className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
              >
                Anuluj
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Dodawanie...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Dodaj zwierzę
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
