# Project 6

A browser-based 3D block viewer built with Three.js. Walk around a flat world and browse all available blocks in an inventory panel.

## Running

Install dependencies with `npm install`, then run `npm run dev` for local development. Vite will serve the project from `index.html` and load `src/main.ts` as the entry point.

Build a production bundle with `npm run build`, and preview the production output locally with `npm run preview`.

The application source is now fully TypeScript-based. Shared project-wide contracts still live in [types.d.ts](types.d.ts).

## Configuration

All parameters are in `src/config.ts`.

| Constant                               | Description                                             |
| -------------------------------------- | ------------------------------------------------------- |
| `DEFAULT_KEYS_PRESET`                  | Key bindings for movement and UI actions                |
| `INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS` | Block texture sheet source, layout, and render settings |
| `gameParams`                           | Combined runtime config passed to `initSystem`          |
| `WORLD_PARAMS`                         | Block size, world dimensions, starting position         |
| `SCENE_INIT_CONFIG`                    | Camera, lighting, renderer, and grid                    |
| `SYSTEM_INIT_CONFIG`                   | Player block, spawn position, action names              |

### Block texture sheet source

`INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS.source` controls how block icons are loaded:

- `"static"` — loads `/assets/images/block-texture-sheet.png` (fast, requires the pre-built image).
- `"generated"` — renders each block with Three.js at startup (slow, no pre-built image needed) but gives you a download button if you want to download the texture sheet for yourself again.

## Structure

```
generators/                 World fill utilities
lib/base/                   Abstract base classes for player, controller, system, and UI
lib/controls/               InputManager, KeyMap, KeyStore
src/config.ts               Global constants and runtime configuration
src/main.ts                 Bootstrap entry point
src/blockTextureSheetLayout.ts
                            Shared block texture sheet layout helpers
src/generateBlockTextureSheet.ts
                            Runtime block texture sheet generation
src/engine/                 Rendering, atlas, loader, system, and controller logic
src/impl/                   Concrete gameplay and inventory implementations
src/init/                   Scene, system, UI, worldgen, and static sheet initialization
generators/fill.ts          Instanced world fill generation
types.d.ts                  Shared project-wide type contracts
```
