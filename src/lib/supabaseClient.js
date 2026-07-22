import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase URL or Anon Key is missing. Please check your .env file to configure them.'
  );
}

const safeUrl = supabaseUrl && supabaseUrl !== 'your-supabase-project-url' ? supabaseUrl : 'https://placeholder.supabase.co';
const safeKey = supabaseAnonKey && supabaseAnonKey !== 'your-supabase-anon-key' ? supabaseAnonKey : 'placeholder-anon-key';

export const supabase = createClient(safeUrl, safeKey);
