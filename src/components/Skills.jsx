import { skills, learning } from "../data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section-wrap border-t border-line py-20 sm:py-28">
      <Reveal>
        <p className="section-heading">04 — Toolkit</p>
        <h2 className="section-title">Skills</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-6 rounded-2xl border border-dashed border-line p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Currently being studied
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {learning.map((item) => (
              <li
                key={item}
                className="rounded-md bg-line/50 px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}