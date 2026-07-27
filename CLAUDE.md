# CLAUDE.md — Project Rules & Guidelines

This file outlines build commands, test instructions, and core development conventions for the AI Code Security Analyzer project.

---

## 🛠️ CLI Commands

* **Start Development Server**: `npm run dev`
* **Production Build**: `npm run build`
* **Preview Build**: `npm run preview`
* **Run Linting**: `npm run lint`
* **Run Verification Harness**: `npm run verify`

---

## 📐 Project Conventions & Developer Rules

### 1. Component Architecture & Modularization
* Never build security features as a single monolithic block in `App.jsx`.
* Decouple the core scanner logic into three distinct layers:
  1. **Dashboard controller** (`src/components/ScannerDashboard.jsx`): Orchestrates text limits, sample loaders, scanning progress states, and results panels.
  2. **Findings Navigator** (`src/components/VulnerabilityList.jsx`): Manages multi-category toggles and list selection events.
  3. **Diff Remediations Panel** (`src/components/CodeDiffViewer.jsx`): Renders side-by-side comparisons of raw vs secure lines.

### 2. Strict Accessibility Compliance (a11y)
* Any custom item selection list (e.g., vulnerabilities) must implement standard WAI-ARIA roles: the container must declare `role="listbox"` and selectable cards must declare `role="option"`, `aria-selected`, and `tabIndex={0}`.
* Keyboard-based navigation is mandatory: cards must handle `onKeyDown` and fire the selection trigger when `Enter` or `Space` keys are pressed.
* State updates (e.g., "Scanning AST...") must be enclosed in `aria-live` containers to ensure accessibility.

### 3. Automated Verification Constraints
* Always run `npm run verify` before committing code to ensure that structure, styling variables, and accessibility components remain intact.
* Any new CSS rules must register severity and diff highlights within `src/App.css` using HSL variables (e.g., `--sev-critical-bg`, `--diff-removed-bg`) and match exact lowercase terms like `glassmorphism` in styling files.
