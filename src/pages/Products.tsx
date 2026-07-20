import { Container, PageHero, SectionHead, StatusChip } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useT, enginesList, modulesList } from '../i18n'
import { useSeo } from '../lib/seo'

export default function Products() {
  const t = useT()
  useSeo({
    title: 'Produits — TAS Platform, moteurs & modules',
    description: 'TAS Platform : un socle ERP (Business Process Engine, Rules Engine, Automation, Multi-tenant, API, IA) et des modules métier activables — Logistics, People, Retail, Health, Finance, CRM et plus.',
    path: '/produits',
  })
  const engines = enginesList(t)
  const mods = modulesList(t)

  return (
    <>
      <PageHero eyebrow={t.products.eyebrow} title={t.products.title} sub={t.products.sub} />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow={t.products.socE} title={t.products.socT} sub={t.products.socS} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engines.map((e) => (
              <div key={e.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-medium">
                {e.soon && <span className="absolute right-4 top-4 rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-slate-500">{t.statuses.soon}</span>}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><e.icon className="h-5 w-5" /></div>
                <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-wide text-cyan-600">{e.tag}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy-900">{e.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-20 bg-slate-50 py-20 sm:py-24" id="modules">
        <Container>
          <SectionHead eyebrow={t.products.modE} title={t.products.modT} sub={t.products.modS} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mods.map((m) => (
              <div key={m.id} id={m.id} className="group scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-medium">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white"><m.icon className="h-5 w-5" /></div>
                  <StatusChip status={m.status} label={t.statuses[m.status]} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{m.name}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-blue-600">{m.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={t.products.ctaT} sub={t.products.ctaS} />
    </>
  )
}
