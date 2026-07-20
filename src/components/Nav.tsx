import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Globe, ChevronDown, Check } from 'lucide-react'
import { useLang, useT, LANGS } from '../i18n'

const LOGO = '/logo.png'

function LangDropdown({ block = false }: { block?: boolean }) {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])
  return (
    <div ref={ref} className={`relative ${block ? 'w-full' : ''}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-navy-900 ${block ? 'w-full justify-center' : ''}`}
        aria-haspopup="listbox" aria-expanded={open} aria-label="Choisir la langue"
      >
        <Globe className="h-4 w-4 text-slate-400" />
        {lang.toUpperCase()}
        <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute right-0 z-[60] mt-2 min-w-[9.5rem] overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-medium" role="listbox">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => { setLang(l.code); setOpen(false) }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${lang === l.code ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
                role="option" aria-selected={lang === l.code}
              >
                {l.name}
                {lang === l.code && <Check className="h-4 w-4" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  const t = useT()

  useEffect(() => { setOpen(false) }, [loc.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-xl' : 'bg-white/70 backdrop-blur-sm'}`}>
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link to="/" className="flex shrink-0 items-center" aria-label="TAS — accueil">
            <img src={LOGO} alt="TAS" className="h-9 w-auto sm:h-10" />
          </Link>

          <ul className="hidden items-center xl:flex">
            {t.nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === '/'}
                  className={({ isActive }) =>
                    `whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-navy-900'}`}
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            {/* Sélecteur de langue : visible partout (mobile inclus) */}
            <LangDropdown />
            <Link to="/contact" className="group hidden items-center gap-2 whitespace-nowrap rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-strong sm:inline-flex">
              {t.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 hover:bg-slate-100 xl:hidden"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile — HORS du header (sinon le backdrop-blur casse le position:fixed) */}
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-[55] overflow-y-auto border-t border-slate-200 bg-white xl:hidden animate-fade-in">
          <ul className="flex flex-col gap-1 p-5">
            {t.nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3.5 text-base font-semibold ${isActive ? 'bg-blue-50 text-blue-700' : 'text-navy-900 hover:bg-slate-50'}`}
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-3">
              <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-4 text-base font-semibold text-white shadow-glow">
                {t.cta} <ArrowRight className="h-5 w-5" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
