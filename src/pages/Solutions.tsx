import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Container, PageHero } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { SECTORS } from '../data/site'
import { useSeo } from '../lib/seo'

const anchorId = (to: string) => to.split('#')[1] ?? ''

export default function Solutions() {
  useSeo({
    title: 'Solutions par secteur — TAS Platform',
    description: 'TAS Platform s’adapte à votre secteur : transport & logistique, commerce & distribution, industrie & services, santé & pharma, éducation, services aux entreprises.',
    path: '/solutions',
  })

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Une plateforme qui parle le langage de votre secteur."
        sub="Nous assemblons les bons modules et pré-configurons les processus adaptés à votre métier. Vous démarrez sur une base pertinente, puis vous l’ajustez."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {SECTORS.map((s) => (
              <div key={s.name} id={anchorId(s.to)} className="scroll-mt-24 flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:shadow-medium">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><s.icon className="h-6 w-6" /></div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900">{s.name}</h2>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-cyan-600">{s.modules}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                  {['Processus pré-configurés', 'Données isolées & sécurisées', 'App mobile terrain'].map((f) => (
                    <li key={f} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-cyan-500" />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                  Voir une démo pour ce secteur <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Votre secteur n’est pas listé ?" sub="La plateforme est configurable : parlons de votre cas d’usage, nous l’adaptons." />
    </>
  )
}
