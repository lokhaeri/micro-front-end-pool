import * as React from 'react'

export default function() {
  return (
    <img
      src="data:image/png;base64, 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"
      height="64"
      alt="purple-circle"
    />
  )
}