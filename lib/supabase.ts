import { createClient } from '@supabase/supabase-js'

export type Pet = {
  id: string
  name: string
  species: 'dog' | 'cat' | 'other'
  age?: number
  sex?: 'male' | 'female'
  description?: string
  image_url?: string
  image_urls?: string[]
  status: 'available' | 'adopted' | 'reserved'
  created_at: string
  updated_at: string
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getPets(): Promise<Pet[]> {
  const { data, error } = await supabase
    .from('pets')
    .select('*')
    .eq('status', 'available')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching pets:', error)
    return []
  }

  return data || []
}

export async function getAllPets(): Promise<Pet[]> {
  const { data, error } = await supabase
    .from('pets')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching all pets:', error)
    return []
  }

  return data || []
}

export async function addPet(pet: Omit<Pet, 'id' | 'created_at' | 'updated_at'>): Promise<Pet | null> {
  const { data, error } = await supabase
    .from('pets')
    .insert([pet])
    .select()
    .single()

  if (error) {
    console.error('Error adding pet:', error)
    return null
  }

  return data
}

export async function updatePet(id: string, updates: Partial<Pet>): Promise<Pet | null> {
  const { data, error } = await supabase
    .from('pets')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating pet:', error)
    return null
  }

  return data
}

export async function deletePet(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('pets')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting pet:', error)
    return false
  }

  return true
}
