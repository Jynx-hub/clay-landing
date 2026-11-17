import Logo from "@/components/Logo";

const links = [
  { href: "#what-we-do", label: "What we do" },
  { href: "#perks", label: "Perks" },
  { href: "#who", label: "Who it's for" },
];

/** Sticky top nav: wordmark, section links, Apply CTA. */
export default function Nav({ formUrl }: { formUrl: string }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-clay-line/80 bg-clay-paper/85 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-ink"
        >
          <Logo size={24} />
          <span className="text-[15px] font-bold tracking-tight">Clay on Campus</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm text-clay-ink/70 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded transition-colors hover:text-clay-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-clay-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-ink focus-visible:ring-offset-2 focus-visible:ring-offset-clay-paper"
          >
            Apply
          </a>
        </div>
      </nav>
    </header>
  );
}
