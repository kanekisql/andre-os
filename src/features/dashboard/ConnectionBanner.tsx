import { Database } from "lucide-react";
import { Badge } from "@/components/ui";
import { isSupabaseConfigured } from "@/lib/supabase";

/** Estado honesto: solo informa si las variables de entorno existen, no si hay datos. */
export function ConnectionBanner() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-line bg-surface px-4 py-3">
      <Database className="size-4 text-muted" aria-hidden />
      <p className="text-xs text-muted">
        Vista inicial: aún no hay datos conectados. Las cifras aparecerán cuando se integre la base de datos
        (Fases 3 y 4).
      </p>
      <Badge tone={isSupabaseConfigured ? "success" : "warning"} className="ml-auto">
        {isSupabaseConfigured ? "Variables de Supabase detectadas" : "Supabase sin configurar"}
      </Badge>
    </div>
  );
}
