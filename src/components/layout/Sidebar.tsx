import { NavLink } from "react-router-dom";
import { X, Zap } from "lucide-react";
import { primaryNav, secondaryNav, type NavItem } from "@/app/navigation";
import { cn } from "@/lib/cn";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function NavItemLink({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-150",
          isActive
            ? "bg-brand/15 text-ink ring-1 ring-brand/30"
            : "text-muted hover:bg-surface-2 hover:text-ink",
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon className={cn("size-4 shrink-0", isActive ? "text-brand" : "")} aria-hidden />
          <span className="truncate">{item.label}</span>
        </>
      )}
    </NavLink>
  );
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open ? (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden
        />
      ) : null}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-line bg-surface px-3 py-4",
          "transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Navegación principal"
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/30">
              <Zap className="size-5" aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">ANDRE OS</p>
              <p className="text-[11px] text-muted">Centro de control</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-ink lg:hidden"
            aria-label="Cerrar menú"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {primaryNav.map((item) => (
            <NavItemLink key={item.path} item={item} onNavigate={onClose} />
          ))}
        </nav>

        <div className="mt-4 border-t border-line pt-4">
          {secondaryNav.map((item) => (
            <NavItemLink key={item.path} item={item} onNavigate={onClose} />
          ))}
        </div>
      </aside>
    </>
  );
}
