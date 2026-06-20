"use client";

import { useT } from "./LanguageProvider";

export function Hero() {
  const t = useT();
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">
            <span className="tick" />
            {t.hero.eyebrow}
          </p>
          <h1 className="reveal">
            {t.hero.l1}
            <br />
            {t.hero.l2}
            <br />
            {t.hero.l3a}
            <em>{t.hero.em}</em>
            {t.hero.l3b}
          </h1>
          <p className="lede reveal">{t.hero.lede}</p>
          <div className="hero-actions reveal">
            <a className="btn btn-primary" href="#contact">
              {t.hero.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M3 8h9M8 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#services">
              {t.hero.secondary}
            </a>
          </div>
          <dl className="hero-stats reveal">
            {t.hero.stats.map((s) => (
              <div key={s.dt}>
                <dt>{s.dt}</dt>
                <dd>{s.dd}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card">
            <div className="card-bar">
              <span />
              <span />
              <span />
            </div>
            <pre className="code">
              <code>
                <span className="c-key">const</span>{" "}
                <span className="c-var">team</span> = A3.
                <span className="c-fn">assemble</span>({"{"}
                {"\n"}  <span className="c-prop">stack</span>: [
                <span className="c-str">&apos;React&apos;</span>,{" "}
                <span className="c-str">&apos;Node&apos;</span>,{" "}
                <span className="c-str">&apos;Go&apos;</span>,{" "}
                <span className="c-str">&apos;Python&apos;</span>],
                {"\n"}  <span className="c-prop">ai</span>:    {" "}
                <span className="c-str">&apos;production-grade&apos;</span>,
                {"\n"}  <span className="c-prop">based</span>: {" "}
                <span className="c-str">&apos;Tokyo&apos;</span>,
                {"\n"}
                {"}"});
                {"\n\n"}
                <span className="c-key">await</span>{" "}
                <span className="c-var">team</span>.
                <span className="c-fn">ship</span>(); {" "}
                <span className="c-com">// on time.</span>
              </code>
            </pre>
          </div>
          <div className="hero-orbit" />
        </div>
      </div>
    </section>
  );
}
