import { Container, PageHero, SectionHead, StatusChip } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { ENGINES, MODULES } from '../data/site'
import { useSeo } from '../lib/seo'

export default function Products() {
  useSeo({
    title: 'Produits — TAS Platform, moteurs & modules',
    description: 'TAS Platform : un socle ERP (Business Process Engine, Rules Engine, Automation, Multi-tenant, API, IA) et des modules métier activables — Logistics, People, Retail, Health, Finance, CRM et plus.',
    path: '/produits',
  })

  return (
    <>
      <PageHero
        eyebrow="Produits"
        title="Une plateforme, pas seulement un logiciel."
        sub="TAS Platform est le socle : un moteur de processus, des règles, de l’automatisation et une isolation multi-tenant. Vous y activez les modules métier dont vous avez besoin."
      />

      {/* Socle technologique */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Le socle" title="TAS Platform — le moteur configurable" sub="Le même noyau technique alimente tous les modules : c’est ce qui rend la plateforme cohérente, isolée et adaptable." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ENGINES.map((e) => (
              <div key={e.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-medium">
                {e.soon && <span className="absolute right-4 top-4 rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-slate-500">Bientôt</span>}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><e.icon className="h-5 w-5" /></div>
                <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-wide text-cyan-600">{e.tag}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy-900">{e.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Modules métier */}
      <section className="scroll-mt-20 bg-slate-50 py-20 sm:py-24" id="modules">
        <Container>
          <SectionHead eyebrow="Les modules" title="Dix modules métier, une seule base" sub="Chaque module est autonome mais partage les données, les rôles et les processus de la plateforme. Activez-les à la carte." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <div key={m.id} id={m.id} className="group scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-medium">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white"><m.icon className="h-5 w-5" /></div>
                  <StatusChip status={m.status} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{m.name}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-blue-600">{m.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Un module vous intéresse ?" sub="Nous vous le montrons en conditions réelles, configuré sur votre activité." />
    </>
  )
}
