import { Container, Button } from './ui'

export default function CtaBand({
  title = 'Prêt à voir TAS sur vos propres processus ?',
  sub = 'Réservez une démonstration : nous configurons la plateforme sur votre cas d’usage réel.',
}: { title?: string; sub?: string }) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-14 text-center sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-[2.4rem] sm:leading-[1.1] text-balance">{title}</h2>
            <p className="mt-4 text-lg text-slate-300">{sub}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" icon>Demander une démo</Button>
              <Button to="/produits" variant="ghost" className="!bg-white/5 !text-white !border-white/15 hover:!bg-white/10">Découvrir la plateforme</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
