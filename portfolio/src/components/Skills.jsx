import { skillGroups } from '../data/profile'
import Icon from './Icons'

export default function Skills() {
  return (
    <section id="skills" className="section-space relative">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet/5 blur-[100px]" />
      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow">Technical toolkit</p><h2 className="section-title">The tools I use to <span className="text-cyan">make ideas real.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-slate-500">A growing toolkit shaped by hands-on experiments, coursework, and curiosity.</p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="glass-card group relative min-h-80 overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.055]">
              <span className="absolute right-5 top-4 font-mono text-[10px] text-white/15">0{index + 1}</span>
              <div className="grid h-11 w-11 place-items-center border border-cyan/20 bg-cyan/5 text-cyan transition group-hover:bg-cyan group-hover:text-ink"><Icon name={group.icon} /></div>
              <h3 className="mt-7 text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{group.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="border border-white/10 bg-ink/40 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 transition group-hover:border-white/15">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
