import { projects } from '../data/profile'
import Icon from './Icons'

const accentStyles = {
  cyan: 'from-cyan/20 text-cyan border-cyan/20',
  violet: 'from-violet/20 text-violet border-violet/20',
  blue: 'from-blue-500/20 text-blue-400 border-blue-500/20',
}

export default function Projects() {
  return (
    <section id="projects" className="section-space border-y border-white/5 bg-[#090e19]">
      <div className="container-page">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Projects built to <span className="text-cyan">learn by doing.</span></h2>
        <div className="mt-14 space-y-5">
          {projects.map((project) => (
            <article key={project.title} className="glass-card group grid overflow-hidden transition duration-300 hover:border-white/20 lg:grid-cols-[0.7fr_1.3fr]">
              <div className={`relative min-h-64 overflow-hidden border-b border-white/10 bg-gradient-to-br ${accentStyles[project.accent]} to-transparent p-7 lg:border-b-0 lg:border-r`}>
                <div className="absolute inset-0 grid-background opacity-70" />
                <span className="relative font-mono text-xs uppercase tracking-widest opacity-70">Project / {project.number}</span>
                <div className="absolute bottom-7 left-7 right-7">
                  <div className="mb-5 flex items-end gap-2 opacity-40">
                    {[32, 52, 38, 66, 46, 78, 58].map((height, i) => <span key={i} className="w-2 bg-current transition-all duration-500 group-hover:opacity-100" style={{ height }} />)}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">Prototype · In development</span>
                </div>
              </div>
              <div className="p-7 sm:p-9 lg:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{project.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-xs leading-6 text-slate-500"><Icon name="check" size={15} className="mt-1 shrink-0 text-cyan" />{feature}</li>)}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => <span key={tech} className="font-mono text-[10px] uppercase tracking-wider text-slate-400">#{tech.replaceAll(' ', '_')}</span>)}
                </div>
                <a href={project.github} onClick={(event) => project.github === '#' && event.preventDefault()} aria-label={`View ${project.title} on GitHub`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan">
                  View on GitHub <Icon name="arrowUp" size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
