import { useEffect } from 'react'

const SITE = 'https://tas-platform.com'
const SUFFIX = 'TAS — Plateforme modulaire configurable'

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** SEO par page : titre, description, canonical, Open Graph. */
export function useSeo(opts: { title: string; description: string; path: string }) {
  const { title, description, path } = opts
  useEffect(() => {
    const full = title.includes('TAS') ? title : `${title} · ${SUFFIX}`
    const url = `${SITE}${path}`
    document.title = full
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', full)
    setMeta('name', 'twitter:description', description)
    setCanonical(url)
  }, [title, description, path])
}
