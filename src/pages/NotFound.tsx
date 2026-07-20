import { Container, Button } from '../components/ui'
import { useT } from '../i18n'
import { useSeo } from '../lib/seo'

export default function NotFound() {
  const t = useT()
  useSeo({ title: 'Page introuvable — TAS Platform', description: 'Cette page n’existe pas ou a été déplacée.', path: '/404' })
  const n = t.notFound
  return (
    <section className="py-28 sm:py-40">
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-blue-600">{n.code}</p>
        <h1 className="mt-4 font-display text-5xl font-bold text-navy-900">{n.title}</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">{n.sub}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" icon>{n.home}</Button>
          <Button to="/contact" variant="ghost">{n.contact}</Button>
        </div>
      </Container>
    </section>
  )
}
