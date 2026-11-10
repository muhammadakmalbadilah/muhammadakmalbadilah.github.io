import Reveal from './Reveal'

const EMAIL = 'muhammadakmalbadillah@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/muhammad-akmal-badilah-8572513aa/'
const GITHUB = 'https://github.com/muhammadakmalbadilah'

const links = [
  { label: 'Email', href: `mailto:${EMAIL}`, external: false },
  { label: 'GitHub', href: GITHUB, external: true },
  { label: 'LinkedIn', href: LINKEDIN, external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-3xl px-6 pb-12 pt-24">
        <Reveal>
          <h2 className="section-title">Get in touch</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I'm currently looking for a position as a web developer. If you have any openings or would just like to get to know me, please let me know.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external && {
                    target: '_blank',
                    rel: 'noreferrer',
                  })}
                  className="inline-block rounded-full border border-line px-5 py-2.5 transition hover:border-accent hover:text-accent"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-20 text-xs text-muted">
          © {new Date().getFullYear()} Muhammad Akmal Badilah
        </p>
      </div>
    </section>
  )
}