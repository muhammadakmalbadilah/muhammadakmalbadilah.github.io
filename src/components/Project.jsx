import { useEffect, useRef, useState } from "react";
import { GITHUB_USERNAME, featured } from "../data/Project";
import Reveal from "./Reveal";

export default function Projects() {
  const [repos, setRepos] = useState({});
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    async function load() {
      const githubProjects = featured.filter((p) => p.repo);
      const results = await Promise.allSettled(
        githubProjects.map((p) =>
          fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${p.repo}`).then(
            (res) => {
              if (!res.ok) throw new Error(res.status);
              return res.json();
            }
          )
        )
      );
      const data = {};
      results.forEach((result, i) => {
        if (result.status === "fulfilled") {
          data[githubProjects[i].repo] = result.value;
        }
      });
      setRepos(data);
    }
    load();
  }, []);

  function goTo(index) {
    const track = trackRef.current;
    const target = Math.max(0, Math.min(index, featured.length - 1));
    track.scrollTo({ left: target * track.clientWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  const arrowClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30";

  return (
    <section id="project" className="section-wrap border-t border-line py-20 sm:py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-heading">02 — Selected work</p>
            <h2 className="section-title">Projects</h2>
          </div>
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
      </Reveal>

      <Reveal delay={100}>
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((project, i) => {
            const gh = project.repo ? repos[project.repo] : undefined;
            const demo = project.live || gh?.homepage;
            const codeUrl =
              project.url ??
              `https://github.com/${GITHUB_USERNAME}/${project.repo}`;

            return (
              <article
                key={project.repo ?? project.url}
                className="flex w-full flex-none snap-start flex-col rounded-2xl border border-line bg-card p-6 sm:w-[calc(100%-1rem)] sm:p-8 lg:w-[520px]"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted">
                  <span>
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(featured.length).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-[10px]">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      View the code at {project.source ?? "GitHub"} ↗
                    </a>
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        Demo ↗
                      </a>
                    )}
                    {gh && (
                      <span className="ml-auto font-mono text-[11px] text-muted">
                        {gh.language && `${gh.language} · `}★ {gh.stargazers_count}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-6 flex gap-2">
        {featured.map((project, i) => (
          <button
            key={project.repo ?? project.url}
            onClick={() => goTo(i)}
            aria-label={`Ke project ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-accent" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </section>
  );
}