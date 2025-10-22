# Project Reorganization TODO

## Phase 1: Structure Reorganization
### Step 1: Remove Unwanted Files and Folders
- [x] Remove the duplicate `devcore-ai-sdlc-planner/` folder entirely.
- [x] Remove `.gitignore` and `.gitattributes` files.
- [x] Remove artifact files: `metadata.json`, `components.json` (if not needed for shadcn/ui, but keep if critical).

### Step 2: Create New Directory Structure
- [x] Create `public/` directory.
- [x] Create `src/` directory with subdirectories: `components/`, `pages/`, `layouts/`, `hooks/`, `context/`, `utils/`, `services/`, `store/`, `routes/`.

### Step 3: Move Files to Appropriate Locations
- [x] Move `index.html` to `public/`.
- [x] Move `index.css` to `src/` (or `public/` if needed, but typically src).
- [x] Move `App.tsx`, `index.tsx`, `constants.ts`, `types.ts` to `src/`.
- [x] Move `components/` folder to `src/components/`.
- [x] Move `lib/` to `src/utils/`.
- [x] Move `services/` to `src/services/`.
- [x] Move `store/` to `src/store/`.

### Step 4: Reorganize Components
- [x] Move page-like components to `src/pages/`: ComingSoon.tsx, Community.tsx, Dashboard.tsx, Deployment.tsx, Learn.tsx, Maintenance.tsx, Planning.tsx, ProjectPlanner.tsx, Projects.tsx, Testing.tsx.
- [x] Move layout components to `src/layouts/`: Header.tsx, Sidebar.tsx, and subfolder `header/` (rename to `src/layouts/header/`).
- [x] Move context to `src/context/`: ThemeContext.tsx.
- [x] Keep reusable components in `src/components/`: PhaseCard.tsx, ToolChip.tsx, NavItem.tsx, etc., and subfolders `icons/`, `ui/`.

### Step 5: Update Imports
- [x] Update all import statements in moved files to reflect new paths (e.g., from `../components/Header` to `../layouts/Header`).
- [x] Ensure relative imports are correct after moves.

### Step 6: Verify and Test
- [x] Check that the project builds and runs without errors.
- [x] Update any configuration files if paths changed (e.g., vite.config.ts for entry points).

### Step 7: Generate Summary Report
- [x] Create `structure_report.md` with details on removed files, new structure, and affected imports.

## Phase 2: Cleanup & File Hygiene
### 2.1 Delete temporary and system files
- [x] Remove .DS_Store, Thumbs.db, *.log, *.tmp, *.bak, etc.

### 2.2 Remove environment-specific or local dev files
- [x] Remove .env.local, .vscode, .idea, .history

### 2.3 Delete build artifacts
- [x] Remove dist/, build/, .cache/, coverage/

### 2.4 Clean Git and ignore folders
- [x] Remove .git (optional if migrating)
- [x] Verify .gitignore is correct

### 2.5 Validate dependency files (package-lock.json, yarn.lock)
- [x] Check package-lock.json integrity

### 2.6 Check for unused dependencies
- [x] Run npm-check or depcheck to identify unused packages
