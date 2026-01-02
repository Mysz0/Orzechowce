import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('pets')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching pets (admin):', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data ?? [])
}

export async function POST(request: Request) {
  const body = await request.json()

  const { data, error } = await supabaseAdmin
    .from('pets')
    .insert([body])
    .select()
    .single()

  if (error) {
    console.error('Error adding pet (admin):', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}