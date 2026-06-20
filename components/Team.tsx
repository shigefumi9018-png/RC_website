"use client";

import { useT } from "./LanguageProvider";

export function Team() {
  const t = useT();
  return (
    <section className="section section-alt" id="team">
      <div className="wrap team-grid">
        <div className="team-portrait reveal" aria-hidden="true">
          <div className="portrait-frame">
            <span className="portrait-initials">DT</span>
            <span className="portrait-stamp">CTO</span>
          </div>
        </div>
        <div className="team-copy">
          <p className="section-kicker reveal">{t.team.kicker}</p>
          <h2 className="reveal">{t.team.name}</h2>
          <p className="team-role reveal">{t.team.role}</p>
          <p className="reveal">{t.team.bio}</p>
          <blockquote className="reveal">{t.team.quote}</blockquote>
          <div className="reveal">
            <a className="btn btn-primary" href="#contact">
              {t.team.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
