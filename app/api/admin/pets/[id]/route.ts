import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { data, error } = await supabaseAdmin
    .from('pets')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error) {
    console.error('Error fetching pet (admin):', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json()

  const { data, error } = await supabaseAdmin
    .from('pets')
    .update(body)
    .eq('id', params.id)
    .select()
    .single()

  if (error) {
    console.error('Error updating pet (admin):', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const { error } = await supabaseAdmin
    .from('pets')
    .delete()
    .eq('id', params.id)

  if (error) {
    console.error('Error deleting pet (admin):', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}