import { BookOpen, HelpCircle, Newspaper, LifeBuoy, Rss, ArrowUpRight } from 'lucide-react'
import { Container, PageHero } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useT, CONTACT } from '../i18n'
import { useSeo } from '../lib/seo'

const ICONS = [BookOpen, HelpCircle, Newspaper, LifeBuoy, Rss]

export default function Resources() {
  const t = useT()
  useSeo({
    title: 'Ressources — TAS Platform',
    description: 'Documentation, FAQ, blog, centre d’aide et actualités de TAS Platform. Tout pour comprendre et exploiter votre plateforme configurable.',
    path: '/ressources',
  })
  const r = t.resources

  return (
    <>
      <PageHero eyebrow={r.eyebrow} title={r.title} sub={r.sub} />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {r.items.map((it, i) => {
              const Icon = ICONS[i]
              return (
                <div key={it.id} id={it.id} className="scroll-mt-24 flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-medium">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon className="h-5 w-5" /></div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-slate-500">{it.tag}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{it.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{it.desc}</p>
                </div>
              )
            })}
            <a href={`mailto:${CONTACT.email}`} className="group flex flex-col justify-center rounded-2xl border border-dashed border-blue-300 bg-blue-50/50 p-7 text-blue-700 transition-colors hover:bg-blue-50">
              <div className="flex items-center gap-2 font-display text-lg font-semibold">{r.ask} <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
              <p className="mt-2 text-sm text-blue-700/80">{r.askSub}</p>
            </a>
          </div>
        </Container>
      </section>

      <CtaBand title={r.ctaT} sub={r.ctaS} />
    </>
  )
}
