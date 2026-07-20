import { Container, Button } from '../components/ui'
import { useSeo } from '../lib/seo'

export default function NotFound() {
  useSeo({ title: 'Page introuvable — TAS Platform', description: 'Cette page n’existe pas ou a été déplacée.', path: '/404' })
  return (
    <section className="py-28 sm:py-40">
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-blue-600">Erreur 404</p>
        <h1 className="mt-4 font-display text-5xl font-bold text-navy-900">Page introuvable</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">La page que vous cherchez n’existe pas ou a été déplacée. Revenons sur la bonne voie.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" icon>Retour à l’accueil</Button>
          <Button to="/contact" variant="ghost">Nous contacter</Button>
        </div>
      </Container>
    </section>
  )
}
