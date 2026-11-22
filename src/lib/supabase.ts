import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

/**
 * Indica si las variables de entorno están presentes.
 * No garantiza que la conexión funcione: solo que el cliente pudo crearse.
 */
export const isSupabaseConfigured = Boolean(url && publishableKey);

/**
 * Cliente de Supabase para el navegador. Usa únicamente la clave publicable;
 * la protección de los datos depende de las políticas RLS en la base de datos.
 * Es `null` si faltan las variables de entorno.
 */
export const supabase: SupabaseClient | null =
  url && publishableKey
    ? createClient(url, publishableKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      })
    : null;
