import { Flag } from "lucide-react";
import { Card, CardHeader } from "@/components/ui";

const SLOTS = [1, 2, 3] as const;

/** Las tres prioridades del día. Sin datos aún: tres espacios vacíos. */
export function DailyPrioritiesCard() {
  return (
    <Card>
      <CardHeader title="Tres prioridades del día" icon={Flag} />
      <ol className="space-y-2">
        {SLOTS.map((slot) => (
          <li
            key={slot}
            className="flex items-center gap-3 rounded-xl border border-dashed border-line px-3 py-2.5"
          >
            <span className="grid size-6 place-items-center rounded-full bg-surface-2 text-xs font-semibold text-muted">
              {slot}
            </span>
            <span className="text-sm text-muted">Sin definir</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[11px] text-muted">Podrás elegirlas desde tus tareas (Fase 5).</p>
    </Card>
  );
}
