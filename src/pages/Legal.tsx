import { AlertTriangle } from 'lucide-react'
import { PageHero, Container } from '../components/ui'
import { useLang } from '../i18n'
import { LEGAL, type LegalKey } from '../data/legal'
import { useSeo } from '../lib/seo'

const TODO_LABEL = {
  fr: 'Élément à ajouter', en: 'To be added', de: 'Zu ergänzen',
}
const EYEBROW = {
  fr: 'Informations légales', en: 'Legal', de: 'Rechtliches',
}

export default function Legal({ docKey, path }: { docKey: LegalKey; path: string }) {
  const { lang } = useLang()
  const doc = LEGAL[lang][docKey]
  useSeo({ title: `${doc.title} — TAS`, description: doc.intro ?? '', path })

  return (
    <>
      <PageHero eyebrow={EYEBROW[lang]} title={doc.title} sub={doc.intro ?? ''} />
      <section className="py-16 sm:py-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{doc.updated}</p>
          <div className="mt-8 max-w-3xl space-y-8">
            {doc.blocks.map((b, i) =>
              b.todo ? (
                <div key={i} className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-700">
                    <AlertTriangle className="h-4 w-4" />{TODO_LABEL[lang]}
                  </div>
                  {b.h && <h2 className="mt-2 font-display text-lg font-semibold text-navy-900">{b.h}</h2>}
                  {b.p?.map((t, j) => <p key={j} className="mt-2 text-sm leading-relaxed text-amber-900/80">{t}</p>)}
                </div>
              ) : (
                <div key={i}>
                  {b.h && <h2 className="font-display text-xl font-bold tracking-tight text-navy-900">{b.h}</h2>}
                  {b.p?.map((t, j) => <p key={j} className="mt-3 leading-relaxed text-slate-600">{t}</p>)}
                  {b.ul && (
                    <ul className="mt-3 space-y-2">
                      {b.ul.map((t, j) => (
                        <li key={j} className="flex gap-2.5 leading-relaxed text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ),
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
