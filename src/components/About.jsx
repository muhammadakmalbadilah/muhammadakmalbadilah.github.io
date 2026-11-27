import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-wrap border-t border-line py-20 sm:py-28">
      <Reveal>
        <p className="section-heading">01 — About</p>
        <h2 className="section-title">
          Turning ideas into usable applications.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={100}>
          <p className="text-base leading-relaxed text-muted">
            I am a vocational high school graduate with a major in Software
            Engineering who has completed an internship as a Web Developer. I
            enjoy building websites because I&apos;m fascinated by the process
            of turning ideas and requirements into usable applications — from
            designing the user interface to developing the functionality.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Currently, I am seeking a job opportunity as a Junior Web Developer
            or Full-Stack Developer to further develop my skills and gain
            professional experience.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              What I&apos;m proud of
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              My involvement in the development of the{" "}
              <span className="font-medium">Stocks &amp; Crypto Trading Recorder</span>{" "}
              app and my role in developing the{" "}
              <span className="font-medium">Broker Summary</span> feature during
              my internship.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Self-taught", "Problem solver", "Curious by default"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}