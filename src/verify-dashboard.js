import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('🧪 Starting AI Code Security Analyzer Dashboard Verification...')

const REQUIRED_FILES = [
  'components/ScannerDashboard.jsx',
  'components/VulnerabilityList.jsx',
  'components/CodeDiffViewer.jsx',
  'App.jsx',
  'App.css'
]

let passed = true

// 1. Check for file existence
console.log('\n📁 Checking file structure...')
REQUIRED_FILES.forEach(file => {
  const filePath = path.join(__dirname, file)
  if (fs.existsSync(filePath)) {
    console.log(`✅ Found: ${file}`)
  } else {
    console.error(`❌ Missing file: ${file}`)
    passed = false
  }
})

// 2. Perform static analysis on accessibility compliance
console.log('\n♿ Checking accessibility tags (a11y) in component source files...')

const a11yChecks = [
  {
    file: 'components/ScannerDashboard.jsx',
    patterns: [
      { regex: /aria-live=["']assertive["']/i, desc: 'Announce scanning state live' },
      { regex: /aria-label=/i, desc: 'Provide text description for interactive elements' }
    ]
  },
  {
    file: 'components/VulnerabilityList.jsx',
    patterns: [
      { regex: /role=["']listbox["']/i, desc: 'Vulnerabilities list acts as a listbox container' },
      { regex: /role=["']option["']/i, desc: 'Findings items represent select-ready options' },
      { regex: /tabIndex=\{0\}/, desc: 'Keyboard focusability on findings' },
      { regex: /onKeyDown=/i, desc: 'Keyboard activation (Enter/Space support)' }
    ]
  },
  {
    file: 'components/CodeDiffViewer.jsx',
    patterns: [
      { regex: /className=["']sr-only["']/i, desc: 'Screen reader hidden context labels' },
      { regex: /aria-label=/i, desc: 'Accessibility labels on diff columns' }
    ]
  }
]

a11yChecks.forEach(check => {
  const filePath = path.join(__dirname, check.file)
  if (!fs.existsSync(filePath)) return

  const content = fs.readFileSync(filePath, 'utf8')
  console.log(`\nAnalyzing ${check.file}:`)
  
  check.patterns.forEach(pat => {
    if (pat.regex.test(content)) {
      console.log(`  ✅ Passed: ${pat.desc}`)
    } else {
      console.error(`  ❌ Failed: Missing implementation for "${pat.desc}"`)
      passed = false
    }
  })
})

// 3. Verify CSS styling design system variables
console.log('\n🎨 Checking CSS custom variables in App.css...')
const cssPath = path.join(__dirname, 'App.css')
if (fs.existsSync(cssPath)) {
  const cssContent = fs.readFileSync(cssPath, 'utf8')
  const cssVars = [
    '--sev-critical-bg',
    '--sev-high-bg',
    '--diff-removed-bg',
    '--diff-added-bg',
    'focus-visible',
    'glassmorphism'
  ]
  cssVars.forEach(v => {
    if (cssContent.includes(v)) {
      console.log(`  ✅ Checked: Style includes "${v}"`)
    } else {
      console.error(`  ❌ Missing CSS rule/variable: "${v}"`)
      passed = false
    }
  })
}

console.log('\n----------------------------------------')
if (passed) {
  console.log('🎉 VERIFICATION PASSED SUCCESSFULLY! The dashboard complies with the Round 2 requirements.')
  process.exit(0)
} else {
  console.error('🛑 VERIFICATION FAILED! Please fix the errors listed above.')
  process.exit(1)
}
