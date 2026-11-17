/**
 * Hero visual: a Clay-style table where each row "enriches" left to right.
 * Pure CSS — every filled cell fades in on a staggered delay over a shimmering
 * placeholder, so it reads as data landing in real time. Decorative.
 */

type Row = {
  company: string;
  domain: string;
  size: string;
  signal: string;
  fit: "High" | "Med";
};

const rows: Row[] = [
  { company: "Juniper Labs", domain: "juniperlabs.io", size: "11–50", signal: "Hiring 2 AEs", fit: "High" },
  { company: "Bluebonnet AI", domain: "bluebonnet.ai", size: "51–200", signal: "Series A", fit: "High" },
  { company: "Cedar Freight", domain: "cedar.co", size: "11–50", signal: "New VP Sales", fit: "Med" },
  { company: "Lamar Health", domain: "lamar.health", size: "201+", signal: "Launched API", fit: "High" },
  { company: "Pecan Street", domain: "pecanst.co", size: "1–10", signal: "Top of HN", fit: "Med" },
];

const columns = ["Company", "Domain", "Size", "Signal", "Fit"] as const;

function Cell({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <td className="relative px-3 py-2.5 align-middle">
      <span
        aria-hidden="true"
        className="cell-pending absolute inset-x-3 top-1/2 h-2.5 -translate-y-1/2 rounded animate-shimmer"
      />
      <span
        className="relative block truncate bg-white animate-cell-in"
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </td>
  );
}

export default function EnrichTable() {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden rounded-xl border border-clay-line bg-white shadow-panel"
    >
      <div className="flex items-center justify-between border-b border-clay-line px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-clay-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-clay-yellow" />
          <span className="h-2.5 w-2.5 rounded-full bg-clay-sky" />
          <span className="ml-2 font-mono text-xs text-clay-ink/60">
            austin-startups.csv
          </span>
        </div>
        <span className="rounded-md bg-clay-ink px-2 py-1 font-mono text-[11px] text-white">
          ▶ Run 5 rows
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] table-fixed text-left font-mono text-[12px] text-clay-ink/80">
          <colgroup>
            <col className="w-[26%]" />
            <col className="w-[26%]" />
            <col className="w-[14%]" />
            <col className="w-[22%]" />
            <col className="w-[12%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-clay-line bg-clay-paper/70 text-[11px] uppercase tracking-wide text-clay-ink/50">
              {columns.map((c) => (
                <th key={c} className="px-3 py-2 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const base = 400 + i * 450;
              return (
                <tr key={r.company} className="border-b border-clay-line last:border-0">
                  <td className="px-3 py-2.5 font-medium text-clay-ink">{r.company}</td>
                  <Cell delay={base}>{r.domain}</Cell>
                  <Cell delay={base + 120}>{r.size}</Cell>
                  <Cell delay={base + 240}>{r.signal}</Cell>
                  <Cell delay={base + 360}>
                    <span
                      className={`inline-block rounded px-1.5 py-0.5 text-[11px] font-medium ${
                        r.fit === "High"
                          ? "bg-[#E6F6EC] text-[#1F7A43]"
                          : "bg-clay-yellow/30 text-[#7A5B00]"
                      }`}
                    >
                      {r.fit}
                    </span>
                  </Cell>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
