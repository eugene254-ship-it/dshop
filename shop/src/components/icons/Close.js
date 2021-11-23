import React from 'react'

const Close = ({ className = '', color = '#000' }) => (
  <svg
    className={`${className}`}
    width="18"
    height="18"
    stroke={color}
    viewBox="0 0 18 18"
  >
    <circle cx="9" cy="9" r="8" strokeWidth="1" fill="transparent" />
    <line x1="6" y1="6" x2="12" y2="12" strokeWidth="1" />
    <line x1="6" y1="12" x2="12" y2="6" strokeWidth="1" />
  </svg>
)

export default Close
