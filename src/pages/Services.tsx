import { Compass, Lightbulb, Layers, Code2, GraduationCap, LifeBuoy } from 'lucide-react'
import { Container, PageHero, Reveal } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useT } from '../i18n'
import { useSeo } from '../lib/seo'

const OFFER_ICON = [Compass, Lightbulb, Layers, Code2, GraduationCap, LifeBuoy]

export default function Services() {
  const t = useT()
  useSeo({
    title: 'Services & conseil — TAS',
    description: t.services.sub,
    path: '/services',
  })
  const s = t.services

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} sub={s.sub} />

      {/* Prestations */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.offer.map((o, i) => {
              const Icon = OFFER_ICON[i]
              return (
                <Reveal key={o.title} delay={(i % 3) * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-medium">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white"><Icon className="h-6 w-6" /></div>
                    <h2 className="mt-5 font-display text-lg font-semibold text-navy-900">{o.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Méthode */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-20 right-10 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                <span className="h-px w-6 bg-gradient-to-r from-cyan-400 to-blue-400" />{s.methodE}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-[2.4rem] sm:leading-[1.1] text-balance">{s.methodT}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">{s.methodS}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {s.method.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="font-mono text-sm font-bold text-cyan-300">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={s.ctaT} sub={s.ctaS} />
    </>
  )
}
