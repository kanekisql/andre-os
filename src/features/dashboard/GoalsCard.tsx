import { Target } from "lucide-react";
import { Card, CardHeader, EmptyState } from "@/components/ui";

export function GoalsCard() {
  return (
    <Card>
      <CardHeader title="Objetivos activos" icon={Target} />
      <EmptyState
        icon={Target}
        title="Sin objetivos todavía"
        description="Tus objetivos de seis meses y su progreso aparecerán aquí (Fase 6)."
      />
    </Card>
  );
}
