import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-xl">
      <nav className="section-wrap flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" aria-label="Home">
          <Logo className="h-7 w-7" />
          <span className="font-mono text-sm tracking-tight text-ink">
            akmal
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}