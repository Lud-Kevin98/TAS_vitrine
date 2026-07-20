import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import { CONTACT } from '../data/site'

const LOGO = '/logo.png'

const COLS: { title: string; links: { label: string; to: string }[] }[] = [
  { title: 'Produits', links: [
    { label: 'TAS Platform', to: '/produits' },
    { label: 'TAS Logistics', to: '/produits#logistics' },
    { label: 'TAS People', to: '/produits#people' },
    { label: 'Finance & CRM', to: '/produits#crm' },
  ]},
  { title: 'Solutions', links: [
    { label: 'Transport', to: '/solutions#transport' },
    { label: 'Commerce', to: '/solutions#commerce' },
    { label: 'Santé', to: '/solutions#sante' },
    { label: 'Éducation', to: '/solutions#education' },
  ]},
  { title: 'Entreprise', links: [
    { label: 'À propos', to: '/a-propos' },
    { label: 'Carrières', to: '/carrieres' },
    { label: 'Tarifs', to: '/tarifs' },
    { label: 'Contact', to: '/contact' },
  ]},
  { title: 'Ressources', links: [
    { label: 'Documentation', to: '/ressources#documentation' },
    { label: 'FAQ', to: '/ressources#faq' },
    { label: 'Blog', to: '/ressources#blog' },
    { label: 'Centre d’aide', to: '/ressources#aide' },
  ]},
]

export default function Footer() {
  const year = 2026
  return (
    <footer className="border-t border-slate-200 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={LOGO} alt="TAS" className="h-8 w-8 rounded-lg" />
              <span className="font-display text-lg font-bold tracking-tight text-white">TAS Platform</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              La plateforme ERP Cloud configurable qui s’adapte aux processus de chaque entreprise.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 text-slate-400 hover:text-white"><Mail className="h-4 w-4 text-blue-400" />{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-slate-400 hover:text-white"><Phone className="h-4 w-4 text-blue-400" />{CONTACT.phone}</a>
              <span className="flex items-center gap-2.5 text-slate-400"><MapPin className="h-4 w-4 text-blue-400" />{CONTACT.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLS.map((c) => (
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
          <p>© {year} Tchomnou Applications Systems — TAS Platform. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-slate-400"><ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />Hébergé en Allemagne 🇩🇪</span>
            <Link to="/a-propos" className="hover:text-white">Mentions légales</Link>
            <Link to="/a-propos" className="hover:text-white">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
