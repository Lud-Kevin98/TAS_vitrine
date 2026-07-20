import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT, useT } from '../i18n'

const LOGO = '/logo.png'

export default function Footer() {
  const t = useT()
  return (
    <footer className="border-t border-slate-200 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link to="/" className="inline-flex items-center rounded-xl bg-white/95 px-3 py-2 shadow-sm" aria-label="TAS Platform — accueil">
              <img src={LOGO} alt="TAS Platform" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{t.footer.tagline}</p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 text-slate-400 hover:text-white"><Mail className="h-4 w-4 text-blue-400" />{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-slate-400 hover:text-white"><Phone className="h-4 w-4 text-blue-400" />{CONTACT.phone}</a>
              <span className="flex items-center gap-2.5 text-slate-400"><MapPin className="h-4 w-4 text-blue-400" />{CONTACT.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {t.footer.cols.map((c) => (
              <div key={c.title}>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">{c.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}><Link to={l.to} className="text-sm text-slate-400 transition-colors hover:text-white">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Tchomnou Applications Systems — TAS Platform. {t.footer.rights}</p>
          <div className="flex items-center gap-5">
            <Link to="/a-propos" className="hover:text-white">{t.footer.legal1}</Link>
            <Link to="/a-propos" className="hover:text-white">{t.footer.legal2}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
