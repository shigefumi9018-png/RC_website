"use client";

import { useT } from "./LanguageProvider";

export function Company() {
  const t = useT();
  const co = t.company;

  return (
    <section className="section section-alt company" id="company">
      <div className="wrap">
        <header className="section-head section-head--center reveal">
          <p className="section-kicker">{co.kicker}</p>
          <h2>{co.title}</h2>
        </header>

        <div className="company-table reveal">
          <dl>
            {co.rows.map((row) => (
              <div className="company-row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
