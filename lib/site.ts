/**
 * Central site configuration. Edit these values to rebrand or change
 * the booking link / domain in one place.
 */
export const siteConfig = {
  name: "RemoCollab",
  legalName: "RemoCollab",
  tagline: "Software Engineering & AI, Built in Japan",
  description:
    "RemoCollab is a Tokyo-based software studio delivering full-stack engineering, applied AI systems, and hands-on AI training for teams across Japan and beyond.",
  // Production domain (verified in Resend for email delivery).
  url: "https://a3techgroup.com",
  locale: "en_US",
  calendly: "https://calendly.com/seniordev88590/30min",
  location: {
    city: "Tokyo",
    region: "Tokyo",
    country: "JP",
  },
  cto: {
    name: "Try (Shigefumi Kobayashi)",
    role: "Chief Technology Officer",
  },
  founders: [
    { name: "Try (Shigefumi Kobayashi)", role: "Co-Founder & CTO" },
    { name: "Ryota Masashi", role: "Co-Founder & CEO" },
  ],
  nav: [
    { href: "#services", label: "Services" },
    { href: "#approach", label: "Approach" },
    { href: "#stack", label: "Stack" },
    { href: "#team", label: "Team" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
