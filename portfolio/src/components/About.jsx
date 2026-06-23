import { profile } from '../data/profile'
import Icon from './Icons'

const focuses = [
  ['01', 'Embedded Systems', 'Understanding hardware deeply and writing efficient firmware.'],
  ['02', 'IoT & FreeRTOS', 'Designing connected, responsive, real-time device experiences.'],
  ['03', 'Applied AI', 'Exploring intelligence at the edge and useful automation.'],
]

export default function About() {
  return (
    <section id="about" className="section-space relative border-t border-white/5 bg-[#090e19]">
      <div className="container-page">
        <p className="eyebrow">About me</p>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <h2 className="section-title">Learning at the intersection of <span className="text-cyan">code and circuits.</span></h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-slate-500">
              <span className="flex items-center gap-2"><Icon name="location" size={15} className="text-cyan" />{profile.location}</span>
              <span className="flex items-center gap-2"><Icon name="terminal" size={15} className="text-cyan" />Always building</span>
            </div>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {focuses.map(([number, title, text]) => (
              <div key={title} className="group grid gap-3 py-7 transition sm:grid-cols-[3rem_1fr] sm:gap-5">
                <span className="font-mono text-xs text-cyan">{number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white transition group-hover:translate-x-1 group-hover:text-cyan">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
