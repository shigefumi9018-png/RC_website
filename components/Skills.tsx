"use client";

import { useT } from "./LanguageProvider";
import { Slider } from "./Slider";

// Real photography (Unsplash CDN). Locale-independent, parallel to skills.items.
const IMAGES = [
  "https://images.unsplash.com/photo-1623479322729-28b25c16b011", // full-stack: young developer at work
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485", // AI automation
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // CMS / content dashboard
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f", // CRM / analytics dashboard
];

const img = (url: string) => `${url}?auto=format&fit=crop&w=1600&q=82`;

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
