import { AlertCircle, CheckCircle2, Flame, ListChecks } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatCard } from "@/components/ui";
import { formatLongDate, getGreeting } from "@/lib/date";
import { AchievementsCard } from "./AchievementsCard";
import { CaptureIdeaCard } from "./CaptureIdeaCard";
import { ConnectionBanner } from "./ConnectionBanner";
import { DailyPrioritiesCard } from "./DailyPrioritiesCard";
import { GoalsCard } from "./GoalsCard";
import { HabitsCard } from "./HabitsCard";
import { LevelCard } from "./LevelCard";
import { NextActionCard } from "./NextActionCard";
import { WeeklyProgressCard } from "./WeeklyProgressCard";

export function DashboardPage() {
  const now = new Date();

  return (
    <>
      <PageHeader title={getGreeting(now)} description={formatLongDate(now)} />
      <ConnectionBanner />

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <NextActionCard />
        </div>
        <div className="lg:col-span-2">
          <CaptureIdeaCard />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Pendientes" value={null} icon={ListChecks} />
        <StatCard label="Completadas" value={null} icon={CheckCircle2} />
        <StatCard label="Atrasadas" value={null} icon={AlertCircle} />
        <StatCard label="Racha actual" value={null} icon={Flame} />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DailyPrioritiesCard />
        <WeeklyProgressCard />
        <LevelCard />
        <GoalsCard />
        <HabitsCard />
        <AchievementsCard />
      </div>
    </>
  );
}
