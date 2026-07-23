'use client';

import { RotateCcw } from 'lucide-react';

export interface FilterState {
  // affixes: EnchantAffix[]
  // parts: EnchantPart[]
  // ranks: EnchantRank[]
}

interface EnchantFiltersProps {
  filters: FilterState;
  onChange: (next: FilterState) => void;
  onReset: () => void;
  resultCount: number;
}

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

function CheckRow({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent">
      <span
        className={`flex size-4 shrink-0 items-center justify-center rounded border transition-colors ${
          checked
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-border bg-transparent'
        }`}
      >
        {checked && (
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="size-3"
            aria-hidden="true"
          >
            <path
              d="M3.5 8.5l3 3 6-6.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onToggle}
      />
      <span className={checked ? 'text-foreground' : 'text-muted-foreground'}>
        {label}
      </span>
    </label>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border py-4 last:border-b-0">
      <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}

export function EnchantFilters({
  filters,
  onChange,
  onReset,
  resultCount,
}: EnchantFiltersProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-2 pb-3">
        <div>
          <h2 className="text-sm font-semibold text-foreground">필터</h2>
          <p className="text-xs text-muted-foreground">{resultCount}개 결과</p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <RotateCcw className="size-3.5" />
          초기화
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <Section title="분류 (접두 / 접미)">
          3
          {/* {AFFIXES.map((affix) => (
            <CheckRow
              key={affix}
              label={affix}
              checked={filters.affixes.includes(affix)}
              onToggle={() => onChange({ ...filters, affixes: toggle(filters.affixes, affix) })}
            />
          ))} */}
        </Section>

        <Section title="부위">
          2
          {/* {PARTS.map((part) => (
            <CheckRow
              key={part}
              label={part}
              checked={filters.parts.includes(part)}
              onToggle={() => onChange({ ...filters, parts: toggle(filters.parts, part) })}
            />
          ))} */}
        </Section>

        <Section title="랭크">
          1
          {/* {RANKS.map((rank) => (
            <CheckRow
              key={rank}
              label={rank}
              checked={filters.ranks.includes(rank)}
              onToggle={() => onChange({ ...filters, ranks: toggle(filters.ranks, rank) })}
            />
          ))} */}
        </Section>
      </div>
    </div>
  );
}
