import { Link } from 'react-router-dom'
import { ArrowRight, Check, TrendingUp, Package, Wallet, Users } from 'lucide-react'
import { Container, Eyebrow, Button, SectionHead } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useT, whyList, modulesList, FEATURED } from '../i18n'
import { useSeo } from '../lib/seo'

export default function Home() {
  const t = useT()
  useSeo({
    title: 'TAS Platform — ERP Cloud configurable & modulaire',
    description: 'TAS Platform est un ERP Cloud configurable : activez les modules dont vous avez besoin, adaptez vos processus, unifiez vos données. Demandez une démonstration.',
    path: '/',
  })
  const why = whyList(t)
  const mods = modulesList(t)
  const featured = FEATURED.map((id) => mods.find((m) => m.id === id)!).filter(Boolean)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-mist" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid bg-grid opacity-60" />
        <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl" />
        <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="animate-fade-up">
            <Eyebrow>{t.home.eyebrow}</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem] text-balance">
              {t.home.title1}<br />
              <span className="bg-brand bg-clip-text text-transparent">{t.home.title2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{t.home.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" icon>{t.cta}</Button>
              <Button to="/produits" variant="ghost">{t.discover}</Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              {t.home.feats.map((f) => (
                <li key={f} className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-cyan-500" />{f}</li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </Container>
      </section>

      {/* BANDE DE CONFIANCE */}
      <section className="border-y border-slate-200 bg-white">
        <Container className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-navy-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* POURQUOI TAS */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} sub={t.home.whySub} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-medium">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><w.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MODULES PRINCIPAUX */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHead eyebrow={t.home.modEyebrow} title={t.home.modTitle} />
            <Link to="/produits" className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-700">
              {t.seeAll} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((m) => (
              <Link key={m.id} to={`/produits#${m.id}`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-medium">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white"><m.icon className="h-5 w-5" /></div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-slate-400">{t.statuses[m.status]}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{m.name}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-blue-600">{m.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}

function HeroVisual() {
  const kpis = [
    { icon: Package, label: 'Ops', value: '1 284', trend: '+12%' },
    { icon: Wallet, label: 'CA', value: '4,2M', trend: '+8%' },
    { icon: Users, label: 'Clients', value: '347', trend: '+23' },
  ]
  const tabs = ['Logistics', 'Finance', 'People', 'CRM']
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand opacity-10 blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-strong">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" /><span className="h-2.5 w-2.5 rounded-full bg-slate-300" /><span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-2 font-mono text-xs text-slate-400">TAS · Dashboard</span>
        </div>
        <div className="flex gap-1 overflow-x-auto border-b border-slate-100 px-3 py-2">
          {tabs.map((name, i) => (
            <span key={name} className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold ${i === 0 ? 'bg-blue-50 text-blue-700' : 'text-slate-400'}`}>{name}</span>
          ))}
          <span className="whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300">+6</span>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-3 gap-3">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                <k.icon className="h-4 w-4 text-blue-500" />
                <div className="mt-2 font-display text-lg font-bold text-navy-900">{k.value}</div>
                <div className="text-[11px] text-slate-500">{k.label}</div>
                <div className="mt-1 inline-flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600"><TrendingUp className="h-3 w-3" />{k.trend}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-slate-100 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600">Activity</span>
              <span className="font-mono text-[11px] text-slate-400">live</span>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {[42, 55, 48, 63, 58, 71, 66, 82, 76, 90, 85, 96].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-medium sm:block animate-float">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"><Check className="h-4 w-4" /></span>
          <div>
            <div className="text-xs font-semibold text-navy-900">Module ✓</div>
            <div className="font-mono text-[10px] text-slate-400">1 clic</div>
          </div>
        </div>
      </div>
    </div>
  )
}
