import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Arches from "@/components/Arches";
import Reveal from "@/components/Reveal";
import EnrichTable from "@/components/EnrichTable";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScasv6uelO55eDyfgPLRzbPi_l2Ewipv8F7pOTiciZNaUCl0A/viewform?usp=dialog";
const INSTAGRAM_URL = "https://www.instagram.com/texas.clay";
const LINKEDIN_URL = ""; // TODO: add the club LinkedIn URL — the link stays hidden until set
const EMAIL = "clayoncampusut@gmail.com";

const whatWeDo = [
  {
    title: "Run real workflows",
    body: "Build the automations GTM teams actually use: enrich lists, score accounts, find buying signals, and ship outbound that runs on its own.",
  },
  {
    title: "Champion Clay on campus",
    body: "We're UT's official Clay Ambassador crew. We teach other students the tooling and bring modern GTM engineering to campus.",
  },
  {
    title: "Host events and teardowns",
    body: "Workshops, speaker nights, and live breakdowns of real workflows with GTM operators who run them every day.",
  },
];

const perks = [
  {
    title: "Learn GTM engineering",
    body: "The tooling and workflows top go-to-market teams run on, learned by building them.",
    accent: "bg-clay-coral",
  },
  {
    title: "Connect with Clay",
    body: "Meet the Clay team and the people building modern go-to-market.",
    accent: "bg-clay-sky",
  },
  {
    title: "Something real for your resume",
    body: "Projects you can show and a Clay Ambassador credential you can point to.",
    accent: "bg-clay-ut",
  },
  {
    title: "Swag",
    body: "Clay merch, stickers, and gear for the people who show up.",
    accent: "bg-clay-yellow",
  },
];

const roles = [
  "Founders",
  "Aspiring VCs",
  "Marketers",
  "Engineers",
  "PMs",
  "Data nerds",
  "Business majors",
  "Anyone curious",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.12em] text-clay-ink/50">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Nav formUrl={FORM_URL} />
      <main id="top">
        {/* ============ HERO ============ */}
        <section className="border-b border-clay-line">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:pb-24 lg:pt-20">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-sm font-medium text-clay-ink/70">
                <span className="h-2 w-2 rounded-full bg-clay-ut" aria-hidden="true" />
                UT Austin&rsquo;s GTM Ambassador Club, powered by Clay
              </p>
              <h1 className="mt-5 text-balance text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-[4.5rem]">
                Learn <span className="whitespace-nowrap">go-to-market</span> by actually running it.
              </h1>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-clay-ink/70">
                Clay on Campus is a crew of UT students building real Clay
                workflows: enriching data, finding signals, and shipping outbound
                the way modern GTM teams do.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-clay-coral-ink px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#B23434] focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-ink focus-visible:ring-offset-2 focus-visible:ring-offset-clay-paper"
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
              <p className="mt-6 text-sm text-clay-ink/55">
                Small first cohort. No sales or CS background needed.
              </p>
            </div>

            <div className="relative min-w-0">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rotate-[-2deg] rounded-2xl bg-clay-bg sm:-inset-6"
              />
              <EnrichTable />
            </div>
          </div>
        </section>

        {/* ============ WHAT WE DO ============ */}
        <section id="what-we-do" className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel>What we do</SectionLabel>
              <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                Part builders, part ambassadors.
              </h2>
              <p className="mt-5 max-w-sm text-lg leading-relaxed text-clay-ink/65">
                We&rsquo;re Clay&rsquo;s presence at UT. Most of what we do is
                hands-on.
              </p>
            </Reveal>

            <ol className="border-t border-clay-line">
              {whatWeDo.map(({ title, body }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 80}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-clay-line py-8 sm:grid-cols-[4.5rem_1fr]"
                >
                  <span className="font-mono text-sm text-clay-coral-ink">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-clay-ink/65">
                      {body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ PERKS ============ */}
        <section id="perks" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <SectionLabel>What you get</SectionLabel>
              <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                Walk away with more than a resume line.
              </h2>
            </Reveal>

            <Reveal
              as="div"
              className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-clay-line bg-clay-line sm:grid-cols-2 lg:grid-cols-4"
            >
              {perks.map(({ title, body, accent }) => (
                <div key={title} className="bg-white p-6 sm:p-7">
                  <span className={`block h-1.5 w-8 rounded-full ${accent}`} aria-hidden="true" />
                  <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-clay-ink/65">{body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ WHO SHOULD JOIN ============ */}
        <section id="who" className="border-y border-clay-line bg-clay-bg py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-end lg:gap-20">
            <Reveal>
              <SectionLabel>Who it&rsquo;s for</SectionLabel>
              <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                No sales background. No CS background. Just curiosity.
              </h2>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-clay-ink/70">
                GTM touches everything a company does, so it&rsquo;s useful no
                matter where you&rsquo;re headed. Curiosity and follow-through
                matter more than your major.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="flex flex-wrap gap-2.5" aria-label="Who should join">
                {roles.map((r) => (
                  <li
                    key={r}
                    className="rounded-lg border border-clay-ink/10 bg-white px-4 py-2 text-[15px] font-medium"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ APPLY ============ */}
        <section id="apply" className="bg-clay-ink text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-clay-yellow">
                Applications open · Fall 2026
              </p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
                The first cohort is small. We want people who ship.
              </h2>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-clay-coral-ink px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#B23434] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-clay-ink"
                >
                  Fill out the interest form
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded text-sm text-white/65 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Questions? {EMAIL}
                </a>
              </div>
            </Reveal>
            <div className="mx-auto hidden w-full max-w-[300px] md:block">
              <Arches />
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-clay-ink text-sm text-white/55">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <Logo size={20} />
            <span className="font-semibold text-white">Clay on Campus</span>
            <span className="text-white/35">·</span>
            <span>An official Clay Ambassador Club at UT Austin</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Instagram
            </a>
            {LINKEDIN_URL && (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                LinkedIn
              </a>
            )}
            <a
              href={`mailto:${EMAIL}`}
              className="rounded transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-8 text-xs text-white/35 sm:px-8">
          © 2026 Clay on Campus. Not affiliated with UT Austin administration.
        </div>
      </footer>
    </>
  );
}
