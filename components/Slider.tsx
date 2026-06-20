"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SliderProps = {
  slides: React.ReactNode[];
  ariaLabel: string;
  /** autoplay interval in ms; 0 disables */
  autoMs?: number;
  className?: string;
};

export function Slider({ slides, ariaLabel, autoMs = 6000, className = "" }: SliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + n) % n),
    [n]
  );
  const goTo = useCallback((i: number) => setIndex(((i % n) + n) % n), [n]);

  // Autoplay (respects reduced-motion and pause-on-hover/focus)
  useEffect(() => {
    if (!autoMs || paused || n <= 1) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => go(1), autoMs);
    return () => window.clearInterval(id);
  }, [autoMs, paused, n, go, index]);

  return (
    <div
      className={`slider ${className}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              className="slider-slide"
              key={i}
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {n > 1 && (
        <>
          <button
            type="button"
            className="slider-arrow slider-arrow--prev"
            aria-label="Previous slide"
            onClick={() => go(-1)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M12 4l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="slider-arrow slider-arrow--next"
            aria-label="Next slide"
            onClick={() => go(1)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M8 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="slider-dots" role="tablist" aria-label={ariaLabel}>
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`slider-dot${i === index ? " active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
