import Reveal from "./Reveal";
import { experience, education } from "../data/Journey";

function Group({ label, items }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
        {label}
      </h3>
      <ul className="mt-5 space-y-6">
        {items.map((item) => (
          <li key={item.title} className="border-l-2 border-line pl-5">
            <p className="font-mono text-[11px] text-muted">{item.period}</p>
            <p className="mt-1.5 font-medium text-ink">{item.title}</p>
            <p className="mt-0.5 text-sm text-muted">{item.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="section-wrap border-t border-line py-20 sm:py-28">
      <Reveal>
        <p className="section-heading">03 — Background</p>
        <h2 className="section-title">Journey</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-16">
          <Group label="Experience" items={experience} />
          <Group label="Education" items={education} />
        </div>
      </Reveal>
    </section>
  );
}