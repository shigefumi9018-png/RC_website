"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";

/**
 * Loads the Calendly inline widget once and themes it to match the site.
 * The script is appended on mount and reused across renders.
 */
export function Calendly() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = "calendly-widget-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const url =
    `${siteConfig.calendly}?hide_gdpr_banner=1` +
    "&background_color=ffffff&text_color=0f1b2e&primary_color=1a56db";

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: 280, height: 640 }}
    />
  );
}
