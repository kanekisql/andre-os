import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui";

/** "MI SIGUIENTE ACCIÓN": mostrará una tarea pequeña lista para empezar (Fase 4). */
export function NextActionCard() {
  return (
    <Card className="relative overflow-hidden border-brand/30 bg-gradient-to-br from-brand/15 via-surface to-surface">
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
          <Sparkles className="size-3.5" aria-hidden />
          Mi siguiente acción
        </div>
        <h2 className="text-xl font-semibold text-ink sm:text-2xl">Todavía no hay una acción elegida</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          Aquí verás una tarea pequeña que puedas empezar ahora mismo. Se activa cuando existan tareas guardadas.
        </p>
        <Link
          to="/bandeja"
          className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl border border-line bg-surface-2 px-4 text-sm font-medium text-ink transition-colors hover:border-brand/50"
        >
          Ver la bandeja
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </Card>
  );
}
