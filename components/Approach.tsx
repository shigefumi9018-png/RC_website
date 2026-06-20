"use client";

import { useT } from "./LanguageProvider";

export function Approach() {
  const t = useT();
  return (
    <section className="section section-alt" id="approach">
      <div className="wrap approach-grid">
        <header className="section-head reveal">
          <p className="section-kicker">{t.approach.kicker}</p>
          <h2>{t.approach.title}</h2>
          <p className="section-sub">
            {t.approach.sub_a}
            <em>{t.approach.sub_em}</em>
            {t.approach.sub_b}
          </p>
        </header>

        <ol className="steps">
          {t.approach.steps.map((step) => (
            <li className="reveal" key={step.no}>
              <span className="step-no">{step.no}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
