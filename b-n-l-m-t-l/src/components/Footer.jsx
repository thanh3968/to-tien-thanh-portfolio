import { profile } from '../data/profile'
import Icon from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div><p className="text-sm font-semibold text-white">{profile.name}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-600">© {year} · Designed & built with curiosity</p></div>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 transition hover:text-cyan"><Icon name="github" size={19} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-500 transition hover:text-cyan"><Icon name="mail" size={19} /></a>
          <a href="#home" className="ml-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500 transition hover:text-cyan">Back to top <Icon name="arrowUp" size={15} /></a>
        </div>
      </div>
    </footer>
  )
}
