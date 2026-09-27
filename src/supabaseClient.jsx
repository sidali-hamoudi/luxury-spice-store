import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://melzaiyijxmnwpfbqdyw.supabase.co"
const supabaseAnonKey ="sb_publishable_tKMduEg5E_lcnLM8Hy_tlw_iVyO9QSi"
export const supabase = createClient(supabaseUrl,supabaseAnonKey)