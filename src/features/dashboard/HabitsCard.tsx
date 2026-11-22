import { Repeat } from "lucide-react";
import { Card, CardHeader, EmptyState } from "@/components/ui";

export function HabitsCard() {
  return (
    <Card>
      <CardHeader title="Hábitos de hoy" icon={Repeat} />
      <EmptyState
        icon={Repeat}
        title="Sin hábitos todavía"
        description="Aquí marcarás tus hábitos diarios y verás tu racha (Fase 6)."
      />
    </Card>
  );
}
