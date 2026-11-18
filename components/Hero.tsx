import Image from "next/image";

const ticker = [
  "Rep Clay at UT",
  "Clay swag",
  "Meet the Clay team",
  "Real GTM projects",
  "Ambassador credential",
  "Workshops & teardowns",
];

/** Ambassador ID badge that sits in front of the arch. Decorative. */
function Badge() {
  return (
    <div className="w-[230px] overflow-hidden rounded-2xl border border-clay-line bg-white shadow-[0_24px_48px_-20px_rgba(23,21,15,0.35)] sm:w-[260px]">
      <div className="relative flex h-16 items-center justify-between bg-clay-sky px-5">
        <span className="absolute left-1/2 top-2.5 h-2 w-12 -translate-x-1/2 rounded-full bg-white/70" />
        <Image src="/brand/clay-logo-light.png" alt="" width={56} height={18} className="mt-3" />
        <span className="mt-3 font-mono text-[10px] font-medium uppercase tracking-widest text-white/90">
          Fall 2026
        </span>
      </div>
      <div className="px-5 pb-5 pt-4">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay-yellow text-lg font-bold">
            You
          </span>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-clay-ink/45">
              Clay
            </p>
            <p className="text-lg font-bold leading-tight tracking-tight">Ambassador</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-dashed border-clay-line pt-3 text-xs">
          <span className="font-medium text-clay-ut">UT Austin</span>
          <span className="font-mono text-clay-ink/40">#001</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ formUrl }: { formUrl: string }) {
  return (
    <section className="relative flex min-h-[calc(100svh-65px)] flex-col overflow-hidden border-b border-clay-ink bg-clay-bg">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 content-center items-center gap-14 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:pb-24 lg:pt-16">
        {/* ---- Copy ---- */}
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-clay-ink/10 bg-white/70 py-1.5 pl-3 pr-4 text-sm font-medium text-clay-ink/60">
            <span className="text-clay-ut">UT Austin</span>
            <span aria-hidden="true">·</span>
            Powered by
            <Image src="/brand/clay-logo-dark.png" alt="Clay" width={56} height={18} className="-mt-0.5" priority />
          </p>

          <h1 className="mt-7 text-[2.9rem] font-bold leading-[1] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Become a Clay Ambassador.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-clay-ink/65">
            Rep Clay at UT, learn modern GTM, and join the first cohort.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-clay-ink px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-ink focus-visible:ring-offset-2 focus-visible:ring-offset-clay-bg"
            >
              Apply to be an ambassador
            </a>
            <a
              href="#perks"
              className="rounded text-base font-semibold underline decoration-clay-ink/25 underline-offset-4 transition-colors hover:decoration-clay-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-ink"
            >
              See the perks
            </a>
          </div>
        </div>

        {/* ---- Visual: clay arch with an ambassador badge in front ---- */}
        <div className="relative mx-auto w-full max-w-[500px]" aria-hidden="true">
          <div className="relative ml-auto w-[80%]">
            <Image
              src="/brand/clay-arch.png"
              alt=""
              width={564}
              height={427}
              priority
              className="h-auto w-full drop-shadow-[0_30px_30px_rgba(23,21,15,0.18)]"
            />
          </div>
          <div className="animate-bob absolute -bottom-8 left-0 sm:left-2">
            <div className="rotate-[-6deg]">
              <Badge />
            </div>
          </div>
        </div>
      </div>

      {/* ---- Ticker: what ambassadors get ---- */}
      <div className="relative bg-clay-ink py-3 text-white" aria-hidden="true">
        <div className="ticker flex w-max gap-10 whitespace-nowrap text-sm font-medium">
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
