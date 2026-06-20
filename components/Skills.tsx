"use client";

import { useT } from "./LanguageProvider";
import { Slider } from "./Slider";

// Real photography (Unsplash CDN). Locale-independent, parallel to skills.items.
const IMAGES = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // full-stack / code
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485", // AI automation
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // CMS / dashboard
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7", // CRM / office
];

const img = (url: string) => `${url}?auto=format&fit=crop&w=1100&q=80`;

export function Skills() {
  const t = useT();

  const slides = t.skills.items.map((s, i) => (
    <article className="skill-slide" key={s.num}>
      <div className="skill-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img(IMAGES[i])} alt={s.alt} loading="lazy" decoding="async" />
        <span className="skill-badge">{s.num}</span>
      </div>
      <div className="skill-body">
        <h3>{s.title}</h3>
        <p>{s.body}</p>
        <ul className="card-tags">
          {s.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  ));

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="section-kicker">{t.skills.kicker}</p>
          <h2>{t.skills.title}</h2>
          <p className="section-sub">{t.skills.sub}</p>
        </header>
        <div className="reveal">
          <Slider slides={slides} ariaLabel={t.skills.title} className="skills-slider" />
        </div>
      </div>
    </section>
  );
}
