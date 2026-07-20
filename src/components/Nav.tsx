import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useLang, useT, LANGS } from '../i18n'

const LOGO = '/logo.png'

function LangSwitcher({ block = false }: { block?: boolean }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 ${block ? 'w-full justify-center' : ''}`}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${lang === l.code ? 'bg-brand text-white shadow-sm' : 'text-slate-500 hover:text-navy-900'}`}
        >
          {l.label}
        </button>
      ))}
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link to="/" className="flex items-center" aria-label="TAS Platform — accueil">
          <img src={LOGO} alt="TAS Platform" className="h-9 w-auto sm:h-10" />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {t.nav.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-navy-900'}`}
              >
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block"><LangSwitcher /></div>
          <Link to="/contact" className="group hidden items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-strong sm:inline-flex">
            {t.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 hover:bg-slate-100 lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-slate-200 bg-white lg:hidden animate-fade-in">
          <ul className="flex flex-col gap-1 p-5">
            {t.nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3.5 text-base font-semibold ${isActive ? 'bg-blue-50 text-blue-700' : 'text-navy-900 hover:bg-slate-50'}`}
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-3"><LangSwitcher block /></li>
            <li className="mt-2">
              <Link to="/contact" className="flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-4 text-base font-semibold text-white shadow-glow">
                {t.cta} <ArrowRight className="h-5 w-5" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
