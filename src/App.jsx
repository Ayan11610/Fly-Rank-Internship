import { useState } from 'react'
import './App.css'

function App() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  const handleScan = () => {
    setLoading(true)
    setResults(null)
    
    setTimeout(() => {
      const findings = []
      if (code.includes('eval(')) {
        findings.push({
          id: 1,
          severity: 'HIGH',
          title: 'Avoid eval() usage',
          description: 'eval() is dangerous as it allows executing arbitrary JavaScript strings.',
          fix: 'Use JSON.parse() or specific lookup tables instead.'
        })
      }
      if (code.includes('password') || code.includes('secret') || code.includes('api_key')) {
        findings.push({
          id: 2,
          severity: 'CRITICAL',
          title: 'Hardcoded Secret Detected',
          description: 'A key, secret, or password was found hardcoded in source code.',
          fix: 'Store secrets in environment variables instead.'
        })
      }
      
      // Default finding if nothing matches
      if (findings.length === 0) {
        findings.push({
          id: 3,
          severity: 'LOW',
          title: 'No obvious issues found',
          description: 'Basic heuristic scanning did not find obvious critical issues.',
          fix: 'Keep up the good work.'
        })
      }
      
      setResults(findings)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="vague-app">
      <header className="vague-header">
        <h1>AI Code Security Scanner</h1>
        <p>Paste your code below to check for basic security issues</p>
      </header>

      <main className="vague-main">
        <div className="input-section">
          <textarea
            placeholder="Paste your javascript code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={12}
            className="code-textarea"
          />
          <button onClick={handleScan} className="scan-btn">
            {loading ? 'Scanning...' : 'Scan Code'}
          </button>
        </div>

        {loading && (
          <div className="loading-spinner">
            <p>Analyzing code structure...</p>
          </div>
        )}

        {results && !loading && (
          <div className="results-section">
            <h2>Scan Results ({results.length})</h2>
            <div className="findings-list">
              {results.map((finding) => (
                <div key={finding.id} className={`finding-card ${finding.severity.toLowerCase()}`}>
                  <div className="finding-header">
                    <span className="severity-badge">{finding.severity}</span>
                    <h3>{finding.title}</h3>
                  </div>
                  <p className="finding-desc">{finding.description}</p>
                  <div className="finding-fix">
                    <strong>Suggested Fix:</strong> {finding.fix}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
