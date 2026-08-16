"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

export default function StatTicker({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { value: displayValue, ref } = useCountUp(value);
  return (
    <div ref={ref} className="border-l border-line pl-4">
    <p className="font-display text-4xl font-bold tabular-nums text-paper sm:text-5xl">
  {label === "Monthly Ads Spent" && "IDR "}
  {displayValue}
  <span className="text-stamp">{suffix}</span>
</p>

<p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
  {label}
</p>
    </div>
  );
}
