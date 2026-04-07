# OFELIA Web - Architecture V1 (App Router)

## Goals
- Keep App Router as the routing system.
- Separate UI by responsibility and feature context.
- Keep domain/application/infrastructure independent from UI.
- Use one import style across the codebase.

## Import Conventions (Mini Guide)

Use aliases from `tsconfig.json` and avoid `@/app/...` imports.

- `@/components/*` -> `components/*`
- `@/domain/*` -> `domain/*`
- `@/application/*` -> `application/*`
- `@/infrastructure/*` -> `infrastructure/*`
- `@/lib/*` -> `lib/*`
- `@/types/*` -> `types/*`

Rules:
1. Do not mix relative deep imports like `../../..` when an alias exists.
2. Keep shared contracts in `types/` only.
3. Route files in `app/` should orchestrate; business logic stays in application/domain/infrastructure.

## Folder Structure V1

```text
app/
  api/
    products/
      route.ts
      [id]/
        route.ts
  favicon.ico
  globals.css
  layout.tsx
  page.tsx

components/
  home/
    home-page.tsx
    sections/
      collection-section.tsx
      contact-section.tsx
      hero-section.tsx
      history-section.tsx
      nav-links.ts
      site-footer.tsx
      site-header.tsx
    ui/
      availability-modal.tsx

domain/
  product.ts

application/
  get-products.ts

infrastructure/
  product-repository.ts
  supabase-client.ts

lib/

types/
  collection-item.ts
  product.ts

docs/
  ARCHITECTURE_V1.md
```

## Component Responsibility
- `home-page.tsx`: page orchestrator and local UI state.
- `home/sections/*`: presentation blocks by section.
- `home/ui/*`: UI elements scoped to Home (reusable within Home).

## Performance Baseline
- Prefer `next/image` for all content images.
- Configure external image hosts in `next.config.ts` (`images.remotePatterns`).

## Evolution Path (When Needed)
1. Move static data from local fixtures to API/CMS.
2. Add route groups in App Router: `app/(marketing)` and `app/(catalog)`.
3. Add server actions or dedicated services under `application/` for forms.
