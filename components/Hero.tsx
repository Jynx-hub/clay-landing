import Image from "next/image";
import EnrichTable from "@/components/EnrichTable";

const ticker = [
  "Waterfall enrichment",
  "Intent signals",
  "AI research agents",
  "Lead scoring",
  "Personalized outbound",
  "CRM sync",
];

export default function Hero({ formUrl }: { formUrl: string }) {
  return (
    <section className="relative overflow-hidden border-b border-clay-ink bg-clay-bg">
      {/* Spreadsheet grid, fading out toward the edges */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-28 lg:pt-16">
        {/* ---- Copy ---- */}
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-clay-ink/10 bg-white/70 py-1.5 pl-3 pr-4 text-sm font-medium text-clay-ink/60 backdrop-blur">
            <span className="text-clay-ut">UT Austin</span>
            <span aria-hidden="true">·</span>
            Powered by
            <Image src="/brand/clay-logo-dark.png" alt="Clay" width={60} height={19} className="-mt-0.5" priority />
          </p>

          <h1 className="mt-7 text-[3.25rem] font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-[5.25rem]">
            Learn GTM
            <br />
            <span className="whitespace-nowrap">
            by{" "}
            <span className="relative inline-block">
              <span className="relative z-10">running it.</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 300 24"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 z-0 h-[0.32em] w-full"
              >
                <path
                  d="M4 16 C70 6 150 4 296 12"
                  stroke="#F26D6D"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            </span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-clay-ink/65">
            UT students building real Clay workflows.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-clay-ink px-7 py-3.5 text-base font-semibold text-white shadow-[0_4px_0_0_#F26D6D] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#F26D6D] focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-ink focus-visible:ring-offset-2 focus-visible:ring-offset-clay-bg"
            >
              Apply for Fall 2026
            </a>
            <a
              href="#what-we-do"
              className="group inline-flex items-center gap-1.5 rounded text-base font-semibold underline decoration-clay-ink/25 underline-offset-4 transition-colors hover:decoration-clay-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-ink"
            >
              What we do
              <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* ---- Visual: clay arch with the workflow table in front ---- */}
        <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
          <div className="relative ml-auto w-[78%] sm:w-[70%]">
            <Image
              src="/brand/clay-arch.png"
              alt=""
              width={564}
              height={427}
              priority
              className="relative z-0 h-auto w-full drop-shadow-[0_30px_30px_rgba(23,21,15,0.18)]"
            />
            {/* Fall 2026 sticker */}
            <div className="animate-bob absolute -left-6 -top-4 z-20 flex h-20 w-20 rotate-[-12deg] items-center justify-center rounded-full bg-clay-yellow text-center text-[11px] font-extrabold uppercase leading-tight tracking-wide shadow-panel sm:-left-10 sm:h-24 sm:w-24 sm:text-xs">
              Fall
              <br />
              2026
              <br />
              cohort
            </div>
          </div>

          <div className="relative z-10 -mt-[22%] rotate-[-2deg] sm:mr-[6%] sm:-mt-[26%]">
            <EnrichTable compact />
            <div className="animate-bob absolute -bottom-12 right-2 hidden items-center gap-2.5 rounded-xl border border-clay-line bg-white px-3.5 py-2.5 shadow-panel [animation-delay:-2s] sm:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E6F6EC] text-sm text-[#1F7A43]">
                ✓
              </span>
              <span className="text-sm font-semibold">3 high-fit accounts</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Ticker ---- */}
      <div className="relative border-t border-clay-ink bg-clay-ink py-3 text-white" aria-hidden="true">
        <div className="ticker flex w-max gap-10 whitespace-nowrap font-mono text-sm">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span className="text-clay-coral">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
