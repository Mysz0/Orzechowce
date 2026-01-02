import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: '' }))

  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    return NextResponse.json({ error: 'ADMIN_PASSWORD not set' }, { status: 500 })
  }

  const ok = typeof password === 'string' && password === adminPassword
  if (!ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ ok: true })
}