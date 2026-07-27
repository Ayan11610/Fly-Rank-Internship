import React from 'react'

/**
 * CodeDiffViewer displays a side-by-side comparison of vulnerable code and its suggested fix.
 * @param {Object} props
 * @param {string} props.original - The original code snippet
 * @param {string} props.fixed - The fixed code snippet
 * @param {string} props.title - Title for the viewer
 */
export default function CodeDiffViewer({ original = '', fixed = '', title = 'Suggested Fix' }) {
  const originalLines = original.split('\n')
  const fixedLines = fixed.split('\n')
  const maxLines = Math.max(originalLines.length, fixedLines.length)

  return (
    <div className="diff-viewer-container" aria-label={`Code Diff: ${title}`}>
      <div className="diff-header">
        <h4>{title}</h4>
      </div>
      <div className="diff-grid">
        {/* Original Code Pane */}
        <div className="diff-pane original-pane">
          <div className="pane-header">Vulnerable Code</div>
          <pre className="pane-content" aria-label="Original vulnerable code lines">
            <code>
              {Array.from({ length: maxLines }).map((_, i) => {
                const line = originalLines[i]
                const hasContent = line !== undefined
                return (
                  <div 
                    key={`orig-${i}`} 
                    className={`diff-line-row ${hasContent ? 'removed-line' : 'empty-line'}`}
                  >
                    <span className="line-number" aria-hidden="true">{hasContent ? i + 1 : ''}</span>
                    <span className="line-text">
                      {hasContent ? (
                        <>
                          <span className="sr-only">Removed line: </span>
                          {line || ' '}
                        </>
                      ) : ' '}
                    </span>
                  </div>
                )
              })}
            </code>
          </pre>
        </div>

        {/* Fixed Code Pane */}
        <div className="diff-pane fixed-pane">
          <div className="pane-header">Fixed Code</div>
          <pre className="pane-content" aria-label="Suggested secure code lines">
            <code>
              {Array.from({ length: maxLines }).map((_, i) => {
                const line = fixedLines[i]
                const hasContent = line !== undefined
                return (
                  <div 
                    key={`fix-${i}`} 
                    className={`diff-line-row ${hasContent ? 'added-line' : 'empty-line'}`}
                  >
                    <span className="line-number" aria-hidden="true">{hasContent ? i + 1 : ''}</span>
                    <span className="line-text">
                      {hasContent ? (
                        <>
                          <span className="sr-only">Added line: </span>
                          {line || ' '}
                        </>
                      ) : ' '}
                    </span>
                  </div>
                )
              })}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
