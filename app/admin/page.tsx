'use client'

import { useState, useEffect, type ComponentType } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { type Pet } from '@/lib/supabase'
import {
  AlertCircle,
  ArrowLeft,
  BadgeCheck,
  Cat,
  Dog,
  Edit,
  Eye,
  EyeOff,
  HeartHandshake,
  Hourglass,
  User,
  UserCircle,
  PawPrint,
  Plus,
  ShieldCheck,
  Trash2,
} from 'lucide-react'

export default function AdminPage() {
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authLoading, setAuthLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const speciesLabel: Record<string, { icon: ComponentType<{ className?: string }>; label: string }> = {
    dog: { icon: Dog, label: 'Pies' },
    cat: { icon: Cat, label: 'Kot' },
    other: { icon: PawPrint, label: 'Inne' },
  }

  const sexLabel: Record<string, { icon: ComponentType<{ className?: string }>; label: string }> = {
    male: { icon: UserCircle, label: 'Samiec' },
    female: { icon: User, label: 'Samica' },
  }

  const statusLabel: Record<string, { icon: ComponentType<{ className?: string }>; label: string; tone: string }> = {
    available: {
      icon: BadgeCheck,
      label: 'Dostępny',
      tone: 'bg-emerald-100 text-emerald-800',
    },
    reserved: {
      icon: Hourglass,
      label: 'Zarezerwowany',
      tone: 'bg-amber-100 text-amber-800',
    },
    adopted: {
      icon: HeartHandshake,
      label: 'Adoptowany',
      tone: 'bg-blue-100 text-blue-800',
    },
  }

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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 flex items-center justify-center p-6 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-2xl shadow-2xl border border-emerald-100/60 dark:border-gray-800 p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <PawPrint className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Panel Administracyjny</h1>
            <p className="text-gray-600 dark:text-gray-300">Schronisko Orzechowce</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Hasło administratora
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
                placeholder="Wprowadź hasło"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showPassword ? 'Ukryj' : 'Pokaż'} hasło</span>
              </button>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
            >
              {authLoading ? 'Logowanie...' : 'Zaloguj się'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/80 backdrop-blur border-b border-emerald-100/60 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-emerald-700 dark:text-emerald-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Panel Administracyjny</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Zarządzaj zwierzętami</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Strona główna
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors shadow-sm"
              >
                Wyloguj
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between gap-3">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Wszystkie zwierzęta ({pets.length})
          </h2>
          <Link
            href="/admin/add"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Dodaj zwierzę
          </Link>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-emerald-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Ładowanie...</p>
          </div>
        )}

        {!loading && pets.length === 0 && (
          <div className="text-center py-12 bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-2xl shadow-lg border border-emerald-100/70 dark:border-gray-800">
            <AlertCircle className="w-16 h-16 text-emerald-600 dark:text-emerald-300 mx-auto mb-4" />
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-2">Brak zwierząt w bazie danych</p>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Dodaj pierwsze zwierzę klikając przycisk powyżej</p>
          </div>
        )}

        {!loading && pets.length > 0 && (
          <div className="bg-white/95 dark:bg-gray-900/80 backdrop-blur rounded-2xl shadow-lg border border-emerald-100/70 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-50/80 dark:bg-gray-800 border-b border-emerald-100/60 dark:border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Nazwa</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Gatunek</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Wiek</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Płeć</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Data dodania</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">Akcje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {pets.map((pet) => (
                    <tr key={pet.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">{pet.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                        {(() => {
                          const entry = speciesLabel[pet.species]
                          const Icon = entry?.icon || PawPrint
                          return (
                            <span className="inline-flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              <span>{entry?.label || 'Inne'}</span>
                            </span>
                          )
                        })()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">{pet.age || '-'}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                        {pet.sex ? (
                          (() => {
                            const entry = sexLabel[pet.sex]
                            const Icon = entry?.icon || PawPrint
                            return (
                              <span className="inline-flex items-center gap-2">
                                <Icon className="w-4 h-4" />
                                <span>{entry?.label || 'Nieznana'}</span>
                              </span>
                            )
                          })()
                        ) : (
                          '-'
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {(() => {
                          const entry = statusLabel[pet.status]
                          const Icon = entry?.icon || ShieldCheck
                          return (
                            <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full ${entry?.tone || 'bg-gray-100 text-gray-800'}`}>
                              <Icon className="w-4 h-4" />
                              <span>{entry?.label || 'Status'}</span>
                            </span>
                          )
                        })()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                        {new Date(pet.created_at).toLocaleDateString('pl-PL')}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/edit/${pet.id}`}
                            className="p-2 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            title="Edytuj"
                          >
                            <Edit className="w-5 h-5" />
                          </Link>
                          <button
                            onClick={() => handleDelete(pet.id, pet.name)}
                            className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
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
