"use client";

import { useT } from "./LanguageProvider";

export function News() {
  const t = useT();
  const n = t.news;

  return (
    <section className="section news" id="news">
      <div className="wrap">
        <div className="news-head reveal">
          <div>
            <p className="section-kicker">{n.kicker}</p>
            <h2>{n.title}</h2>
          </div>
          <a className="more-link" href="#contact">
            {n.more}
            <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
              <path d="M3 7.5h8M7.5 4l3.5 3.5L7.5 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <ul className="news-list reveal">
          {n.items.map((item, i) => (
            <li className="news-item" key={i}>
              <a href="#contact">
                <time className="news-date">{item.date}</time>
                <span className="news-cat">{item.cat}</span>
                <span className="news-title">{item.title}</span>
                <svg className="news-arrow" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M3 7h7M7 4l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
