
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qgqzcpktdiudtgjnudwl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFncXpjcGt0ZGl1ZHRnam51ZHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MTY5NTgsImV4cCI6MjA2MjI5Mjk1OH0.n_cbpz62kYQCHVlMCBcAsmd9Sb3DRKggi0kV_2x44WA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    storage: localStorage
  }
});
