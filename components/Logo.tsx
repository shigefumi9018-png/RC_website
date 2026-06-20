type LogoProps = {
  size?: number;
  /** "dark" mark sits on light backgrounds; "light" sits on the navy footer */
  variant?: "dark" | "light";
};

export function Logo({ size = 34, variant = "dark" }: LogoProps) {
  const bg = variant === "dark" ? "#0d1b2a" : "#f4f1ea";
  const cross = variant === "dark" ? "#f4f1ea" : "#0d1b2a";
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill={bg} />
      <path
        d="M9 22.5 16 9l7 13.5"
        fill="none"
        stroke="#e34234"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4 17.5h7.2"
        stroke={cross}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
