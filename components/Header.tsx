"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { useT } from "./LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#skills", label: t.nav.skills },
    { href: "#why", label: t.nav.why },
    { href: "#collaboration", label: t.nav.collaboration },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="wrap header-inner">
        <a className="brand" href="#top" aria-label={`${siteConfig.name} home`}>
          <Logo size={34} />
          <span className="brand-text">A3&nbsp;Tech&nbsp;Group</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {links.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a className="nav-cta" href="#contact">
            {t.nav.contact}
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        hidden={!open}
      >
        {links.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          {t.nav.contact}
        </a>
        <div className="mobile-lang">
          <LanguageSwitcher compact />
        </div>
      </div>
    </header>
  );
}
