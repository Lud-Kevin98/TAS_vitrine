import { BookOpen, HelpCircle, Newspaper, LifeBuoy, Rss, ArrowUpRight } from 'lucide-react'
import { Container, PageHero } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../lib/seo'
import { CONTACT } from '../data/site'

const RES = [
  { id: 'documentation', icon: BookOpen, title: 'Documentation', desc: 'Guides de prise en main, configuration des modules et référence de l’API.', tag: 'En construction' },
  { id: 'faq', icon: HelpCircle, title: 'FAQ', desc: 'Les réponses aux questions les plus fréquentes sur la plateforme et la sécurité.', tag: 'Bientôt' },
  { id: 'blog', icon: Newspaper, title: 'Blog', desc: 'Nos réflexions sur la digitalisation, l’ERP moderne et la tech en Afrique.', tag: 'Bientôt' },
  { id: 'aide', icon: LifeBuoy, title: 'Centre d’aide', desc: 'Support, tutoriels et assistance pour tirer le meilleur de TAS.', tag: 'Bientôt' },
  { id: 'actualites', icon: Rss, title: 'Actualités', desc: 'Nouveautés produit, nouveaux modules et annonces de la plateforme.', tag: 'Bientôt' },
]

export default function Resources() {
  useSeo({
    title: 'Ressources — TAS Platform',
    description: 'Documentation, FAQ, blog, centre d’aide et actualités de TAS Platform. Tout pour comprendre et exploiter votre ERP Cloud configurable.',
    path: '/ressources',
  })

  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title="Tout pour maîtriser la plateforme."
        sub="Documentation, aide et actualités. Nous enrichissons cet espace au fil des versions — en attendant, notre équipe reste à votre écoute."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RES.map((r) => (
              <div key={r.id} id={r.id} className="scroll-mt-24 flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-medium">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><r.icon className="h-5 w-5" /></div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-slate-500">{r.tag}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{r.desc}</p>
              </div>
            ))}
            <a href={`mailto:${CONTACT.email}`} className="group flex flex-col justify-center rounded-2xl border border-dashed border-blue-300 bg-blue-50/50 p-7 text-blue-700 transition-colors hover:bg-blue-50">
              <div className="flex items-center gap-2 font-display text-lg font-semibold">Une question ? <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
              <p className="mt-2 text-sm text-blue-700/80">Écrivez-nous, nous répondons vite.</p>
            </a>
          </div>
        </Container>
      </section>

      <CtaBand title="La meilleure ressource, c’est une démo." sub="Voyez la plateforme en action, sur vos propres processus." />
    </>
  )
}
