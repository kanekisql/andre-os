# AGENTS.md — Reglas para agentes (Claude y Codex)

Este archivo lo leen tanto Codex como Claude. Léelo completo antes de tocar código.

## Proyecto
ANDRE OS: centro de control personal (tareas, objetivos, hábitos, finanzas, gamificación).
Stack: React 19 + Vite + TypeScript + Tailwind CSS v4 + React Router + Supabase (Postgres, Auth, RLS) + TanStack Query. Despliegue en Vercel desde GitHub.

## Reparto de roles
- **Claude**: arquitectura, diseño de base de datos, migraciones SQL, revisión técnica, coordinación de fases.
- **Codex**: implementación de funcionalidades, pruebas, corrección de errores, revisión de cambios.
- **Andre (dueño)**: aprueba migraciones SQL, RLS y cualquier acción sobre Supabase, GitHub y Vercel.

## Reglas inviolables
1. **No ejecutes migraciones SQL ni cambies Supabase sin aprobación explícita de Andre.** Las migraciones viven en `supabase/migrations/` y se revisan antes.
2. **Nunca subas secretos.** Solo claves públicas en `.env.local` (ignorado por git). Jamás `service_role`.
3. **No uses datos simulados como si fueran reales.** Si algo aún no tiene datos, muestra un estado vacío honesto.
4. **No dejes botones sin acción.** Si una función no existe aún, no renderices el botón o déjalo `disabled` con explicación.
5. Cada formulario valida sus datos; cada operación asíncrona maneja carga y error.
6. No uses LocalStorage como base de datos. Los datos viven en Postgres.
7. Todas las tablas privadas tienen RLS con políticas explícitas por `auth.uid()`.
8. No toques otros repositorios.

## Flujo de trabajo para evitar conflictos
- `main` es estable y siempre compila. **Nadie hace commits directos a `main`** salvo el commit inicial.
- Cada agente trabaja en su propia rama: `claude/<tema>` o `codex/<tema>`.
- Una rama = una tarea acotada. Antes de empezar: `git pull --rebase origin main`.
- Dos agentes **no editan los mismos archivos a la vez**. Si hace falta, se reparten por carpeta (`src/features/<módulo>/`).
- Se integra mediante Pull Request y revisión cruzada (lo que escribe uno lo revisa el otro).
- Commits pequeños y descriptivos, en español o inglés pero consistentes.
- Antes de abrir un PR: `npm run typecheck` y `npm run build` deben pasar.

## Convenciones de código
- Estructura por funcionalidades: `src/features/<módulo>/` con sus componentes, hooks y consultas.
- Componentes reutilizables en `src/components/ui/`; layout en `src/components/layout/`.
- Alias `@/` apunta a `src/`.
- Imports de tipos con `import type` (activado `verbatimModuleSyntax`).
- Estilos con Tailwind y los tokens de `src/index.css` (`bg-canvas`, `bg-surface`, `text-muted`, `text-brand`, etc.). No hardcodear colores.
- Nombres de tablas y columnas en inglés `snake_case`; textos de interfaz en español.

## Comandos
- `npm install` · `npm run dev` · `npm run typecheck` · `npm run build`

## Estado por fases
Ver `docs/ARCHITECTURE.md`.
