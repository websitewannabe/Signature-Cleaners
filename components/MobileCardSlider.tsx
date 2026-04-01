"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface MobileCardSliderProps {
  children: ReactNode[];
  interval?: number;
  light?: boolean;
}

export default function MobileCardSlider({
  children,
  interval = 3000,
  light = false,
}: MobileCardSliderProps) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const total = children.length;

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [total, interval]);

  return (
    <div className="sm:hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children.map((child, i) => (
            <div key={i} className="w-full flex-shrink-0 px-1">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-primary" : `w-2 ${light ? "bg-zinc-300" : "bg-white/30"}`
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
