"use client";

import { useT } from "./LanguageProvider";
import { Slider } from "./Slider";

// Young (25–30) Asian developers & teams, high-resolution.
const IMAGES = [
  "https://images.unsplash.com/photo-1632910121591-29e2484c0259", // two young devs collaborating
  "https://images.unsplash.com/photo-1601513042740-3f9041642307", // young Asian team meeting
  "https://images.unsplash.com/photo-1667960733570-ddbbee6f4404", // Asian business/founder team
  "https://images.unsplash.com/photo-1650784854790-fb6c2ed400d3", // Asian professional women team
];

const img = (url: string) => `${url}?auto=format&fit=crop&w=1600&q=82`;

export function Collaboration() {
  const t = useT();
  const c = t.collab;

  const slides = c.slides.map((s, i) => (
    <figure className="collab-slide" key={i}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img(IMAGES[i])} alt={s.alt} loading="lazy" decoding="async" />
      <figcaption>{s.caption}</figcaption>
    </figure>
  ));

  return (
    <section className="section section-alt" id="collaboration">
      <div className="wrap">
        <header className="section-head section-head--center reveal">
          <p className="section-kicker">{c.kicker}</p>
          <h2>{c.title}</h2>
          <p className="section-sub collab-lead">{c.lead}</p>
        </header>

        <div className="collab-grid">
          <div className="collab-visual reveal">
            <Slider slides={slides} ariaLabel={c.title} className="collab-slider" autoMs={5000} />
          </div>

          <div className="collab-copy reveal">
            {c.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="collab-notech">{c.noTech}</p>
            <p className="collab-revenue">{c.revenue}</p>
            <p className="collab-meeting">{c.meetingNote}</p>
            <p className="collab-closing">{c.closing}</p>
            <a className="btn btn-primary" href="#contact">
              {c.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h9M8 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
