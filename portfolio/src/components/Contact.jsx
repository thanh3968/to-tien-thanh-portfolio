import { profile } from '../data/profile'
import Icon from './Icons'

export default function Contact() {
  const handleSubmit = (event) => event.preventDefault()

  return (
    <section id="contact" className="section-space relative">
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan/5 blur-[100px]" />
      <div className="container-page relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">Let&apos;s build something <span className="text-cyan">practical.</span></h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
            I am open to internships, engineering projects, embedded systems discussions, and collaboration opportunities.
          </p>
          <div className="mt-10 space-y-4">
            <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 border-b border-white/10 pb-4 text-sm text-slate-300 hover:text-cyan">
              <span className="grid h-10 w-10 place-items-center border border-white/10 text-cyan"><Icon name="mail" size={18} /></span>
              <span>{profile.email}</span>
              <Icon name="arrowUp" size={16} className="ml-auto opacity-0 transition group-hover:opacity-100" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="group flex items-center gap-4 border-b border-white/10 pb-4 text-sm text-slate-300 hover:text-cyan">
              <span className="grid h-10 w-10 place-items-center border border-white/10 text-cyan"><Icon name="github" size={18} /></span>
              <span>github.com/thanh3968</span>
              <Icon name="arrowUp" size={16} className="ml-auto opacity-0 transition group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500">Your name</span>
              <input type="text" placeholder="Your name" className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-slate-700 focus:border-cyan focus:outline-none focus:ring-0" />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500">Email address</span>
              <input type="email" placeholder="your@email.com" className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-slate-700 focus:border-cyan focus:outline-none focus:ring-0" />
            </label>
          </div>
          <label className="mt-7 block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500">Subject</span>
            <input type="text" placeholder="Internship, project, or collaboration" className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-slate-700 focus:border-cyan focus:outline-none focus:ring-0" />
          </label>
          <label className="mt-7 block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500">Message</span>
            <textarea rows="4" placeholder="Tell me about your idea" className="w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-slate-700 focus:border-cyan focus:outline-none focus:ring-0" />
          </label>
          <button type="submit" className="primary-button mt-8 w-full sm:w-auto">Send Message <Icon name="arrow" size={17} /></button>
          <p className="mt-4 font-mono text-[10px] text-slate-600">// Demo form — no data will be sent.</p>
        </form>
      </div>
    </section>
  )
}
