"use client";

import { useT } from "./LanguageProvider";

export function TrustStrip() {
  const t = useT();
  return (
    <section className="strip">
      <div className="wrap strip-inner">
        <span className="strip-label">{t.trust.label}</span>
        <ul className="strip-list">
          {t.trust.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
