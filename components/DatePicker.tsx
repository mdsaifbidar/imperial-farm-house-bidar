"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type DatePickerProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function toISODate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function startOfDay(d: Date) {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export default function DatePicker({ value, onChange, placeholder = "Select a date" }: DatePickerProps) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const selected = useMemo(() => (value ? startOfDay(new Date(value)) : null), [value]);

  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => selected ?? today);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const cells = useMemo(() => {
    const firstOfMonth = new Date(year, month, 1);
    const startOffset = firstOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const items: { date: Date | null }[] = [];
    for (let i = 0; i < startOffset; i++) items.push({ date: null });
    for (let d = 1; d <= daysInMonth; d++) items.push({ date: new Date(year, month, d) });
    while (items.length % 7 !== 0) items.push({ date: null });
    return items;
  }, [year, month]);

  const monthLabel = viewDate.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  const displayLabel = selected
    ? selected.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })
    : null;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        data-cursor-hover
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 bg-charcoal/60 border border-sand/15 rounded-sm px-4 py-3 text-left text-sand focus:outline-none focus:border-brass-light hover:border-sand/30 transition-colors"
      >
        <span className={displayLabel ? "text-sand" : "text-sand-dim/60"}>
          {displayLabel ?? placeholder}
        </span>
        <svg
          viewBox="0 0 24 24"
          className="h-4.5 w-4.5 shrink-0 text-brass-light"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <rect x="3.5" y="5" width="17" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3.5 10h17" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Choose a date"
          className="absolute z-20 mt-2 w-72 rounded-sm border border-sand/15 bg-charcoal p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => setViewDate(new Date(year, month - 1, 1))}
              className="h-8 w-8 flex items-center justify-center rounded-full text-sand-dim hover:bg-sand/10 hover:text-sand transition-colors"
            >
              ‹
            </button>
            <span className="eyebrow text-sand">{monthLabel}</span>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setViewDate(new Date(year, month + 1, 1))}
              className="h-8 w-8 flex items-center justify-center rounded-full text-sand-dim hover:bg-sand/10 hover:text-sand transition-colors"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {WEEKDAYS.map((w) => (
              <span key={w} className="text-[0.65rem] tracking-wide text-sand-dim/60 py-1">
                {w}
              </span>
            ))}
            {cells.map(({ date }, i) => {
              if (!date) return <span key={i} />;
              const isPast = date < today;
              const isSelected = selected && date.getTime() === selected.getTime();
              const isToday = date.getTime() === today.getTime();

              return (
                <button
                  key={i}
                  type="button"
                  disabled={isPast}
                  onClick={() => {
                    onChange(toISODate(date));
                    setOpen(false);
                  }}
                  className={`aspect-square rounded-full text-sm transition-colors ${
                    isSelected
                      ? "bg-brass text-night font-medium"
                      : isPast
                      ? "text-sand-dim/25 cursor-not-allowed"
                      : isToday
                      ? "text-brass-light ring-1 ring-brass-light/60 hover:bg-sand/10"
                      : "text-sand hover:bg-sand/10"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              onChange(toISODate(today));
              setViewDate(today);
              setOpen(false);
            }}
            className="mt-3 text-xs text-brass-light hover:underline"
          >
            Today
          </button>
        </div>
      )}
    </div>
  );
}
