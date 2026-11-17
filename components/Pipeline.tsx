/**
 * "How a workflow runs" — five steps of a Clay workflow connected by a track
 * with a pulse traveling along it. Horizontal on desktop, vertical on mobile.
 */

const steps = [
  { label: "Find", out: "120 Austin startups", color: "#5FC3E7" },
  { label: "Enrich", out: "+ headcount, funding, stack", color: "#FFD84D" },
  { label: "Score", out: "38 high-fit accounts", color: "#F26D6D" },
  { label: "Write", out: "Personal first lines", color: "#BF5700" },
  { label: "Send", out: "Synced to the CRM", color: "#17150F" },
];

export default function Pipeline() {
  return (
    <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-3">
      {/* Track: vertical on mobile, horizontal on desktop */}
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-clay-ink/15 md:bottom-auto md:left-6 md:right-6 md:top-[1.4rem] md:h-px md:w-auto"
      >
        <span className="pipeline-pulse absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay-coral shadow-[0_0_0_4px_rgba(242,109,109,0.2)]" />
      </span>

      {steps.map((s, i) => (
        <li key={s.label} className="relative flex items-start gap-4 md:flex-col md:gap-5">
          <span
            className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-clay-line bg-white font-mono text-xs font-medium shadow-panel"
          >
            <span className="h-3 w-3 rounded-[4px]" style={{ backgroundColor: s.color }} />
          </span>
          <div className="pt-1 md:pt-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-clay-ink/45">
              Step {i + 1}
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight">{s.label}</p>
            <p className="mt-1 font-mono text-[13px] text-clay-ink/60">{s.out}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
