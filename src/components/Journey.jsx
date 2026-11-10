import Reveal from './Reveal'
import { experience, education } from '../data/Journey'

function Group({ label, items }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
        {label}
      </h3>
      <ul className="mt-4">
        {items.map((item) => (
          <li
            key={item.title + item.period}
            className="grid gap-1 border-t border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <p className="font-mono text-xs text-muted sm:pt-1">
              {item.period}
            </p>
            <div>
              <h4 className="text-lg font-semibold tracking-tight">
                {item.title}
              </h4>
              <p className="text-muted">{item.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Journey() {
  return (
    <section id="journey" className="border-t border-line">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <h2 className="section-title">Journey</h2>
          <div className="mt-10 space-y-12">
            <Group label="Experience" items={experience} />
            <Group label="Education" items={education} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}