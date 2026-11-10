import { skills, learning } from '../data/skills'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
            <h2 className="font-display text-3xl font-bold">Skills</h2>
        

        <div className="mt-10 space-y-8">
          {skills.map((group) => (
              <div
              key={group.group}
              className="grid gap-3 sm:grid-cols-[10rem_1fr]"
              >
              <h3 className="text-sm uppercase tracking-widest text-muted">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                    <li
                    key={item}
                    className="rounded-full border border-line px-4 py-1.5 text-sm"
                    >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="grid gap-3 sm:grid-cols-[10rem_1fr]">
            <h3 className="text-sm uppercase tracking-widest text-accent">
              Currently being studied
            </h3>
            <ul className="flex flex-wrap gap-2">
              {learning.map((item) => (
                  <li
                  key={item}
                  className="rounded-full border border-dashed border-accent/50 px-4 py-1.5 text-sm text-muted"
                  >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}