# [THR33CRAFT](https://utsav-bhandari.github.io/thr33craft/landing.html)

A browser-based voxel sandbox built with Three.js, Vite, and TypeScript. The app boots a chunked 3D world, locks the pointer for first-person movement, streams nearby chunks around the player, and uses an inventory plus hotbar flow for selecting and placing blocks.

## Tech stack

- TypeScript for all application code
- Vite for development and bundling
- Three.js for rendering, scene setup, and camera control
- lil-gui for runtime debug controls

Shared project-wide type contracts live in [types.d.ts](types.d.ts).

## Running

Install dependencies:

```bash
npm install
```

Available scripts:

- `npm run dev` starts the Vite development server.
- `npm run build` creates the production bundle.
- `npm run preview` serves the production build locally.
- `npm run typecheck` runs `tsc --noEmit -p tsconfig.json`.

## Highlights

- First-person movement with pointer lock and configurable key bindings
- Chunked voxel world loading around the player
- Block targeting with an outline highlight
- Block breaking, placement, and rotation
- Inventory modal with searchable block browsing
- Nine-slot hotbar with scroll-wheel and number-key selection
- Optional HUD with position, chunk, frame-time, and pointer/UI status

## Controls

Default controls are defined in [src/utils/config.ts](src/utils/config.ts).

- `W A S D` move
- `Space` ascend
- `C` descend
- `Shift` sprint
- `Mouse` look around
- `Left Click` break block
- `Right Click` place block
- `Middle Click` pick the targeted block into the hotbar
- `R` rotate the targeted block
- `E` toggle inventory
- `F` toggle menu
- `H` toggle HUD and chunk wireframes
- `Q` remove the active hotbar item
- `1` through `9` select hotbar slots

## Startup flow

1. [index.html](index.html) loads [src/main.ts](src/main.ts).
2. [src/main.ts](src/main.ts) reads scene and system configuration from [src/utils/config.ts](src/utils/config.ts).
3. [src/init/scene.ts](src/init/scene.ts) creates the Three.js scene, renderer, camera, lighting, fog, and pointer-lock controls.
4. [src/init/system.ts](src/init/system.ts) creates input management, the player, chunk loader, HUD, UI handler, inventory, hotbar, and runtime systems.
5. The render loop calls `system.animate(...)`, which updates movement, chunk streaming, targeting, interaction, HUD state, and rendering each frame.

## Configuration

Most runtime knobs live in [src/utils/config.ts](src/utils/config.ts).

Important exports:

- `DEFAULT_KEYS_PRESET` maps gameplay actions to keyboard and mouse input.
- `INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS` controls how inventory block icons are loaded.
- `gameParams` wires required DOM elements and player defaults into the app.
- `PLAYER_COLLISION` defines collision padding and maximum simulation step size.
- `INTERACTION_PARAMS` defines reach distance and repeat timing for break and place actions.
- `WORLD_PARAMS` controls world boundaries, chunk load cadence, render distance, and spawn position.
- `SCENE_INIT_CONFIG` configures camera, fog, renderer, helpers, and lighting.
- `SYSTEM_INIT_CONFIG` configures player spawn state and action names.

### Inventory texture sheet source

`INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS.source` controls how block icons are loaded:

- `"static"` loads the prebuilt sheet from `/images/block-texture-sheet.png`.
- `"generated"` renders icons at startup and streams progress into the inventory UI.

## Project structure

```text
index.html                              HTML entrypoint for Vite
package.json                            Scripts and dependencies
tsconfig.json                           TypeScript configuration
vite.config.ts                          Vite configuration
types.d.ts                              Shared application types

styles/                          Global and UI styles
images/                          Icons and static image assets
blocks/                          Block-related static assets

lib/base/                               Reusable base classes for systems, UI, and controllers
lib/controls/                           Input mapping and pressed-key state management
lib/texture/                            Block mesh, atlas, and texture-sheet utilities

src/main.ts                             Application bootstrap and render-loop setup
src/blocks.json                         Static block registry data
src/init/                               Scene, system, UI, and block-registry initialization
src/engine/controllers/                 Player movement and collision logic
src/engine/generators/                  World-generation helpers
src/engine/systems/                     Gameplay, targeting, interaction, HUD, and main engine loop
src/engine/targeting/                   Voxel raycast helpers used by targeting systems
src/engine/ui/                          UI orchestration and modal coordination
src/engine/world/                       Chunk management, meshing, planning, and world generation
src/impl/Player.ts                      Concrete player implementation
src/impl/inventory/                     Inventory, search, grid, hotbar, and state components
src/utils/                              Shared config, constants, helpers, and logging
```

## Key runtime areas

### Engine systems

- [src/engine/systems/System.ts](src/engine/systems/System.ts) is the top-level runtime coordinator used by the render loop.
- [src/engine/systems/BlockTargetingSystem.ts](src/engine/systems/BlockTargetingSystem.ts) finds the currently targeted voxel and manages the outline highlight.
- [src/engine/systems/BlockInteractionSystem.ts](src/engine/systems/BlockInteractionSystem.ts) handles break, place, and rotate actions.
- [src/engine/systems/HUDSystem.ts](src/engine/systems/HUDSystem.ts) renders runtime diagnostics and world status.

### World pipeline

- [src/engine/world/chunk/ChunkLoader.ts](src/engine/world/chunk/ChunkLoader.ts) manages chunk loading, caching, and world updates.
- [src/engine/world/chunk/ChunkManager.ts](src/engine/world/chunk/ChunkManager.ts) stores and resolves loaded chunk state.
- [src/engine/world/chunk/ChunkMeshManager.ts](src/engine/world/chunk/ChunkMeshManager.ts) handles chunk mesh rebuilds and scene mesh updates.
- [src/engine/world/World-Generator.ts](src/engine/world/World-Generator.ts) defines terrain generation behavior.

### UI and inventory

- [src/init/ui.ts](src/init/ui.ts) builds the menu and inventory modal flow.
- [src/engine/ui/UIHandler.ts](src/engine/ui/UIHandler.ts) coordinates modals and pointer-lock/UI state.
- [src/impl/inventory/Inventory.ts](src/impl/inventory/Inventory.ts) owns the inventory modal, loading states, and block selection events.
- [src/impl/inventory/Hotbar.ts](src/impl/inventory/Hotbar.ts) renders the player hotbar and active slot state.

## Development notes

- The codebase uses path aliases such as `@/` and `@lib/`, configured in [tsconfig.json](tsconfig.json).
- Block definitions are loaded from [src/blocks.json](src/blocks.json) through [src/init/block-registry.ts](src/init/block-registry.ts).
- [src/main.ts](src/main.ts) exposes `globalThis.system` and `globalThis.scene` for browser-console debugging.
- The menu includes a reset action that reloads the page and recreates world state.
