"use client";

import { useT } from "./LanguageProvider";

export function Services() {
  const t = useT();
  return (
    <section className="section" id="services">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="section-kicker">{t.services.kicker}</p>
          <h2>{t.services.title}</h2>
          <p className="section-sub">{t.services.sub}</p>
        </header>

        <div className="cards">
          {t.services.items.map((s) => (
            <article className="card reveal" key={s.num}>
              <div className="card-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="card-tags">
                {s.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
