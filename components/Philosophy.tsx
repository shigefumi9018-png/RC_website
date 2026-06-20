"use client";

import { useT } from "./LanguageProvider";

export function Philosophy() {
  const t = useT();
  const p = t.philosophy;

  return (
    <section className="section philosophy" id="philosophy">
      <div className="wrap">
        <p className="section-kicker philosophy-kicker reveal">{p.kicker}</p>
        <blockquote className="philosophy-quote reveal">{p.quote}</blockquote>
        <div className="philosophy-grid">
          {p.paras.map((para, i) => (
            <p className="philosophy-para reveal" key={i}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
