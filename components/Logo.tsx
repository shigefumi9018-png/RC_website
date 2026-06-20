type LogoProps = {
  size?: number;
  /** "dark" mark sits on light backgrounds; "light" sits on the navy footer */
  variant?: "dark" | "light";
};

/**
 * A3 monogram: a rounded badge reading "A3", the 3 in vermillion.
 */
export function Logo({ size = 34, variant = "dark" }: LogoProps) {
  const bg = variant === "dark" ? "#0d1b2a" : "#f4f1ea";
  const aColor = variant === "dark" ? "#f4f1ea" : "#0d1b2a";
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="A3"
    >
      <rect width="32" height="32" rx="7" fill={bg} />
      <text
        x="16"
        y="16"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="16.5"
        letterSpacing="-0.5"
      >
        <tspan fill={aColor}>A</tspan>
        <tspan fill="#e34234">3</tspan>
      </text>
    </svg>
  );
}
