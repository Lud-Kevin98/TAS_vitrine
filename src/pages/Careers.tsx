import { Rocket, Code2, Users2, Globe2, ArrowUpRight } from 'lucide-react'
import { Container, PageHero, SectionHead } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useT, CONTACT } from '../i18n'
import { useSeo } from '../lib/seo'

const PERK_ICON = [Rocket, Code2, Users2, Globe2]

export default function Careers() {
  const t = useT()
  useSeo({
    title: 'Carrières — TAS Platform',
    description: 'Rejoignez Tchomnou Applications Systems et construisez la plateforme de référence. Candidatures spontanées bienvenues.',
    path: '/carrieres',
  })
  const c = t.careers

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} sub={c.sub} />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow={c.perksE} title={c.perksT} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.perks.map((p, i) => {
              const Icon = PERK_ICON[i]
              return (
                <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold text-navy-900">{c.spontT}</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">{c.spontSub}</p>
            <a href={`mailto:${CONTACT.email}?subject=Candidature`} className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5">
              {c.spontBtn} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Container>
      </section>

      <CtaBand title={c.ctaT} sub={c.ctaS} />
    </>
  )
}
