import { Hammer } from "lucide-react";
import type { NavItem } from "@/app/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge, Card, EmptyState } from "@/components/ui";

/** Página honesta para módulos que todavía no existen: dice qué es y en qué fase llegará. */
export function PlaceholderPage({ item }: { item: NavItem }) {
  return (
    <>
      <PageHeader
        title={item.label}
        description={item.description}
        actions={item.phase ? <Badge tone="warning">Fase {item.phase}</Badge> : undefined}
      />
      <Card>
        <EmptyState
          icon={Hammer}
          title="Este módulo aún no está construido"
          description={
            item.phase
              ? `Se desarrolla en la Fase ${item.phase} del plan. Todavía no guarda ni muestra datos.`
              : "Todavía no guarda ni muestra datos."
          }
        />
        {item.planned.length > 0 ? (
          <div className="mt-2 border-t border-line pt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">Incluirá</p>
            <ul className="space-y-1.5 text-sm text-ink/90">
              {item.planned.map((entry) => (
                <li key={entry} className="flex items-start gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" aria-hidden />
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Card>
    </>
  );
}
