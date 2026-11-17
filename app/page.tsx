import Image from "next/image";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import Pipeline from "@/components/Pipeline";
import {
  WorkflowArt,
  CampusArt,
  EventArt,
  GrowthArt,
  ConnectArt,
  CredentialArt,
  SwagArt,
} from "@/components/Illustrations";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScasv6uelO55eDyfgPLRzbPi_l2Ewipv8F7pOTiciZNaUCl0A/viewform?usp=dialog";
const INSTAGRAM_URL = "https://www.instagram.com/texas.clay";
const LINKEDIN_URL = ""; // TODO: add the club LinkedIn URL — the link stays hidden until set
const EMAIL = "clayoncampusut@gmail.com";

const whatWeDo = [
  {
    title: "Run real workflows",
    body: "Enrich lists, score accounts, ship outbound.",
    Art: WorkflowArt,
  },
  {
    title: "Champion Clay on campus",
    body: "Teach the tooling to other students.",
    Art: CampusArt,
  },
  {
    title: "Host events and teardowns",
    body: "Workshops and live teardowns with GTM operators.",
    Art: EventArt,
  },
];

const perks = [
  {
    title: "Learn GTM engineering",
    body: "The stack top GTM teams run on.",
    tint: "bg-[#FDEDED]",
    Art: GrowthArt,
  },
  {
    title: "Connect with Clay",
    body: "Meet the team behind it.",
    tint: "bg-clay-bg",
    Art: ConnectArt,
  },
  {
    title: "Resume-ready work",
    body: "Real projects plus a Clay Ambassador credential.",
    tint: "bg-[#FBEFE4]",
    Art: CredentialArt,
  },
  {
    title: "Swag",
    body: "Merch, stickers, gear.",
    tint: "bg-[#FFF6D6]",
    Art: SwagArt,
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
        <Hero formUrl={FORM_URL} />

        {/* ============ HOW A WORKFLOW RUNS ============ */}
        <section className="border-b border-clay-line py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>How a workflow runs</SectionLabel>
              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
                List in, meetings out.
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-12">
              <Pipeline />
            </Reveal>
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
            </Reveal>

            <ol className="border-t border-clay-line">
              {whatWeDo.map(({ title, body, Art }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 80}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-clay-line py-8 sm:grid-cols-[4.5rem_1fr_11rem] sm:items-center"
                >
                  <span className="self-start font-mono text-sm text-clay-coral-ink">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-clay-ink/65">
                      {body}
                    </p>
                  </div>
                  <div className="col-start-2 max-w-[13rem] rounded-xl bg-clay-paper p-2 sm:col-start-auto sm:max-w-none">
                    <Art />
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
                More than a resume line.
              </h2>
            </Reveal>

            <Reveal
              as="div"
              className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-clay-line bg-clay-line sm:grid-cols-2 lg:grid-cols-4"
            >
              {perks.map(({ title, body, tint, Art }) => (
                <div key={title} className="bg-white p-4 sm:p-5">
                  <div className={`rounded-lg px-4 py-3 ${tint}`}>
                    <Art />
                  </div>
                  <h3 className="mt-5 px-1 text-lg font-bold leading-snug tracking-tight">{title}</h3>
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
                No sales or CS background needed. Just curiosity.
              </h2>
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
                Small first cohort
              </p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
                Apply to be a Clay Ambassador.
              </h2>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-clay-coral-ink px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#B23434] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-clay-ink"
                >
                  Apply now
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded text-sm text-white/65 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Questions? Email us
                </a>
              </div>
            </Reveal>
            <div className="mx-auto hidden w-full max-w-[320px] md:block">
              <Image
                src="/brand/clay-arch.png"
                alt=""
                width={564}
                height={427}
                className="h-auto w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
              />
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
            <span>Official Clay Ambassador Club · UT Austin</span>
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
