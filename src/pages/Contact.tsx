import { useState } from 'react'
import { MessageCircle, Phone, MapPin, Mail, Check, Loader2, CalendarCheck } from 'lucide-react'
import { Container, PageHero } from '../components/ui'
import { useT, CONTACT, sectorsList } from '../i18n'
import { useSeo } from '../lib/seo'

const API_BASE = ((import.meta as any).env?.VITE_API_BASE as string) || 'https://app.tas-platform.com'
const empty = { name: '', company: '', sector: '', phone: '', email: '', message: '' }

export default function Contact() {
  const t = useT()
  const c = t.contact
  const F = c.form
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
          subject: `Demande de démo TAS${f.sector ? ' — ' + f.sector : ''}`, message: f.message,
        }),
      })
      if (!res.ok) throw new Error('bad status')
      setSent(true); setF(empty); setConsent(false)
    } catch { setErr(true) } finally { setSending(false) }
  }

  const channels = [
    { icon: MessageCircle, label: 'WhatsApp (Cameroun)', value: CONTACT.phone, href: `https://wa.me/${CONTACT.whatsapp}` },
    { icon: MessageCircle, label: 'WhatsApp (Allemagne)', value: '+49 176 29434276', href: `https://wa.me/${CONTACT.whatsapp2}` },
    { icon: Phone, label: F.phone, value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: F.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ]
  const input = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100'

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} sub={c.sub} />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700"><CalendarCheck className="h-4 w-4" />{c.badge}</div>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">{c.talkT}</h2>
              <p className="mt-3 text-slate-600">{c.talkSub}</p>
              <ul className="mt-7 space-y-3">
                {channels.map((ch) => (
                  <li key={ch.label}>
                    <a href={ch.href} target={ch.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-medium">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><ch.icon className="h-5 w-5" /></span>
                      <span><span className="block text-xs font-medium uppercase tracking-wide text-slate-400">{ch.label}</span><span className="font-semibold text-navy-900">{ch.value}</span></span>
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-600"><MapPin className="h-5 w-5" /></span>
                  <span><span className="block text-xs font-medium uppercase tracking-wide text-slate-400">{c.loc}</span><span className="font-semibold text-navy-900">{CONTACT.location}</span></span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-medium sm:p-9">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-14 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-8 w-8" /></span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{F.okT}</h3>
                  <p className="mt-2 max-w-sm text-slate-600">{F.okS}</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><label className="mb-1.5 block text-sm font-medium text-navy-800">{F.name} *</label><input required value={f.name} onChange={set('name')} className={input} placeholder={F.namePh} /></div>
                    <div><label className="mb-1.5 block text-sm font-medium text-navy-800">{F.company}</label><input value={f.company} onChange={set('company')} className={input} placeholder={F.companyPh} /></div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><label className="mb-1.5 block text-sm font-medium text-navy-800">{F.email} *</label><input required type="email" value={f.email} onChange={set('email')} className={input} placeholder="you@company.com" /></div>
                    <div><label className="mb-1.5 block text-sm font-medium text-navy-800">{F.phone}</label><input value={f.phone} onChange={set('phone')} className={input} placeholder="+237…" /></div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-800">{F.sector}</label>
                    <select value={f.sector} onChange={set('sector')} className={input}>
                      <option value="">{F.select}</option>
                      {sectorsList(t).map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                      <option value={F.other}>{F.other}</option>
                    </select>
                  </div>
                  <div><label className="mb-1.5 block text-sm font-medium text-navy-800">{F.need}</label><textarea value={f.message} onChange={set('message')} rows={4} className={input} placeholder={F.needPh} /></div>
                  <label className="flex items-start gap-2.5 text-sm text-slate-600">
                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600" />
                    <span>{F.consent}</span>
                  </label>
                  {err && <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">{F.err}</p>}
                  <button type="submit" disabled={sending || !consent} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
                    {sending ? <><Loader2 className="h-4 w-4 animate-spin" />{F.sending}</> : F.send}
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
