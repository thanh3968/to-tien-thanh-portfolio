import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import Icon from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || open ? 'border-white/10 bg-ink/90 backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center border border-cyan/50 bg-cyan/10 font-mono text-xs font-bold text-cyan transition group-hover:bg-cyan group-hover:text-ink">
            {profile.initials}
          </span>
          <span className="font-semibold tracking-tight text-white">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="font-mono text-xs uppercase tracking-widest text-slate-400 transition hover:text-cyan">
              {link.label}
            </a>
          ))}
        </div>

        <button className="grid h-10 w-10 place-items-center text-white md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? 'max-h-96 border-t border-white/10' : 'max-h-0'}`}>
        <div className="container-page flex flex-col py-4">
          {navLinks.map((link, index) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-4 border-b border-white/5 py-4 font-mono text-sm text-slate-300 last:border-0 hover:text-cyan">
              <span className="text-[10px] text-cyan">0{index + 1}</span>{link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
