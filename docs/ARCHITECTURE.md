# Arquitectura de ANDRE OS

Filosofía: **capturar todo, priorizar poco y ejecutar todos los días.**

## Visión general

```
Navegador (React SPA)  ──►  Supabase (Auth + PostgREST + RLS)  ──►  PostgreSQL
        ▲
GitHub ──► Vercel (build Vite, rewrite SPA)
```

- **Frontend**: React 19, Vite, TypeScript estricto, Tailwind v4, React Router, Lucide, TanStack Query.
- **Backend**: Supabase. El cliente usa solo la clave publicable; la seguridad real está en **RLS**.
- **Persistencia**: PostgreSQL. Nada de LocalStorage como base de datos.

## Estructura de carpetas

```
src/
  app/            Arranque: router, providers, configuración de navegación
  components/
    ui/           Piezas visuales reutilizables (Button, Card, Badge, ProgressBar...)
    layout/       AppShell, Sidebar, PageHeader
  features/       Un módulo por dominio (dashboard, inbox, tasks, goals, habits, finance...)
  hooks/          Hooks transversales (p. ej. reconocimiento de voz)
  lib/            Utilidades y clientes (supabase, cn, fechas)
  pages/          Páginas genéricas (módulos aún no construidos)
supabase/
  migrations/     SQL versionado (se revisa y aprueba antes de ejecutar)
docs/             Documentación
```

Regla: lo específico de un módulo vive en `features/<módulo>/`; lo compartido sube a `components/`, `hooks/` o `lib/`.

## Decisiones técnicas

| Decisión | Motivo |
|---|---|
| Tailwind v4 con tokens en `@theme` | Un único lugar para la paleta morado/azul/gris del modo oscuro |
| Cliente Supabase nulo si faltan variables | La app abre y avisa, en lugar de romperse |
| TanStack Query para datos remotos | Caché, estados de carga/error y reintentos sin código repetido |
| Navegación definida como datos (`app/navigation.ts`) | Sidebar, rutas y páginas pendientes salen de una sola fuente |
| Estados vacíos en lugar de datos de ejemplo | No presentar simulaciones como reales |

## Privacidad del micrófono

La captura por voz usa la **Web Speech API del navegador**. Esta aplicación no graba ni envía audio a ningún servicio propio. Sin embargo, en algunos navegadores (por ejemplo Chrome) el propio navegador procesa la voz en servidores de su proveedor. Si el navegador no la soporta, queda el ingreso por teclado.

## Fases

| Fase | Contenido | Estado |
|---|---|---|
| 1 | Inspección de entorno e integraciones | Hecha |
| 2 | Proyecto React + Vite + TS + Tailwind, diseño y navegación | **Primer entregable escrito; falta compilar** |
| 3 | Supabase: migraciones, RLS y autenticación | Pendiente (SQL se revisa antes de ejecutar) |
| 4 | Dashboard con datos reales, categorías, bandeja y tareas | Pendiente |
| 5 | Kanban, calendario, prioridades diarias | Pendiente |
| 6 | Objetivos y hábitos | Pendiente |
| 7 | Gamificación y XP | Pendiente |
| 8 | Voz (ya hay hook base) y temporizador de 5 minutos | Parcial |
| 9 | Módulo financiero | Pendiente |
| 10 | Pruebas integrales, seguridad, optimización | Pendiente |
| 11 | GitHub y despliegue en Vercel | Pendiente |
