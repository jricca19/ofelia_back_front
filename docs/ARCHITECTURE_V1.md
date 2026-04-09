# OFELIA Web - Architecture V1 (App Router)

## Goals
- Keep App Router as the routing system.
- Separate UI by responsibility and feature context.
- Keep domain/application/infrastructure independent from UI.
- Use one import style across the codebase.

## Import Conventions (Mini Guide)
Use aliases from `tsconfig.json` and avoid `@/app/...` imports.

Rules:
1. Do not mix relative deep imports like `../../..` when an alias exists.
2. Keep shared contracts in `types/` only.
3. Route files in `app/` should orchestrate; business logic stays in application/domain/infrastructure.

## Folder Structure 

## Component Responsibility


## Performance Baseline
- Prefer `next/image` for all content images.
- Configure external image hosts in `next.config.ts` (`images.remotePatterns`).

## Evolution Path (When Needed)

