"use client";

type StepperProps = {
  value: string;
  onChange: (value: string) => void;
  min?: number;
  step?: number;
  placeholder?: string;
};

export default function Stepper({ value, onChange, min = 1, step = 50, placeholder }: StepperProps) {
  const numeric = Number(value) || 0;

  function set(next: number) {
    onChange(String(Math.max(min, next)));
  }

  return (
    <div className="flex items-stretch bg-charcoal/60 border border-sand/15 rounded-sm overflow-hidden focus-within:border-brass-light">
      <button
        type="button"
        data-cursor-hover
        aria-label="Decrease guest count"
        onClick={() => set(numeric ? numeric - step : min)}
        className="w-11 shrink-0 flex items-center justify-center text-sand-dim hover:text-brass-light hover:bg-sand/5 transition-colors text-lg"
      >
        &minus;
      </button>
      <input
        type="text"
        inputMode="numeric"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, ""))}
        className="w-full min-w-0 bg-transparent text-center text-sand placeholder:text-sand-dim/60 focus:outline-none"
      />
      <button
        type="button"
        data-cursor-hover
        aria-label="Increase guest count"
        onClick={() => set(numeric + step)}
        className="w-11 shrink-0 flex items-center justify-center text-sand-dim hover:text-brass-light hover:bg-sand/5 transition-colors text-lg"
      >
        +
      </button>
    </div>
  );
}
