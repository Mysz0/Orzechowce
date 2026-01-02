import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client using the service role key.
// Bypasses RLS for trusted admin actions that run only on the server.
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)