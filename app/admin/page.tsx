'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { type Pet } from '@/lib/supabase'
import { PawPrint, Plus, Edit, Trash2, ArrowLeft, AlertCircle } from 'lucide-react'

export default function AdminPage() {
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authLoading, setAuthLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
      loadPets()
    } else {
      setLoading(false)
    }
  }, [])

  async function loadPets() {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/pets', { cache: 'no-store' })
      if (!res.ok) throw new Error('Failed to load pets')
      const data: Pet[] = await res.json()
      setPets(data)
    } catch (err) {
      console.error(err)
      alert('Nie udało się pobrać listy zwierząt')
    }
    setLoading(false)
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    login()
  }

  async function login() {
    setAuthLoading(true)
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) throw new Error('Unauthorized')
      sessionStorage.setItem('admin_authenticated', 'true')
      setIsAuthenticated(true)
      loadPets()
    } catch (err) {
      console.error(err)
      alert('Nieprawidłowe hasło!')
    }
    setAuthLoading(false)
  }

  async function handleDelete(id: string, name: string) {
    if (confirm(`Czy na pewno chcesz usunąć ${name}?`)) {
      try {
        const res = await fetch(`/api/admin/pets/${id}`, { method: 'DELETE' })
        if (!res.ok) throw new Error('delete failed')
        alert('Zwierzę zostało usunięte')
        loadPets()
      }
      catch (err) {
        console.error(err)
        alert('Błąd podczas usuwania')
      }
    }
  }

  function handleLogout() {
    sessionStorage.removeItem('admin_authenticated')
    setIsAuthenticated(false)
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <PawPrint className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel Administracyjny</h1>
            <p className="text-gray-600">Schronisko Orzechowce</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Hasło administratora
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Wprowadź hasło"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="mt-2 text-sm text-orange-600 hover:text-orange-700"
              >
                {showPassword ? 'Ukryj' : 'Pokaż'} hasło
              </button>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {authLoading ? 'Logowanie...' : 'Zaloguj się'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do strony głównej
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PawPrint className="w-8 h-8 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Panel Administracyjny</h1>
                <p className="text-sm text-gray-600">Zarządzaj zwierzętami</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Strona główna
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Wyloguj
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            Wszystkie zwierzęta ({pets.length})
          </h2>
          <Link
            href="/admin/add"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Dodaj zwierzę
          </Link>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-orange-600"></div>
            <p className="mt-4 text-gray-600">Ładowanie...</p>
          </div>
        )}

        {!loading && pets.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
            <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-2">Brak zwierząt w bazie danych</p>
            <p className="text-gray-500 mb-6">Dodaj pierwsze zwierzę klikając przycisk powyżej</p>
          </div>
        )}

        {!loading && pets.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nazwa</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Gatunek</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wiek</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Płeć</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data dodania</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Akcje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pets.map((pet) => (
                    <tr key={pet.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{pet.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {pet.species === 'dog' ? '🐕 Pies' : pet.species === 'cat' ? '🐈 Kot' : '🐾 Inne'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{pet.age || '-'}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {pet.sex === 'male' ? '♂️ Samiec' : pet.sex === 'female' ? '♀️ Samica' : '-'}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          pet.status === 'available' ? 'bg-green-100 text-green-800' :
                          pet.status === 'adopted' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {pet.status === 'available' ? 'Dostępny' :
                           pet.status === 'adopted' ? 'Adoptowany' : 'Zarezerwowany'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(pet.created_at).toLocaleDateString('pl-PL')}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/edit/${pet.id}`}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edytuj"
                          >
                            <Edit className="w-5 h-5" />
                          </Link>
                          <button
                            onClick={() => handleDelete(pet.id, pet.name)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Usuń"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
