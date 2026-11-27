import Reveal from "./Reveal";

const EMAIL = "muhammadakmalbadillah@gmail.com";
const LINKEDIN =
  "https://www.linkedin.com/in/muhammad-akmal-badilah-8572513aa/";
const GITHUB = "https://github.com/muhammadakmalbadilah";

const links = [
  { label: "Email", href: `mailto:${EMAIL}`, external: false },
  { label: "GitHub", href: GITHUB, external: true },
  { label: "LinkedIn", href: LINKEDIN, external: true },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="section-wrap py-20 sm:py-28">
        <Reveal>
          <p className="section-heading">05 — Contact</p>
          <h2 className="section-title">
            Let&apos;s build something
            <br />
            <span className="text-muted">worth shipping.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            I&apos;m currently looking for a position as a web developer. If you
            have any openings or would just like to get to know me, please let
            me know.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label} <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} Muhammad Akmal Badilah
          </p>
          <p className="font-mono text-[11px] text-muted">
            Built with React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}