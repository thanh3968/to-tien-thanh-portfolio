import { education, experience, profile } from '../data/profile'
import Icon from './Icons'

const focuses = [
  ['Embedded firmware', 'STM32F407G, UART command handling, I2C sensors, OLED display output.'],
  ['Computer vision', 'OpenCV, YOLO detection, centroid tracking, and product-counting logic.'],
  ['Engineering foundation', 'Microprocessors, computer architecture, algorithms, and machine learning coursework.'],
]

export default function About() {
  return (
    <section id="about" className="section-space relative border-t border-white/5 bg-[#090e19]">
      <div className="container-page">
        <p className="eyebrow">About me</p>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <h2 className="section-title">
              Electronics student building <span className="text-cyan">real engineering prototypes.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <Icon name="location" size={15} className="text-cyan" />
                {profile.location}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="terminal" size={15} className="text-cyan" />
                TOEIC 600
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <article className="glass-card p-6 sm:p-7">
              <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">Education</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{education.school}</h3>
                  <p className="mt-1 text-sm italic text-slate-400">{education.major}</p>
                </div>
                <p className="font-mono text-xs text-slate-400">{education.gpa}</p>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-300">{education.graduation}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span key={course} className="border border-white/10 bg-ink/40 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    {course}
                  </span>
                ))}
              </div>
            </article>

            <article className="glass-card p-6 sm:p-7">
              <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet">Work experience</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{experience.company}</h3>
                  <p className="mt-1 text-sm italic text-slate-400">{experience.role}</p>
                </div>
                <p className="font-mono text-xs text-slate-400">{experience.period}</p>
              </div>

              <ul className="mt-5 space-y-3">
                {experience.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                    <Icon name="check" size={15} className="mt-1 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {focuses.map(([title, text]) => (
            <article key={title} className="border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/[0.045]">
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
