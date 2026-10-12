type LogoProps = {
  size?: number;
  /** "dark" mark sits on light backgrounds; "light" sits on the navy footer */
  variant?: "dark" | "light";
};

/**
 * RemoCollab monogram: "RC" with an accent bar beneath.
 */
export function Logo({ size = 34, variant = "dark" }: LogoProps) {
  const bg = variant === "dark" ? "#0f1b2e" : "#ffffff";
  const rColor = variant === "dark" ? "#ffffff" : "#0f1b2e";
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="RemoCollab"
    >
      <rect width="32" height="32" rx="7" fill={bg} />
      <text
        x="16"
        y="14"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="15"
        letterSpacing="-0.5"
      >
        <tspan fill={rColor}>R</tspan>
        <tspan fill="#1a56db">C</tspan>
      </text>
      <rect x="11" y="22.5" width="10" height="2.4" rx="1.2" fill="#1a56db" />
    </svg>
  );
}
