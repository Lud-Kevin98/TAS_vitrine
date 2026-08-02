import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cookie } from 'lucide-react'
import { useLang } from '../i18n'

const KEY = 'tas-cookie-consent'

const T = {
  fr: {
    text: 'Nous utilisons uniquement le strict nécessaire au bon fonctionnement du site (préférence de langue, choix de consentement). Aucun traceur publicitaire.',
    more: 'En savoir plus',
    accept: 'Tout accepter',
    refuse: 'Refuser',
  },
  en: {
    text: 'We only use what is strictly necessary for the site to work (language preference, consent choice). No advertising trackers.',
    more: 'Learn more',
    accept: 'Accept all',
    refuse: 'Decline',
  },
  de: {
    text: 'Wir verwenden nur das für den Betrieb der Website Notwendige (Sprachpräferenz, Einwilligungswahl). Keine Werbe-Tracker.',
    more: 'Mehr erfahren',
    accept: 'Alle akzeptieren',
    refuse: 'Ablehnen',
  },
}

export default function CookieBanner() {
  const { lang } = useLang()
  const t = T[lang]
  const [open, setOpen] = useState(() => {
    try { return !localStorage.getItem(KEY) } catch { return false }
  })
  if (!open) return null

  const choose = (v: 'accepted' | 'declined') => {
    try { localStorage.setItem(KEY, v) } catch { /* ignore */ }
    setOpen(false)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6" role="dialog" aria-live="polite" aria-label="Cookies">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-navy-950/95 p-5 text-slate-200 shadow-strong backdrop-blur sm:flex-row sm:items-center sm:gap-5 sm:p-6">
        <div className="flex flex-1 items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
            <Cookie className="h-5 w-5" />
          </span>
          <p className="text-sm leading-relaxed text-slate-300">
            {t.text}{' '}
            <Link to="/cookies" className="font-semibold text-blue-300 underline-offset-2 hover:underline">{t.more}</Link>
          </p>
        </div>
        <div className="flex flex-none items-center gap-2.5">
          <button
            onClick={() => choose('declined')}
            className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5"
          >
            {t.refuse}
          </button>
          <button
            onClick={() => choose('accepted')}
            className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-strong"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
