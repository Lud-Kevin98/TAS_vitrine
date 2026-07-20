import { Check, Sparkles } from 'lucide-react'
import { Container, PageHero, Button, SectionHead } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { PRICING } from '../data/site'
import { useSeo } from '../lib/seo'

const FAQ = [
  ['Pourquoi des tarifs sur devis ?', 'Chaque déploiement dépend des modules activés, du nombre d’utilisateurs et du niveau d’accompagnement. Nous construisons une offre juste, sans surprise.'],
  ['Puis-je commencer avec un seul module ?', 'Oui. Vous démarrez avec le module prioritaire, puis vous en activez d’autres à mesure que vos besoins grandissent — sans migration.'],
  ['Mes données sont-elles isolées ?', 'Absolument. Chaque client dispose de données strictement séparées (Row-Level Security), hébergées en Allemagne.'],
]

export default function Pricing() {
  useSeo({
    title: 'Tarifs — TAS Platform',
    description: 'Des offres SaaS claires et une formule Enterprise sur mesure. Payez pour les modules que vous activez. Demandez un devis adapté à votre organisation.',
    path: '/tarifs',
  })

  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title="Payez pour ce que vous activez."
        sub="Des offres SaaS transparentes qui grandissent avec vous, et une formule Enterprise pour les organisations multi-sites."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {PRICING.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-2xl border p-7 ${p.highlight ? 'border-blue-300 bg-white shadow-strong ring-1 ring-blue-200' : 'border-slate-200 bg-white shadow-card'}`}>
                {p.highlight && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white shadow-glow"><Sparkles className="h-3 w-3" />Le plus choisi</span>
                )}
                <h3 className="font-display text-xl font-bold text-navy-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.tagline}</p>
                <div className="mt-5 font-display text-3xl font-bold text-navy-900">{p.price}</div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />{f}</li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button to="/contact" variant={p.highlight ? 'primary' : 'ghost'} className="w-full">{p.cta}</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHead center eyebrow="Questions fréquentes" title="Ce qu’il faut savoir sur nos offres" />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {FAQ.map(([q, a]) => (
              <div key={q} className="p-6">
                <h3 className="font-display text-base font-semibold text-navy-900">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Construisons votre offre ensemble." sub="Dites-nous vos modules et votre volume : nous revenons avec un devis clair sous 24 h." />
    </>
  )
}
