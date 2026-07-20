import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, TrendingUp, Package, Wallet, Users, MapPin,
  FileWarning, Clock, DatabaseZap, TrendingDown, Building2, CircleSlash,
} from 'lucide-react'
import { Container, Eyebrow, Button, SectionHead, Reveal } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useT, whyList, modulesList, FEATURED } from '../i18n'
import { useSeo } from '../lib/seo'

const PROB_ICON = [FileWarning, Clock, DatabaseZap, TrendingDown, Building2, CircleSlash]

export default function Home() {
  const t = useT()
  useSeo({
    title: 'TAS — Pilotez toute votre entreprise en temps réel',
    description: 'TAS réunit tous vos métiers dans une seule plateforme configurable : logistique, finance, RH, commerce, santé. Activez les modules dont vous avez besoin. Demandez une démonstration.',
    path: '/',
  })
  const why = whyList(t)
  const mods = modulesList(t)
  const featured = FEATURED.map((id) => mods.find((m) => m.id === id)!).filter(Boolean)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-mist" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-grid bg-grid opacity-60" />
        <div className="blob -top-24 right-0 h-[460px] w-[460px] bg-cyan-300/25 animate-float" />
        <div className="blob top-40 -left-24 h-[380px] w-[380px] bg-blue-400/15" />
        <Container className="relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="animate-fade-up">
            <Eyebrow>{t.home.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.6rem] text-balance">
              {t.home.title1}<br />
              <span className="bg-brand bg-clip-text text-transparent">{t.home.title2}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">{t.home.sub}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" icon>{t.cta}</Button>
              <Button to="/produits" variant="ghost">{t.discover}</Button>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-slate-500">
              {t.home.feats.map((f) => (
                <li key={f} className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-cyan-500" />{f}</li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </Container>
      </section>

      {/* ── BANDE DE CONFIANCE ───────────────────────── */}
      <section className="border-y border-slate-200 bg-white">
        <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {t.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="font-display text-[2rem] font-bold leading-none text-navy-900">{s.value}</div>
              <div className="mt-2 text-sm text-slate-500">{s.label}</div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ── PROBLÈMES CONCRETS ───────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal><SectionHead center eyebrow={t.home.probEyebrow} title={t.home.probTitle} sub={t.home.probSub} /></Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.problems.map((p, i) => {
              const Icon = PROB_ICON[i]
              return (
                <Reveal key={p.title} delay={(i % 3) * 90}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-medium">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── LA SOLUTION ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-30" />
        <div className="blob -top-20 right-10 h-80 w-80 bg-blue-600/30" />
        <div className="blob bottom-0 -left-10 h-72 w-72 bg-cyan-500/20" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                <span className="h-px w-6 bg-gradient-to-r from-cyan-400 to-blue-400" />{t.home.solEyebrow}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-[2.5rem] sm:leading-[1.1] text-balance">{t.home.solTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">{t.home.solSub}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {mods.map((m) => (
                <Link key={m.id} to={`/produits#${m.id}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition-colors hover:border-cyan-400/40 hover:bg-white/10">
                  <m.icon className="h-4 w-4 text-cyan-300" />{m.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── MODULES : CE QUE CHACUN RÉSOUT ───────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal><SectionHead eyebrow={t.home.modEyebrow} title={t.home.modTitle} /></Reveal>
            <Link to="/produits" className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-700">
              {t.seeAll} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((m, i) => (
              <Reveal key={m.id} delay={(i % 4) * 80}>
                <Link to={`/produits#${m.id}`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-strong">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white transition-transform group-hover:scale-110"><m.icon className="h-6 w-6" /></div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-slate-400">{t.statuses[m.status]}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{m.name}</h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-blue-600">{m.tagline}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{m.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PLUS-VALUE ───────────────────────────────── */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <Container>
          <Reveal><SectionHead eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} sub={t.home.whySub} /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-medium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><w.icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.desc}</p>
                </div>
              </Reveal>
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
    { icon: Package, label: 'Opérations', value: '1 284', trend: '+12%' },
    { icon: Wallet, label: 'Encaissé', value: '4,2M', trend: '+8%' },
    { icon: Users, label: 'Clients', value: '347', trend: '+23' },
  ]
  const tabs = ['Logistics', 'Finance', 'People', 'CRM']
  return (
    <div className="relative animate-fade-up [animation-delay:140ms]">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand opacity-10 blur-3xl" />
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-strong">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" /><span className="h-2.5 w-2.5 rounded-full bg-slate-300" /><span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-2 font-mono text-xs text-slate-400">app.tas-platform.com</span>
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
          <div className="mt-4 grid grid-cols-[1.4fr_1fr] gap-3">
            <div className="rounded-xl border border-slate-100 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">Activité</span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-500"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />live</span>
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {[42, 55, 48, 63, 58, 71, 66, 82, 76, 90, 85, 96].map((h, i) => (
                  <div key={i} className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${h}%`, animation: `growBar .9s cubic-bezier(.22,1,.36,1) ${i * 55}ms both` }} />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4">
              <MapPin className="h-5 w-5 text-blue-500" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wide text-slate-400">Suivi</div>
                <div className="mt-0.5 text-sm font-semibold text-navy-900">En transit</div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-medium sm:block animate-float">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"><Check className="h-4 w-4" /></span>
          <div>
            <div className="text-xs font-semibold text-navy-900">Module activé</div>
            <div className="font-mono text-[10px] text-slate-400">en 1 clic</div>
          </div>
        </div>
      </div>
    </div>
  )
}
