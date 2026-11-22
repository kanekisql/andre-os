import { Zap } from "lucide-react";
import { Card, CardHeader, ProgressBar } from "@/components/ui";

/** Nivel y XP. Sin sistema de XP aún: no se muestra ningún nivel inventado. */
export function LevelCard() {
  return (
    <Card>
      <CardHeader title="Nivel y experiencia" icon={Zap} />
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-ink">—</span>
        <span className="text-xs text-muted">XP sin conectar</span>
      </div>
      <ProgressBar value={0} label="Progreso al siguiente nivel" className="mt-3" />
      <p className="mt-3 text-[11px] text-muted">El XP se calcula al completar tareas (Fase 7).</p>
    </Card>
  );
}
