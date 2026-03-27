export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg viewBox="0 0 400 400" width={size} height={size}>
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#C07050" }} />
          <stop offset="100%" style={{ stopColor: "#9C5030" }} />
        </linearGradient>
        <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#D4A878" }} />
          <stop offset="100%" style={{ stopColor: "#B88860" }} />
        </linearGradient>
      </defs>
      <circle cx="165" cy="210" r="130" fill="url(#lg1)" opacity="0.9" />
      <circle cx="250" cy="190" r="120" fill="url(#lg2)" opacity="0.75" />
    </svg>
  );
}
