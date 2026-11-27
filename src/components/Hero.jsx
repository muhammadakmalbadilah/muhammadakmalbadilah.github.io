import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="section-wrap pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
        {/* Kiri — headline utama */}
        <Reveal>
          <p className="section-heading">Backend Developer</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, my name is Akmal.
            <br />
            <span className="text-muted">
              I build things for the web — end to end.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I handle both the front-end and back-end aspects, from the initial
            concept to a fully functional website.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#project"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-80"
            >
              View project <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contact me
            </a>
          </div>
        </Reveal>

        {/* Kanan — status card kecil, memberi kesan "sedang aktif" */}
        <Reveal delay={150}>
          <div className="rounded-2xl border border-line bg-card p-6 lg:mb-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Open to work
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Currently seeking a{" "}
              <span className="text-ink">Junior Web Developer</span> or{" "}
              <span className="text-ink">Full-Stack Developer</span> position.
            </p>
            <div className="mt-5 border-t border-line pt-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Based in
              </p>
              <p className="mt-1 text-sm text-ink">Cimahi, Indonesia</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}