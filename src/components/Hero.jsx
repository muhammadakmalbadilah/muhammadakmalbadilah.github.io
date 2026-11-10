import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-20 text-center sm:pt-28">
      <Reveal>
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          Hi, my name is <span className="text-accent">Akmal.</span>
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-6 font-mono text-sm text-muted sm:text-base">
          Backend Developer
        </p>
      </Reveal>

      <Reveal delay={200}>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
          I build clean, user-friendly websites. I handle both the front-end and back-end aspects, from the initial concept to a fully functional website.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="#project"
            className="rounded-full bg-accent px-6 py-3 font-medium text-paper transition hover:opacity-85"
          >
            View project
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 transition hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </div>
      </Reveal>
    </section>
  )
}