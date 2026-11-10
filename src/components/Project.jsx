import { useEffect, useRef, useState } from 'react'
import { GITHUB_USERNAME, featured } from '../data/Project'
import Reveal from './Reveal'

export default function Projects() {
  const [repos, setRepos] = useState({})
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    async function load() {
    const githubProjects = featured.filter((p) => p.repo)
    const results = await Promise.allSettled(
        githubProjects.map((p) =>
        fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${p.repo}`).then(
            (res) => {
            if (!res.ok) throw new Error(res.status)
            return res.json()
            }
        )
        )
    )
    const data = {}
    results.forEach((result, i) => {
        if (result.status === 'fulfilled') data[githubProjects[i].repo] = result.value
    })
    setRepos(data)
    }
    load()
  }, [])

  function goTo(index) {
    const track = trackRef.current
    const target = Math.max(0, Math.min(index, featured.length - 1))
    track.scrollTo({ left: target * track.clientWidth, behavior: 'smooth' })
  }

  function handleScroll() {
    const track = trackRef.current
    setActive(Math.round(track.scrollLeft / track.clientWidth))
  }

  const arrowClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30'

  return (
    <section id="project" className="border-t border-line">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold">Projects</h2>
          <div className="flex gap-2">
            <button
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Project sebelumnya"
              className={arrowClass}
            >
              ←
            </button>
            <button
              onClick={() => goTo(active + 1)}
              disabled={active === featured.length - 1}
              aria-label="Project berikutnya"
              className={arrowClass}
            >
              →
            </button>
          </div>
        </div>

        <Reveal className="mt-8">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featured.map((project, i) => {
              const gh = project.repo ? repos[project.repo] : undefined
              const demo = project.live || gh?.homepage
              const codeUrl =
              project.url ?? `https://github.com/${GITHUB_USERNAME}/${project.repo}`
            const key = project.repo ?? project.url

              return (
                <div key={key} className="w-full shrink-0 snap-center">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 sm:p-8">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-muted">
                        {String(i + 1).padStart(2, '0')} /{' '}
                        {String(featured.length).padStart(2, '0')}
                      </span>
                      <span className="uppercase tracking-widest text-accent">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line px-3 py-1 text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-5 pt-8 text-sm">
                      <a
                        href={codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:text-accent hover:underline"
                        >
                        View the code at {project.source ?? 'GitHub'} ↗
                    </a>
                      {demo && (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noreferrer"
                          className="underline-offset-4 hover:text-accent hover:underline"
                        >
                          Demo ↗
                        </a>
                      )}
                      {gh && (
                        <span className="font-mono text-xs text-muted">
                          {gh.language && `${gh.language} · `}★ {gh.stargazers_count}
                        </span>
                      )}
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center gap-2">
          {featured.map((project, i) => (
            <button
              key={project.repo}
              onClick={() => goTo(i)}
              aria-label={`Ke project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? 'w-6 bg-accent' : 'w-1.5 bg-line'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}