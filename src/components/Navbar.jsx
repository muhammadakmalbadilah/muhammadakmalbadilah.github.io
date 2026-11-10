import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#project' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <a href="#" className="font-mono text-sm tracking-tight">
          akmal<span className="text-accent">_</span>
        </a>
        <div className="flex items-center gap-5">
          <ul className="hidden gap-5 font-mono text-xs text-muted sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}