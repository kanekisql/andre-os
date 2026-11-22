import { TrendingUp } from "lucide-react";
import { Card, CardHeader } from "@/components/ui";

const DAYS = ["L", "M", "X", "J", "V", "S", "D"] as const;

/** Progreso semanal. Las barras quedan vacías: no hay datos que graficar todavía. */
export function WeeklyProgressCard() {
  return (
    <Card>
      <CardHeader title="Progreso semanal" icon={TrendingUp} />
      <div className="flex h-28 items-end justify-between gap-2" aria-hidden>
        {DAYS.map((day) => (
          <div key={day} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-full w-full items-end rounded-lg bg-surface-2">
              <div className="h-1 w-full rounded-lg bg-line" />
            </div>
            <span className="text-[11px] font-medium text-muted">{day}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-muted">Se llenará con las tareas que completes cada día.</p>
    </Card>
  );
}
