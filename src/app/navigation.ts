import {
  CalendarDays,
  Inbox,
  LayoutDashboard,
  ListTodo,
  Repeat,
  Settings,
  Target,
  Trophy,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
  /** Fase del plan en la que el módulo se construye (ver docs/ARCHITECTURE.md). */
  phase?: number;
  /** Qué hará el módulo. Se muestra en la página mientras no esté construido. */
  description: string;
  planned: string[];
}

export const primaryNav: NavItem[] = [
  {
    path: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Tu panorama diario: prioridades, progreso y siguiente acción.",
    planned: [],
  },
  {
    path: "/bandeja",
    label: "Bandeja",
    icon: Inbox,
    phase: 4,
    description: "Captura rápida de ideas y pendientes, por teclado o por voz.",
    planned: ["Crear tareas al instante", "Ideas sin categoría", "Clasificar después", "Dictado por voz"],
  },
  {
    path: "/tareas",
    label: "Tareas",
    icon: ListTodo,
    phase: 5,
    description: "Tablero Kanban con cuatro columnas y arrastrar y soltar.",
    planned: ["Por hacer, En proceso, En espera, Completado", "Filtros, búsqueda y orden", "Prioridad y fecha límite"],
  },
  {
    path: "/calendario",
    label: "Calendario",
    icon: CalendarDays,
    phase: 5,
    description: "Vistas diaria, semanal y mensual de tus tareas.",
    planned: ["Vista diaria, semanal y mensual", "Crear y editar desde el calendario"],
  },
  {
    path: "/objetivos",
    label: "Objetivos",
    icon: Target,
    phase: 6,
    description: "Objetivos de seis meses divididos en metas pequeñas.",
    planned: ["Progreso y evolución mensual", "Tareas relacionadas", "Categoría y estado"],
  },
  {
    path: "/habitos",
    label: "Hábitos",
    icon: Repeat,
    phase: 6,
    description: "Hábitos diarios y semanales con rachas y consistencia.",
    planned: ["Calendario de cumplimiento", "Rachas e historial", "Descansos planificados sin penalización"],
  },
  {
    path: "/finanzas",
    label: "Finanzas",
    icon: Wallet,
    phase: 9,
    description: "Ingresos, gastos y ventas por negocio, en PEN.",
    planned: ["Resumen mensual", "Movimientos por negocio", "Filtros por categoría"],
  },
  {
    path: "/logros",
    label: "Logros",
    icon: Trophy,
    phase: 7,
    description: "XP, niveles, insignias y rachas.",
    planned: ["XP sin duplicados", "Niveles e insignias", "Historial de experiencia"],
  },
];

export const secondaryNav: NavItem[] = [
  {
    path: "/ajustes",
    label: "Ajustes",
    icon: Settings,
    phase: 3,
    description: "Perfil, categorías y preferencias.",
    planned: ["Perfil del usuario", "Categorías con colores e iconos", "Cierre de sesión"],
  },
];

export const allNav: NavItem[] = [...primaryNav, ...secondaryNav];
