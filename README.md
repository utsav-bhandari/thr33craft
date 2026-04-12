# Project 6

A browser-based 3D block explorer built with Three.js, Vite, and TypeScript. The app boots a chunked flat world, lets you move with pointer lock, and opens an inventory modal to browse and search available blocks.

## Running

Install dependencies with `npm install`.

- `npm run dev` — start the local Vite development server.
- `npm run build` — build the production bundle.
- `npm run preview` — preview the production build locally.
- `npm run typecheck` — run TypeScript checks with `tsc`.

The application is fully TypeScript based. Shared project-wide type contracts live in [types.d.ts](types.d.ts).

## Highlights

- Chunked world loading with `ChunkLoader` and `World-Generator`
- Inventory modal with searchable block grid
- Block texture sheet can load from a static asset or be generated at runtime
- Optional download support for generated block sheets
- Pointer lock and UI modal controls for gameplay

## Configuration

All runtime config lives in `src/utils/config.ts`.

| Constant                               | Description                                          |
| -------------------------------------- | ---------------------------------------------------- |
| `DEFAULT_KEYS_PRESET`                  | Key bindings for movement and UI actions             |
| `INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS` | Texture sheet source, layout, and render settings    |
| `gameParams`                           | DOM elements, player settings, and UI parameters     |
| `WORLD_PARAMS`                         | Chunk sizing, block size, and starting position      |
| `SCENE_INIT_CONFIG`                    | Camera, lighting, renderer, and fog settings         |
| `SYSTEM_INIT_CONFIG`                   | Player spawn block, spawn position, and action names |

### Block texture sheet source

`INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS.source` controls how block icons are loaded:

- `"static"` — loads `/assets/images/block-texture-sheet.png` from the built assets.
- `"generated"` — renders each block dynamically at startup and updates the inventory UI with progress.

## Project structure

```
index.html                   HTML entrypoint for Vite
package.json                 NPM scripts and dependencies
tsconfig.json                TypeScript configuration
vite.config.ts              Vite bundler configuration
types.d.ts                  Shared project-wide type contracts

src/main.ts                 App bootstrap and render loop
src/init/                   Scene, system, and UI initialization
src/init/block-registry.ts  Registered block names for inventory and world
src/engine/                 Game systems, world loader, and UI handler
src/engine/world/           World generation and chunked world loading
src/impl/inventory/         Inventory UI, search, status, and grid components
src/utils/                  Runtime config, helpers, constants, logger

lib/texture/                Block texture sheet generation and loading
lib/base/                   Base classes for systems, UI, and controllers
lib/controls/               Input management and key mapping
```
