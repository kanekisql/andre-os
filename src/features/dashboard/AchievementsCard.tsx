import { Trophy } from "lucide-react";
import { Card, CardHeader, EmptyState } from "@/components/ui";

export function AchievementsCard() {
  return (
    <Card>
      <CardHeader title="Últimos logros" icon={Trophy} />
      <EmptyState
        icon={Trophy}
        title="Aún no hay logros"
        description="Cuando completes tu primera tarea empezarás a desbloquearlos (Fase 7)."
      />
    </Card>
  );
}
