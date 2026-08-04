# Sentinel AI — AI Code Security Reviewer

Sentinel AI is a production-ready frontend scaffold for an AI-powered code security reviewer, built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 📌 Features Scaffolded

- **Root Layout & Navigation**: Clean top Navbar, collapsible Mobile Menu, and persistent desktop Sidebar.
- **Dark Mode Design System**: A dark-theme aesthetic powered by Tailwind classes and customizable HSL variables.
- **Dashboard Layout**: Metrics summary cards, bar-chart visualizations, and recent scans tracker.
- **Interactive Uploader**: Tabbed code submit pane supporting drag-and-drop or code paste input.
- **Vulnerability Inspector**: Interactive listbox findings list linking with read-only code display and remediation recommendation guide.
- **Report consolidator**: Export buttons supporting HTML/JSON file compile triggers.
- **Health Validation**: dynamic Server Component dynamically querying an external todo placeholder API.
- **Placeholder APIs**: Mock routes matching Next.js App Router rules.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

---

## ⚙️ Getting Started

### 📋 Prerequisites
- **Node.js** (v20 or higher recommended)
- **npm**

### 🔧 Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Build the application for production:
   ```bash
   npm run build
   ```

4. Run linting checks:
   ```bash
   npm run lint
   ```

---

## 📂 Project Structure

```text
src/
├── app/                  # Next.js pages & API routes
│   ├── dashboard/        # Dashboard layout & stats
│   ├── upload/           # Drag-and-drop file upload
│   ├── review/           # Code security review views
│   ├── reports/          # Security reports history
│   ├── profile/          # User subscription quota
│   ├── settings/         # Alert threshold settings
│   ├── health/           # Server-side health fetch page
│   └── api/              # API placeholders
├── components/           # Reusable UI & Layout components
├── hooks/                # Client state hooks
├── lib/                  # Library utility wrappers
├── services/             # API caller wrappers
├── styles/               # Global CSS files
├── types/                # TypeScript types
└── utils/                # Date/Severity formatting helpers
```
