type LogoProps = {
  size?: number;
  /** "dark" mark sits on light backgrounds; "light" sits on the navy footer */
  variant?: "dark" | "light";
};

/**
 * A3 monogram: "A3" with three ascending bars beneath, a nod to the three
 * disciplines the name stands for: Architecture, Analytics, Automation.
 */
export function Logo({ size = 34, variant = "dark" }: LogoProps) {
  const bg = variant === "dark" ? "#0f1b2e" : "#ffffff";
  const aColor = variant === "dark" ? "#ffffff" : "#0f1b2e";
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="A3 · Architecture, Analytics, Automation"
    >
      <rect width="32" height="32" rx="7" fill={bg} />
      <text
        x="16"
        y="13"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="14"
        letterSpacing="-0.5"
      >
        <tspan fill={aColor}>A</tspan>
        <tspan fill="#1a56db">3</tspan>
      </text>
      {/* three ascending bars: Architecture · Analytics · Automation */}
      <g fill="#1a56db">
        <rect x="10" y="23" width="2.6" height="3.5" rx="1" />
        <rect x="14.7" y="21" width="2.6" height="5.5" rx="1" />
        <rect x="19.4" y="18.5" width="2.6" height="8" rx="1" />
      </g>
    </svg>
  );
}
