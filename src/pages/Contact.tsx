import { useState } from 'react'
import { MessageCircle, Phone, MapPin, Mail, Check, Loader2, CalendarCheck } from 'lucide-react'
import { Container, PageHero } from '../components/ui'
import { useSeo } from '../lib/seo'
import { CONTACT, SECTORS } from '../data/site'

const API_BASE = ((import.meta as any).env?.VITE_API_BASE as string) || 'https://app.tas-platform.com'
const empty = { name: '', company: '', sector: '', phone: '', email: '', message: '' }

export default function Contact() {
  useSeo({
    title: 'Contact & démonstration — TAS Platform',
    description: 'Demandez une démonstration de TAS Platform ou contactez-nous par WhatsApp, téléphone ou e-mail. Réponse sous 24 h.',
    path: '/contact',
  })

  const [f, setF] = useState(empty)
  const [consent, setConsent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState(false)
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setSending(true); setErr(false)
    try {
      const res = await fetch(`${API_BASE}/api/public/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.name, email: f.email, phone: f.phone, company: f.company,
          subject: `Demande de démo TAS${f.sector ? ' — ' + f.sector : ''}`,
          message: f.message,
        }),
      })
      if (!res.ok) throw new Error('bad status')
      setSent(true); setF(empty); setConsent(false)
    } catch { setErr(true) } finally { setSending(false) }
  }

  const channels = [
    { icon: MessageCircle, label: 'WhatsApp (Cameroun)', value: CONTACT.phone, href: `https://wa.me/${CONTACT.whatsapp}` },
    { icon: MessageCircle, label: 'WhatsApp (Allemagne)', value: '+49 176 29434276', href: `https://wa.me/${CONTACT.whatsapp2}` },
    { icon: Phone, label: 'Téléphone', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'E-mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ]

  const input = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100'

  return (
    <>
      <PageHero
        eyebrow="Contact & démonstration"
        title="Voyez TAS sur vos propres processus."
        sub="Réservez une démo ou écrivez-nous. Nous configurons la plateforme sur votre cas d’usage réel et revenons vers vous sous 24 h."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            {/* Canaux */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700"><CalendarCheck className="h-4 w-4" />Démonstration gratuite, sans engagement</div>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">Parlons de votre projet</h2>
              <p className="mt-3 text-slate-600">Choisissez le canal qui vous convient — nous sommes joignables au Cameroun et en Allemagne.</p>
              <ul className="mt-7 space-y-3">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-medium">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><c.icon className="h-5 w-5" /></span>
                      <span><span className="block text-xs font-medium uppercase tracking-wide text-slate-400">{c.label}</span><span className="font-semibold text-navy-900">{c.value}</span></span>
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-600"><MapPin className="h-5 w-5" /></span>
                  <span><span className="block text-xs font-medium uppercase tracking-wide text-slate-400">Localisation</span><span className="font-semibold text-navy-900">{CONTACT.location}</span></span>
                </li>
              </ul>
            </div>

            {/* Formulaire */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-medium sm:p-9">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-14 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-8 w-8" /></span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">Message envoyé !</h3>
                  <p className="mt-2 max-w-sm text-slate-600">Merci. Notre équipe vous recontacte sous 24 h pour organiser votre démonstration.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><label className="mb-1.5 block text-sm font-medium text-navy-800">Nom complet *</label><input required value={f.name} onChange={set('name')} className={input} placeholder="Votre nom" /></div>
                    <div><label className="mb-1.5 block text-sm font-medium text-navy-800">Entreprise</label><input value={f.company} onChange={set('company')} className={input} placeholder="Votre société" /></div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><label className="mb-1.5 block text-sm font-medium text-navy-800">E-mail *</label><input required type="email" value={f.email} onChange={set('email')} className={input} placeholder="vous@entreprise.com" /></div>
                    <div><label className="mb-1.5 block text-sm font-medium text-navy-800">Téléphone</label><input value={f.phone} onChange={set('phone')} className={input} placeholder="+237…" /></div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-800">Secteur</label>
                    <select value={f.sector} onChange={set('sector')} className={input}>
                      <option value="">Sélectionnez…</option>
                      {SECTORS.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                  <div><label className="mb-1.5 block text-sm font-medium text-navy-800">Votre besoin</label><textarea value={f.message} onChange={set('message')} rows={4} className={input} placeholder="Décrivez brièvement votre activité et vos besoins…" /></div>
                  <label className="flex items-start gap-2.5 text-sm text-slate-600">
                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600" />
                    <span>J’accepte d’être recontacté par TAS au sujet de ma demande.</span>
                  </label>
                  {err && <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">Une erreur est survenue. Réessayez ou écrivez-nous directement par e-mail.</p>}
                  <button type="submit" disabled={sending || !consent} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
                    {sending ? <><Loader2 className="h-4 w-4 animate-spin" />Envoi…</> : 'Demander ma démo'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
