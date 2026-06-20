import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f1ea",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* top row: logo + locale */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "#0d1b2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              <span style={{ color: "#f4f1ea" }}>A</span>
              <span style={{ color: "#e34234" }}>3</span>
            </div>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#0d1b2a" }}>
              A3 Tech Group
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#5f6b78", letterSpacing: 4 }}>
            TOKYO, JAPAN
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 70,
              fontWeight: 700,
              color: "#0d1b2a",
              lineHeight: 1.08,
              maxWidth: 900,
            }}
          >
            <span>Software Engineering &amp; AI,</span>
            <span>built in Japan.</span>
          </div>
          <div style={{ fontSize: 30, color: "#2a3b4d", maxWidth: 820 }}>
            Full-stack development · Applied AI · AI training for teams
          </div>
        </div>

        {/* accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#5f6b78",
          }}
        >
          <div style={{ width: 60, height: 6, background: "#e34234" }} />
          a3techgroup.com
        </div>
      </div>
    ),
    { ...size }
  );
}
