"use client";

import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { useT } from "./LanguageProvider";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  const links = [
    { href: "#skills", label: t.nav.skills },
    { href: "#approach", label: t.nav.approach },
    { href: "#collaboration", label: t.nav.collaboration },
    { href: "#team", label: t.nav.team },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <Logo size={30} variant="light" />
            <span className="brand-text">A3&nbsp;Tech&nbsp;Group</span>
          </a>
          <p>{t.footer.blurb}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {links.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-meta">
          <p>{t.footer.location}</p>
          <p>
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.schedule}
            </a>
          </p>
        </div>
      </div>

      <div className="wrap footer-base">
        <p>
          © {year} {siteConfig.name}. {t.footer.rights}
        </p>
        <p className="footer-jp">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
