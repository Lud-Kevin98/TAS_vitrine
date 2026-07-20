import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Container, PageHero } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useT, sectorsList } from '../i18n'
import { useSeo } from '../lib/seo'

export default function Solutions() {
  const t = useT()
  useSeo({
    title: 'Solutions par secteur — TAS Platform',
    description: 'TAS Platform s’adapte à votre secteur : transport & logistique, commerce & distribution, industrie & services, santé & pharma, éducation, services aux entreprises.',
    path: '/solutions',
  })
  const sectors = sectorsList(t)

  return (
    <>
      <PageHero eyebrow={t.solutions.eyebrow} title={t.solutions.title} sub={t.solutions.sub} />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {sectors.map((s) => (
              <div key={s.name} id={s.anchor} className="scroll-mt-24 flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:shadow-medium">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><s.icon className="h-6 w-6" /></div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900">{s.name}</h2>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-cyan-600">{s.modules}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                  {t.solutions.feats.map((f) => (
                    <li key={f} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-cyan-500" />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                  {t.solutions.seeDemo} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={t.solutions.ctaT} sub={t.solutions.ctaS} />
    </>
  )
}
