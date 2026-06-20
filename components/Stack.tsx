"use client";

import { useT } from "./LanguageProvider";

export function Stack() {
  const t = useT();
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="section-kicker">{t.stack.kicker}</p>
          <h2>{t.stack.title}</h2>
          <p className="section-sub">{t.stack.sub}</p>
        </header>

        <div className="stack-grid">
          {t.stack.columns.map((col) => (
            <div className="stack-col reveal" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
