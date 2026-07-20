import { Rocket, Code2, Users2, Globe2, ArrowUpRight } from 'lucide-react'
import { Container, PageHero, SectionHead } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../lib/seo'
import { CONTACT } from '../data/site'

const PERKS = [
  { icon: Rocket, title: 'Impact réel', text: 'Vous construisez une plateforme utilisée par de vraies entreprises, sur un marché en pleine transformation.' },
  { icon: Code2, title: 'Tech moderne', text: 'Architecture cloud, API, multi-tenant, mobile. On code proprement, on livre souvent.' },
  { icon: Users2, title: 'Équipe proche', text: 'Petite équipe, forte autonomie, décisions rapides. Votre voix compte.' },
  { icon: Globe2, title: 'Afrique + Europe', text: 'Un ancrage camerounais et une exigence européenne. Le meilleur des deux.' },
]

export default function Careers() {
  useSeo({
    title: 'Carrières — TAS Platform',
    description: 'Rejoignez Tchomnou Applications Systems et construisez la plateforme ERP Cloud de référence. Candidatures spontanées bienvenues.',
    path: '/carrieres',
  })

  return (
    <>
      <PageHero
        eyebrow="Carrières"
        title="Construisons l’ERP de demain, ensemble."
        sub="Nous cherchons des personnes qui veulent avoir un impact réel sur la digitalisation des entreprises. Développeurs, produit, commercial, support."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Pourquoi nous rejoindre" title="Un projet ambitieux, une équipe qui avance vite." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><p.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold text-navy-900">Pas d’offre ouverte qui correspond ?</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">Nous grandissons. Envoyez-nous une candidature spontanée : parlez-nous de vous et de ce que vous aimeriez construire.</p>
            <a href={`mailto:${CONTACT.email}?subject=Candidature spontanée`} className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5">
              Envoyer ma candidature <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Container>
      </section>

      <CtaBand title="Curieux de découvrir TAS avant de postuler ?" sub="Demandez une démo — c’est le meilleur moyen de comprendre ce qu’on construit." />
    </>
  )
}
