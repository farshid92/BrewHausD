import { useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-bold">
          Brew<span className="text-ember">Haus</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-menu"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition hover:bg-line md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-ink-soft transition-colors hover:text-ember">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul id="main-menu" className="flex flex-col border-t border-line px-6 py-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-ink-soft transition-colors hover:text-ember"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
