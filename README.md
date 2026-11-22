# ANDRE OS

Mi centro de control personal: tareas, objetivos, hábitos, finanzas y progreso, en una sola aplicación.

> Capturar todo, priorizar poco y ejecutar todos los días.

## Stack
React · Vite · TypeScript · Tailwind CSS v4 · React Router · Lucide · TanStack Query · Supabase (Postgres + Auth + RLS) · Vercel

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # completa con la URL y la clave publicable de Supabase
npm run dev
```

Scripts: `npm run dev`, `npm run typecheck`, `npm run build`, `npm run preview`.

## Documentación
- [Arquitectura y fases](docs/ARCHITECTURE.md)
- [Reglas para agentes y flujo de ramas](AGENTS.md)

## Estado
Primer entregable visual: layout, sidebar, dashboard base y componentes reutilizables.
Los datos reales llegan con la integración de Supabase (Fases 3 y 4).
