import { Target, Compass, Heart, Globe2, ShieldCheck, MapPin } from 'lucide-react'
import { Container, PageHero, SectionHead } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useT } from '../i18n'
import { useSeo } from '../lib/seo'

const VAL_ICON = [Compass, Target, Heart]
const CARD_ICON = [Globe2, ShieldCheck, MapPin]

export default function About() {
  const t = useT()
  useSeo({
    title: 'À propos — Tchomnou Applications Systems',
    description: 'Tchomnou Applications Systems (TAS) édite une plateforme moderne. Ancrage africain, hébergement souverain en Allemagne, présence au Cameroun et en Allemagne.',
    path: '/a-propos',
  })
  const a = t.about

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} sub={a.sub} />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <SectionHead eyebrow={a.histE} title={a.histT} />
            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              {a.hist.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {a.values.map((v, i) => {
              const Icon = VAL_ICON[i]
              return (
                <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {a.cards.map((c, i) => {
              const Icon = CARD_ICON[i]
              return (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
                  <Icon className="h-7 w-7 text-blue-600" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <CtaBand title={a.ctaT} sub={a.ctaS} />
    </>
  )
}
