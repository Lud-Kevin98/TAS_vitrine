import { Target, Compass, Heart, Globe2, ShieldCheck, MapPin } from 'lucide-react'
import { Container, PageHero, SectionHead } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../lib/seo'

const VALUES = [
  { icon: Compass, title: 'Vision', text: 'Devenir la plateforme ERP de référence pour les entreprises d’Afrique et d’ailleurs — moderne, souveraine et accessible.' },
  { icon: Target, title: 'Mission', text: 'Donner à chaque organisation les moyens de digitaliser ses processus, sans la complexité ni le coût des suites traditionnelles.' },
  { icon: Heart, title: 'Valeurs', text: 'Proximité, exigence, transparence et innovation utile. Nous construisons des outils dont nous serions fiers d’être clients.' },
]

export default function About() {
  useSeo({
    title: 'À propos — Tchomnou Applications Systems',
    description: 'Tchomnou Applications Systems (TAS) édite une plateforme ERP Cloud moderne. Ancrage africain, hébergement souverain en Allemagne, présence au Cameroun et en Allemagne.',
    path: '/a-propos',
  })

  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Tchomnou Applications Systems"
        sub="Nous construisons TAS Platform : un ERP Cloud pensé pour la réalité des entreprises africaines, avec les standards de qualité et de sécurité des grands éditeurs mondiaux."
      />

      {/* Histoire */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <SectionHead eyebrow="Notre histoire" title="Née d’un constat de terrain." />
            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>Trop d’entreprises pilotent encore leur activité sur du papier, des tableurs éparpillés et des messageries. Les ERP existants, eux, sont souvent trop rigides, trop chers et déconnectés du contexte local.</p>
              <p>TAS est né de cette conviction : une plateforme moderne, modulaire et configurable peut faire mieux — s’adapter à chaque organisation au lieu de lui imposer un modèle. Nous avons commencé par la logistique, puis fait de TAS une véritable plateforme multi-secteurs.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision / Mission / Valeurs */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Afrique + Allemagne */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
              <Globe2 className="h-7 w-7 text-blue-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">Pourquoi l’Afrique</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Un marché en pleine digitalisation, sous-servi par des solutions inadaptées. Nous concevons pour ce contexte : mobile, terrain, multi-agences, support local.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
              <ShieldCheck className="h-7 w-7 text-cyan-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">Hébergement en Allemagne 🇩🇪</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Vos données sont hébergées sur une infrastructure souveraine en Allemagne, avec un haut niveau de sécurité et une isolation stricte par client.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
              <MapPin className="h-7 w-7 text-blue-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">Présence Cameroun & Allemagne</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Une équipe proche de ses clients au Cameroun, et un ancrage technologique en Europe. Le meilleur des deux mondes.</p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title="Envie d’en savoir plus sur TAS ?" sub="Rencontrons-nous : nous vous montrons la plateforme et répondons à vos questions." />
    </>
  )
}
