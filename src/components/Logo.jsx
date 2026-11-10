export default function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`text-accent ${className}`}
      role="img"
      aria-label="Logo Akmal"
    >
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M32 8 L56 56 H44 L32 32 L20 56 H8 Z" />
        <rect x="27" y="43" width="10" height="6" rx="1.5" />
      </g>
    </svg>
  )
}
