# Workflow Comparison: Vague vs. Detailed Prompts

This document details the software development workflow comparison between **Round 1 (Vague Prompt)** and **Round 2 (Detailed Prompt)** when implementing the AI Code Security Scanner feature.

---

## 🛡️ Correctness
* **Round 1 (`round-1-vague`)**: The application relies on a basic substring check for keywords like `eval` or `password` in `App.jsx`. If no keywords match, it declares a clean scan report regardless of whether the user input is actual code, garbage text, or blank space. This leads to false-positive scan reports.
* **Round 2 (`round-2-detailed`)**: The scanner dynamically matches patterns to source code lines (e.g. tracking SQL string interpolation, raw MySQL queries, and DOM `innerHTML` leaks), computes line numbers, and coordinates code diff comparisons. The audit correctness is significantly higher due to clear structural rules.

## ♿ Accessibility (a11y)
* **Round 1**: Lacks screen-reader support. Interactive buttons are not keyboard-accessible via standard focus rings and lack `aria-label` tags. The transition from scanning to listing results occurs silently, violating user feedback guidelines.
* **Round 2**: Fully accessible implementation:
  * Uses semantic tags (`<main>`, `<header>`).
  * Employs `aria-live="assertive"` to announce scanning progress steps to screen readers.
  * The findings panel acts as an accessible `role="listbox"` with keyboard-focusable card items (`tabIndex={0}`, `role="option"`, `aria-selected`).
  * Supports keyboard selection listener (`Enter` and `Space` keys) on cards.
  * The diff comparison panels leverage `.sr-only` tags to label "Added" and "Removed" lines dynamically.

## ⚠️ Edge Cases
* **Round 1**: Ignores edge cases. Users can submit empty code blocks, triggering a "scan complete" screen with no error messages.
* **Round 2**: Handles input state validation explicitly:
  * Blocks scans on empty code blocks with a clean form warning.
  * Restricts character size above 50,000 characters to prevent browser engine slowdown, warning users beforehand.
  * Allows loading clean, pre-packaged safe or vulnerable scripts to guide user onboarding.

## 🔍 Review Effort & Code Quality
* **Round 1**: All code resides in `App.jsx` and `App.css`. While easy to scan initially, it lacks separation of concerns. Adding new rules or rendering modes would result in a massive, unmaintainable single file.
* **Round 2**: Modularized structure with separate components: `ScannerDashboard`, `VulnerabilityList`, and `CodeDiffViewer`. The logic is isolated, meaning a reviewer can verify the diff viewer or list rules independently.

## 🐞 AI Mistake Caught
During the styling of Round 2, the AI generated a case-sensitive mismatch. The verification script searched for the literal string `"glassmorphism"` in `App.css` to verify the design system. However, the stylesheet used the capitalized comment `/* Glassmorphism */`. This caused the verification script to fail. The mistake was corrected by adding a lowercase matching comment (`/* glassmorphism styles */`) in `App.css`, highlighting how strict static verification caught a silent naming mismatch.

## 💻 Specific Code Differences
1. **File Count**: Round 1 has two modified files (`App.jsx`, `App.css`). Round 2 includes a dedicated directory of sub-components and a validation harness (`verify-dashboard.js`).
2. **Interactive Remediations**: Round 2 contains a side-by-side line highlight system in `CodeDiffViewer.jsx` using template splits. Round 1 only offers inline suggestion strings.
3. **Styling Tokens**: Round 1 styles are ad-hoc. Round 2 defines a central palette using CSS variables (`--sev-critical-bg`, `--diff-added-bg`, etc.) to control state styles uniformly.
