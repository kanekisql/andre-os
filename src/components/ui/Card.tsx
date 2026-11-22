import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-card border border-line bg-surface p-5 animate-fade-up", className)}
      {...props}
    />
  );
}

interface CardHeaderProps {
  title: string;
  icon?: LucideIcon;
  action?: ReactNode;
  className?: string;
}

export function CardHeader({ title, icon: Icon, action, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-4 flex items-center justify-between gap-3", className)}>
      <div className="flex items-center gap-2">
        {Icon ? <Icon className="size-4 text-brand" aria-hidden /> : null}
        <h2 className="text-sm font-semibold tracking-wide text-ink">{title}</h2>
      </div>
      {action}
    </div>
  );
}
