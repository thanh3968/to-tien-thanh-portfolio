import { profile, stats } from '../data/profile'
import Icon from './Icons'

export default function Hero() {
  return (
    <section id="home" className="noise relative flex min-h-screen items-center overflow-hidden pb-16 pt-32">
      <div className="grid-background absolute inset-0" />
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-violet/10 blur-[120px]" />

      <div className="container-page relative z-10 grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-slate-300">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"/><span className="relative h-2 w-2 rounded-full bg-emerald-400"/></span>
            {profile.availability}
          </div>
          <p className="mb-4 font-mono text-sm font-medium tracking-wider text-cyan">HELLO, I&apos;M</p>
          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Tô Tiến <span className="text-transparent [-webkit-text-stroke:1px_rgba(86,224,255,0.85)]">Thành.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-lg font-semibold text-slate-300 sm:text-xl">
            <span>{profile.role}</span><span className="text-cyan">/</span><span>{profile.specialty}</span>
          </div>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{profile.tagline}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="primary-button">View Projects <Icon name="arrow" size={18} /></a>
            <a href="#contact" className="secondary-button">Contact Me</a>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-xl font-semibold text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="absolute -inset-8 border border-cyan/10" />
          <div className="absolute -right-6 -top-6 h-24 w-24 border-r border-t border-cyan/50" />
          <div className="glass-card relative animate-float overflow-hidden p-6 shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"/><span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/>
              <span className="ml-auto font-mono text-[10px] text-slate-600">thanh_profile.cpp</span>
            </div>
            <pre className="overflow-hidden py-7 font-mono text-[13px] leading-7 text-slate-400"><code><span className="text-violet">struct</span> <span className="text-cyan">Developer</span> {'{'}{`\n`}  <span className="text-blue-300">string</span> name = <span className="text-emerald-300">&quot;${profile.name}&quot;</span>;{`\n`}  <span className="text-blue-300">string</span> focus[] = {'{'}{`\n`}    <span className="text-emerald-300">&quot;Embedded Systems&quot;</span>,{`\n`}    <span className="text-emerald-300">&quot;IoT & FreeRTOS&quot;</span>,{`\n`}    <span className="text-emerald-300">&quot;Artificial Intelligence&quot;</span>{`\n`}  {'}'};{`\n`}  <span className="text-blue-300">bool</span> keepLearning = <span className="text-violet">true</span>;{`\n`}{'}'};<span className="ml-1 inline-block h-4 w-2 animate-blink bg-cyan align-middle" /></code></pre>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-wider text-slate-600"><span>Build: successful</span><span className="text-emerald-400">● online</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
