import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../useInView'

/** Révélation au défilement (fade + montée). */
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
      <span className="h-px w-6 bg-gradient-to-r from-blue-600 to-cyan-400" />
      {children}
    </span>
  )
}

export function SectionHead({
  eyebrow, title, sub, center = false,
}: { eyebrow?: string; title: ReactNode; sub?: ReactNode; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <div className={center ? 'flex justify-center' : ''}><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-[2.4rem] sm:leading-[1.1] text-balance">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-slate-600">{sub}</p>}
    </div>
  )
}

type BtnProps = { to?: string; href?: string; children: ReactNode; variant?: 'primary' | 'ghost' | 'dark'; icon?: boolean; className?: string }

export function Button({ to, href, children, variant = 'primary', icon = false, className = '' }: BtnProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
  const styles = {
    primary: 'bg-brand text-white shadow-glow hover:shadow-strong hover:-translate-y-0.5',
    ghost: 'border border-slate-200 bg-white text-navy-800 hover:border-blue-300 hover:bg-blue-50',
    dark: 'bg-navy-900 text-white hover:bg-navy-800',
  }[variant]
  const inner = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  )
  const cls = `${base} ${styles} ${className}`
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return <a href={href} className={cls}>{inner}</a>
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 mesh-light">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <Container className="relative py-20 sm:py-24">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl text-balance">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{sub}</p>
        </div>
      </Container>
    </section>
  )
}

export function StatusChip({ status, label }: { status: 'live' | 'beta' | 'soon'; label?: string }) {
  const map = {
    live: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    beta: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    soon: 'bg-slate-100 text-slate-500 ring-slate-500/20',
  }[status]
  const txt = label ?? { live: 'Disponible', beta: 'Bêta', soon: 'Bientôt' }[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${map}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />{txt}
    </span>
  )
}
