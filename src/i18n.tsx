import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  Truck, Users, ShoppingBag, HeartPulse, GraduationCap, UtensilsCrossed, Car,
  Contact2, Wallet, Boxes, Workflow, GitBranch, Zap, Layers, Plug, Sparkles,
  Building2, Factory, Stethoscope, Store, School, Briefcase, type LucideIcon,
} from 'lucide-react'

export type Lang = 'fr' | 'en' | 'de'
export const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
]

/* Icônes par identifiant (indépendantes de la langue). */
const MOD_ICON: Record<string, LucideIcon> = {
  logistics: Truck, people: Users, retail: ShoppingBag, health: HeartPulse, school: GraduationCap,
  food: UtensilsCrossed, fleet: Car, crm: Contact2, finance: Wallet, inventory: Boxes,
}
const ENG_ICON = [Layers, Workflow, GitBranch, Zap, Building2, Plug, Sparkles]
const SEC_ICON = [Truck, Store, Factory, Stethoscope, School, Briefcase]
const WHY_ICON = [Workflow, Layers, Building2, Sparkles]
const MOD_STATUS: Record<string, 'live' | 'beta' | 'soon'> = {
  logistics: 'live', people: 'live', retail: 'beta', health: 'beta', school: 'soon',
  food: 'soon', fleet: 'live', crm: 'live', finance: 'live', inventory: 'live',
}
const MOD_ORDER = ['logistics', 'people', 'retail', 'health', 'school', 'food', 'fleet', 'crm', 'finance', 'inventory']
export const FEATURED = ['logistics', 'finance', 'people', 'inventory']

export const CONTACT = {
  email: 'contact@tas-platform.com', phone: '+237 6 57 08 69 84',
  whatsapp: '237657086984', whatsapp2: '4917629434276', location: 'Douala, Cameroun · Allemagne',
}

/* ── Dictionnaire de contenu (fr / en / de) ─────────────────────────── */
type Mod = { name: string; tagline: string; desc: string }
type Eng = { name: string; tag: string; desc: string }
type Sec = { name: string; anchor: string; modules: string; desc: string }
type Why = { title: string; desc: string }
type Price = { name: string; price: string; tagline: string; features: string[]; cta: string; highlight: boolean }

export type Content = {
  nav: { label: string; to: string }[]
  cta: string; discover: string; seeAll: string
  statuses: Record<'live' | 'beta' | 'soon', string>
  stats: { value: string; label: string }[]
  why: Why[]
  modules: Record<string, Mod>
  engines: Eng[]
  sectors: Sec[]
  pricing: Price[]
  home: {
    eyebrow: string; title1: string; title2: string; sub: string; feats: string[]
    trust: string; statement: string
    probEyebrow: string; probTitle: string; probSub: string; problems: Why[]
    solEyebrow: string; solTitle: string; solSub: string
    whyEyebrow: string; whyTitle: string; whySub: string
    modEyebrow: string; modTitle: string
  }
  products: { eyebrow: string; title: string; sub: string; socE: string; socT: string; socS: string; modE: string; modT: string; modS: string; ctaT: string; ctaS: string }
  solutions: { eyebrow: string; title: string; sub: string; feats: string[]; seeDemo: string; ctaT: string; ctaS: string }
  pricingPage: { eyebrow: string; title: string; sub: string; faqTitle: string; faq: [string, string][]; ctaT: string; ctaS: string }
  about: { eyebrow: string; title: string; sub: string; histE: string; histT: string; hist: string[]; values: Why[]; cards: Why[]; ctaT: string; ctaS: string }
  resources: { eyebrow: string; title: string; sub: string; items: { id: string; title: string; desc: string; tag: string }[]; ask: string; askSub: string; ctaT: string; ctaS: string }
  careers: { eyebrow: string; title: string; sub: string; perksE: string; perksT: string; perks: Why[]; spontT: string; spontSub: string; spontBtn: string; ctaT: string; ctaS: string }
  contact: { eyebrow: string; title: string; sub: string; badge: string; talkT: string; talkSub: string; loc: string; form: Record<string, string> }
  footer: { tagline: string; cols: { title: string; links: { label: string; to: string }[] }[]; hosted: string; legal1: string; legal2: string; rights: string }
  notFound: { code: string; title: string; sub: string; home: string; contact: string }
  ctaDefault: { title: string; sub: string }
}

const NAV_TO = ['/', '/a-propos', '/produits', '/solutions', '/tarifs', '/ressources', '/carrieres', '/contact']

const TR: Record<Lang, Content> = {
  /* ═══════════════════════ FR ═══════════════════════ */
  fr: {
    nav: ['Accueil', 'À propos', 'Produits', 'Solutions', 'Tarifs', 'Ressources', 'Carrières', 'Contact'].map((label, i) => ({ label, to: NAV_TO[i] })),
    cta: 'Demander une démo', discover: 'Découvrir la plateforme', seeAll: 'Voir tous les modules',
    statuses: { live: 'Disponible', beta: 'Bêta', soon: 'Bientôt' },
    stats: [
      { value: '10+', label: 'Modules métier' }, { value: '6', label: 'Secteurs couverts' },
      { value: '100%', label: 'Configurable' }, { value: 'Temps réel', label: 'Suivi & pilotage' },
    ],
    why: [
      { title: 'Configurable, pas rigide', desc: 'Vos processus, vos règles, vos rôles — la plateforme s’adapte à votre entreprise, pas l’inverse.' },
      { title: 'Modulaire & unifiée', desc: 'Activez les modules dont vous avez besoin. Une seule base, zéro double saisie, une vue à 360°.' },
      { title: 'Cloud & multi-tenant', desc: 'Données strictement isolées par client, sécurisées et disponibles partout.' },
      { title: 'Moderne & évolutive', desc: 'Architecture cloud, API ouverte, app mobile terrain et IA à venir. Conçue pour durer.' },
    ],
    modules: {
      logistics: { name: 'TAS Logistics', tagline: 'Transport & colis', desc: 'Expéditions, tri, transit, livraison, suivi temps réel et flotte — de bout en bout.' },
      people: { name: 'TAS People', tagline: 'RH & paie', desc: 'Dossiers, présence, congés, contrats, paie OHADA/CNPS et documents RH.' },
      retail: { name: 'TAS Retail', tagline: 'Commerce & POS', desc: 'Point de vente, ventes, catalogue et encaissement multi-boutiques.' },
      health: { name: 'TAS Health', tagline: 'Santé & pharma', desc: 'Officines, commandes, patients et distribution pharmaceutique.' },
      school: { name: 'TAS School', tagline: 'Éducation', desc: 'Élèves, inscriptions, scolarité et suivi pédagogique.' },
      food: { name: 'TAS Food', tagline: 'Restauration', desc: 'Commandes, cuisine, stocks et service.' },
      fleet: { name: 'TAS Fleet', tagline: 'Flotte & véhicules', desc: 'Véhicules, entretien, carburant, documents et affectations.' },
      crm: { name: 'TAS CRM', tagline: 'Relation client', desc: 'Prospects, opportunités, devis, contrats et relances commerciales.' },
      finance: { name: 'TAS Finance', tagline: 'Finance & compta', desc: 'Facturation, caisse, comptabilité OHADA, tarification et recouvrement.' },
      inventory: { name: 'TAS Inventory', tagline: 'Stocks & achats', desc: 'Articles, entrepôts, mouvements, inventaire et approvisionnements.' },
    },
    engines: [
      { name: 'TAS Platform', tag: 'Le socle', desc: 'Une base ERP unique : mêmes données, mêmes rôles, mêmes règles pour tous vos modules.' },
      { name: 'Business Process Engine', tag: 'Processus', desc: 'Modélisez vos processus métier en machines à états configurables, sans écrire de code.' },
      { name: 'Rules Engine', tag: 'Règles', desc: 'Des règles de gestion déclaratives qui s’adaptent à chaque entreprise et chaque contrat.' },
      { name: 'Automation Engine', tag: 'Automatisation', desc: 'Déclencheurs et actions automatiques : notifications, transitions, tâches, intégrations.' },
      { name: 'Multi-tenant', tag: 'Isolation', desc: 'Chaque client, ses données strictement isolées (Row-Level Security) et sa configuration propre.' },
      { name: 'API ouverte', tag: 'Intégration', desc: 'API REST documentée, clés self-service et webhooks pour connecter votre écosystème.' },
      { name: 'Intelligence Artificielle', tag: 'IA · Bientôt', desc: 'Assistance et analyse prédictive intégrées à la plateforme.' },
    ],
    sectors: [
      { name: 'Transport & Logistique', anchor: 'transport', modules: 'Logistics · Fleet · Finance', desc: 'Messagerie, fret, agences et flotte pilotés en temps réel.' },
      { name: 'Commerce & Distribution', anchor: 'commerce', modules: 'Retail · Inventory · CRM', desc: 'Ventes, stocks et clients unifiés, du magasin à la comptabilité.' },
      { name: 'Industrie & Services', anchor: 'industrie', modules: 'Inventory · People · Finance', desc: 'Opérations, ressources et finance sur une même base.' },
      { name: 'Santé & Pharma', anchor: 'sante', modules: 'Health · Inventory · Finance', desc: 'Officines et distribution pharmaceutique conformes.' },
      { name: 'Éducation', anchor: 'education', modules: 'School · People · Finance', desc: 'Établissements, scolarité et administration.' },
      { name: 'Services aux entreprises', anchor: 'services', modules: 'CRM · People · Finance', desc: 'PME de services : clients, équipes et facturation.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Sur devis', tagline: 'Pour démarrer avec un module', highlight: false, cta: 'Demander un devis', features: ['1 module activé', 'Jusqu’à 5 utilisateurs', 'Données isolées & sécurisées', 'App mobile terrain', 'Support par e-mail'] },
      { name: 'Business', price: 'Sur devis', tagline: 'La plateforme, plusieurs modules', highlight: true, cta: 'Demander une démo', features: ['Modules multiples', 'Utilisateurs illimités', 'Rôles & permissions fins', 'Processus & règles configurables', 'API & webhooks', 'Support prioritaire'] },
      { name: 'Enterprise', price: 'Sur mesure', tagline: 'Grandes organisations & multi-sites', highlight: false, cta: 'Parler à un expert', features: ['Multi-agences & consolidation', 'SLA & accompagnement dédié', 'Intégrations sur mesure', 'Config packs par secteur', 'Sécurité renforcée', 'Formation & onboarding'] },
    ],
    home: {
      eyebrow: 'Une plateforme, tous vos métiers',
      title1: 'Fini le papier et Excel :', title2: 'pilotez tout en temps réel.',
      sub: 'TAS réunit tous vos métiers dans une seule plateforme configurable — logistique, finance, RH, commerce, santé. Activez les modules dont vous avez besoin et gardez une vue à 360°.',
      feats: ['Modules activables', 'Sans double saisie', 'Suivi en temps réel', 'App mobile terrain'],
      trust: 'Conçu selon les standards de sécurité et de qualité des grands éditeurs.',
      statement: 'Une plateforme. Tous vos métiers. Aucun compromis.',
      probEyebrow: 'Le constat', probTitle: 'Vos outils actuels vous freinent.', probSub: 'Papier, Excel, WhatsApp : des données dispersées, peu fiables et impossibles à consolider — et des décisions prises à l’aveugle.',
      problems: [
        { title: 'Tout est manuel', desc: 'Registres papier, Excel non synchronisé, saisies en double. Chaque erreur coûte du temps et de l’argent.' },
        { title: 'Aucun suivi en temps réel', desc: 'Impossible de savoir où en est une livraison, un stock ou une opération sans passer un coup de fil.' },
        { title: 'Données éparpillées', desc: 'Cahiers, WhatsApp, tableurs : aucune traçabilité, aucun historique fiable.' },
        { title: 'Visibilité financière floue', desc: 'Difficile de savoir ce qui rentre, ce qui sort et quelle est la rentabilité réelle.' },
        { title: 'Multi-agences ingérable', desc: 'Chaque site fonctionne en silo. Impossible de consolider et de piloter à distance.' },
        { title: 'Outils inadaptés', desc: 'Des solutions trop complexes, trop chères, sans support ni ancrage local.' },
      ],
      solEyebrow: 'La solution TAS', solTitle: 'Une plateforme unique, un module pour chaque métier.', solSub: 'Activez uniquement ce dont vous avez besoin. Données centralisées, rôles précis, processus configurables et rapports exploitables — TAS s’adapte à votre entreprise, pas l’inverse.',
      whyEyebrow: 'Pourquoi TAS', whyTitle: 'La plupart des logiciels vous imposent leurs processus. TAS épouse les vôtres.',
      whySub: 'Là où les suites traditionnelles sont rigides et coûteuses, TAS est une plateforme moderne, modulaire et configurable — pensée pour s’adapter à chaque organisation.',
      modEyebrow: 'Nos modules', modTitle: 'Ce que chaque module résout pour vous.',
    },
    products: { eyebrow: 'Produits', title: 'Une plateforme, pas seulement un logiciel.', sub: 'TAS Platform est le socle : un moteur de processus, des règles, de l’automatisation et une isolation multi-tenant. Vous y activez les modules métier dont vous avez besoin.', socE: 'Le socle', socT: 'TAS Platform — le moteur configurable', socS: 'Le même noyau technique alimente tous les modules : c’est ce qui rend la plateforme cohérente, isolée et adaptable.', modE: 'Les modules', modT: 'Un module pour chaque métier, une seule base', modS: 'Chaque module est autonome mais partage les données, les rôles et les processus de la plateforme. Activez-les à la carte.', ctaT: 'Un module vous intéresse ?', ctaS: 'Nous vous le montrons en conditions réelles, configuré sur votre activité.' },
    solutions: { eyebrow: 'Solutions', title: 'Une plateforme qui parle le langage de votre secteur.', sub: 'Nous assemblons les bons modules et pré-configurons les processus adaptés à votre métier. Vous démarrez sur une base pertinente, puis vous l’ajustez.', feats: ['Processus pré-configurés', 'Données isolées & sécurisées', 'App mobile terrain'], seeDemo: 'Voir une démo pour ce secteur', ctaT: 'Votre secteur n’est pas listé ?', ctaS: 'La plateforme est configurable : parlons de votre cas d’usage, nous l’adaptons.' },
    pricingPage: { eyebrow: 'Tarifs', title: 'Payez pour ce que vous activez.', sub: 'Des offres SaaS transparentes qui grandissent avec vous, et une formule Enterprise pour les organisations multi-sites.', faqTitle: 'Ce qu’il faut savoir sur nos offres', faq: [['Pourquoi des tarifs sur devis ?', 'Chaque déploiement dépend des modules activés, du nombre d’utilisateurs et du niveau d’accompagnement. Nous construisons une offre juste, sans surprise.'], ['Puis-je commencer avec un seul module ?', 'Oui. Vous démarrez avec le module prioritaire, puis vous en activez d’autres à mesure que vos besoins grandissent — sans migration.'], ['Mes données sont-elles isolées ?', 'Absolument. Chaque client dispose de données strictement séparées (Row-Level Security), hébergées en Allemagne.']], ctaT: 'Construisons votre offre ensemble.', ctaS: 'Dites-nous vos modules et votre volume : nous revenons avec un devis clair sous 24 h.' },
    about: { eyebrow: 'À propos', title: 'Tchomnou Applications Systems', sub: 'Nous construisons TAS : une plateforme pensée pour la réalité des entreprises africaines, avec les standards de qualité et de sécurité des grands éditeurs mondiaux.', histE: 'Notre histoire', histT: 'Née d’un constat de terrain.', hist: ['Trop d’entreprises pilotent encore leur activité sur du papier, des tableurs éparpillés et des messageries. Les ERP existants, eux, sont souvent trop rigides, trop chers et déconnectés du contexte local.', 'TAS est né de cette conviction : une plateforme moderne, modulaire et configurable peut faire mieux — s’adapter à chaque organisation au lieu de lui imposer un modèle. Nous avons commencé par la logistique, puis fait de TAS une véritable plateforme multi-secteurs.'], values: [{ title: 'Vision', desc: 'Devenir la plateforme ERP de référence pour les entreprises d’Afrique et d’ailleurs — moderne, souveraine et accessible.' }, { title: 'Mission', desc: 'Donner à chaque organisation les moyens de digitaliser ses processus, sans la complexité ni le coût des suites traditionnelles.' }, { title: 'Valeurs', desc: 'Proximité, exigence, transparence et innovation utile. Nous construisons des outils dont nous serions fiers d’être clients.' }], cards: [{ title: 'Pourquoi l’Afrique', desc: 'Un marché en pleine digitalisation, sous-servi par des solutions inadaptées. Nous concevons pour ce contexte : mobile, terrain, multi-agences, support local.' }, { title: 'Hébergement en Allemagne 🇩🇪', desc: 'Vos données sont hébergées sur une infrastructure souveraine en Allemagne, avec un haut niveau de sécurité et une isolation stricte par client.' }, { title: 'Présence Cameroun & Allemagne', desc: 'Une équipe proche de ses clients au Cameroun, et un ancrage technologique en Europe. Le meilleur des deux mondes.' }], ctaT: 'Envie d’en savoir plus sur TAS ?', ctaS: 'Rencontrons-nous : nous vous montrons la plateforme et répondons à vos questions.' },
    resources: { eyebrow: 'Ressources', title: 'Tout pour maîtriser la plateforme.', sub: 'Documentation, aide et actualités. Nous enrichissons cet espace au fil des versions — en attendant, notre équipe reste à votre écoute.', items: [{ id: 'documentation', title: 'Documentation', desc: 'Guides de prise en main, configuration des modules et référence de l’API.', tag: 'En construction' }, { id: 'faq', title: 'FAQ', desc: 'Les réponses aux questions les plus fréquentes sur la plateforme et la sécurité.', tag: 'Bientôt' }, { id: 'blog', title: 'Blog', desc: 'Nos réflexions sur la digitalisation, l’ERP moderne et la tech en Afrique.', tag: 'Bientôt' }, { id: 'aide', title: 'Centre d’aide', desc: 'Support, tutoriels et assistance pour tirer le meilleur de TAS.', tag: 'Bientôt' }, { id: 'actualites', title: 'Actualités', desc: 'Nouveautés produit, nouveaux modules et annonces de la plateforme.', tag: 'Bientôt' }], ask: 'Une question ?', askSub: 'Écrivez-nous, nous répondons vite.', ctaT: 'La meilleure ressource, c’est une démo.', ctaS: 'Voyez la plateforme en action, sur vos propres processus.' },
    careers: { eyebrow: 'Carrières', title: 'Construisons l’ERP de demain, ensemble.', sub: 'Nous cherchons des personnes qui veulent avoir un impact réel sur la digitalisation des entreprises. Développeurs, produit, commercial, support.', perksE: 'Pourquoi nous rejoindre', perksT: 'Un projet ambitieux, une équipe qui avance vite.', perks: [{ title: 'Impact réel', desc: 'Vous construisez une plateforme utilisée par de vraies entreprises, sur un marché en pleine transformation.' }, { title: 'Tech moderne', desc: 'Architecture cloud, API, multi-tenant, mobile. On code proprement, on livre souvent.' }, { title: 'Équipe proche', desc: 'Petite équipe, forte autonomie, décisions rapides. Votre voix compte.' }, { title: 'Afrique + Europe', desc: 'Un ancrage camerounais et une exigence européenne. Le meilleur des deux.' }], spontT: 'Pas d’offre ouverte qui correspond ?', spontSub: 'Nous grandissons. Envoyez-nous une candidature spontanée : parlez-nous de vous et de ce que vous aimeriez construire.', spontBtn: 'Envoyer ma candidature', ctaT: 'Curieux de découvrir TAS avant de postuler ?', ctaS: 'Demandez une démo — c’est le meilleur moyen de comprendre ce qu’on construit.' },
    contact: { eyebrow: 'Contact & démonstration', title: 'Voyez TAS sur vos propres processus.', sub: 'Réservez une démo ou écrivez-nous. Nous configurons la plateforme sur votre cas d’usage réel et revenons vers vous sous 24 h.', badge: 'Démonstration gratuite, sans engagement', talkT: 'Parlons de votre projet', talkSub: 'Choisissez le canal qui vous convient — nous sommes joignables au Cameroun et en Allemagne.', loc: 'Localisation', form: { name: 'Nom complet', company: 'Entreprise', email: 'E-mail', phone: 'Téléphone', sector: 'Secteur', select: 'Sélectionnez…', other: 'Autre', need: 'Votre besoin', needPh: 'Décrivez brièvement votre activité et vos besoins…', consent: 'J’accepte d’être recontacté par TAS au sujet de ma demande.', send: 'Demander ma démo', sending: 'Envoi…', okT: 'Message envoyé !', okS: 'Merci. Notre équipe vous recontacte sous 24 h pour organiser votre démonstration.', err: 'Une erreur est survenue. Réessayez ou écrivez-nous directement par e-mail.', namePh: 'Votre nom', companyPh: 'Votre société' } },
    footer: { tagline: 'La plateforme modulaire et configurable qui s’adapte aux processus de chaque entreprise.', cols: [{ title: 'Produits', links: [{ label: 'TAS Platform', to: '/produits' }, { label: 'TAS Logistics', to: '/produits#logistics' }, { label: 'TAS People', to: '/produits#people' }, { label: 'Finance & CRM', to: '/produits#crm' }] }, { title: 'Solutions', links: [{ label: 'Transport', to: '/solutions#transport' }, { label: 'Commerce', to: '/solutions#commerce' }, { label: 'Santé', to: '/solutions#sante' }, { label: 'Éducation', to: '/solutions#education' }] }, { title: 'Entreprise', links: [{ label: 'À propos', to: '/a-propos' }, { label: 'Carrières', to: '/carrieres' }, { label: 'Tarifs', to: '/tarifs' }, { label: 'Contact', to: '/contact' }] }, { title: 'Ressources', links: [{ label: 'Documentation', to: '/ressources#documentation' }, { label: 'FAQ', to: '/ressources#faq' }, { label: 'Blog', to: '/ressources#blog' }, { label: 'Centre d’aide', to: '/ressources#aide' }] }], hosted: 'Hébergé en Allemagne 🇩🇪', legal1: 'Mentions légales', legal2: 'Confidentialité', rights: 'Tous droits réservés.' },
    notFound: { code: 'Erreur 404', title: 'Page introuvable', sub: 'La page que vous cherchez n’existe pas ou a été déplacée. Revenons sur la bonne voie.', home: 'Retour à l’accueil', contact: 'Nous contacter' },
    ctaDefault: { title: 'L’innovation au service de votre performance.', sub: 'Réservez une démonstration : nous configurons TAS sur votre cas d’usage réel, et vous voyez la valeur en direct.' },
  },
  /* ═══════════════════════ EN ═══════════════════════ */
  en: {
    nav: ['Home', 'About', 'Products', 'Solutions', 'Pricing', 'Resources', 'Careers', 'Contact'].map((label, i) => ({ label, to: NAV_TO[i] })),
    cta: 'Request a demo', discover: 'Explore the platform', seeAll: 'See all modules',
    statuses: { live: 'Available', beta: 'Beta', soon: 'Soon' },
    stats: [{ value: '10+', label: 'Business modules' }, { value: '6', label: 'Industries covered' }, { value: '100%', label: 'Configurable' }, { value: 'Real time', label: 'Tracking & control' }],
    why: [
      { title: 'Configurable, not rigid', desc: 'Your processes, your rules, your roles — the platform adapts to your business, not the other way around.' },
      { title: 'Modular & unified', desc: 'Turn on only the modules you need. One base, no double entry, a 360° view.' },
      { title: 'Cloud & multi-tenant', desc: 'Strictly isolated data per client, secure and available everywhere.' },
      { title: 'Modern & scalable', desc: 'Cloud architecture, open API, mobile field app and AI on the way. Built to last.' },
    ],
    modules: {
      logistics: { name: 'TAS Logistics', tagline: 'Transport & parcels', desc: 'Shipments, sorting, transit, delivery, real-time tracking and fleet — end to end.' },
      people: { name: 'TAS People', tagline: 'HR & payroll', desc: 'Records, attendance, leave, contracts, OHADA/CNPS payroll and HR documents.' },
      retail: { name: 'TAS Retail', tagline: 'Retail & POS', desc: 'Point of sale, sales, catalog and checkout across multiple stores.' },
      health: { name: 'TAS Health', tagline: 'Health & pharma', desc: 'Pharmacies, orders, patients and pharmaceutical distribution.' },
      school: { name: 'TAS School', tagline: 'Education', desc: 'Students, enrolment, tuition and academic tracking.' },
      food: { name: 'TAS Food', tagline: 'Food service', desc: 'Orders, kitchen, stock and service.' },
      fleet: { name: 'TAS Fleet', tagline: 'Fleet & vehicles', desc: 'Vehicles, maintenance, fuel, documents and assignments.' },
      crm: { name: 'TAS CRM', tagline: 'Customer relations', desc: 'Leads, opportunities, quotes, contracts and follow-ups.' },
      finance: { name: 'TAS Finance', tagline: 'Finance & accounting', desc: 'Invoicing, cash, OHADA accounting, pricing and collections.' },
      inventory: { name: 'TAS Inventory', tagline: 'Stock & purchasing', desc: 'Items, warehouses, movements, stocktakes and procurement.' },
    },
    engines: [
      { name: 'TAS Platform', tag: 'The core', desc: 'A single ERP foundation: same data, same roles, same rules across all your modules.' },
      { name: 'Business Process Engine', tag: 'Processes', desc: 'Model your business processes as configurable state machines — no code required.' },
      { name: 'Rules Engine', tag: 'Rules', desc: 'Declarative business rules that adapt to every company and every contract.' },
      { name: 'Automation Engine', tag: 'Automation', desc: 'Automatic triggers and actions: notifications, transitions, tasks, integrations.' },
      { name: 'Multi-tenant', tag: 'Isolation', desc: 'Each client, strictly isolated data (Row-Level Security) and its own configuration.' },
      { name: 'Open API', tag: 'Integration', desc: 'Documented REST API, self-service keys and webhooks to connect your ecosystem.' },
      { name: 'Artificial Intelligence', tag: 'AI · Soon', desc: 'Built-in assistance and predictive analytics across the platform.' },
    ],
    sectors: [
      { name: 'Transport & Logistics', anchor: 'transport', modules: 'Logistics · Fleet · Finance', desc: 'Courier, freight, branches and fleet managed in real time.' },
      { name: 'Retail & Distribution', anchor: 'commerce', modules: 'Retail · Inventory · CRM', desc: 'Sales, stock and customers unified, from store to accounting.' },
      { name: 'Industry & Services', anchor: 'industrie', modules: 'Inventory · People · Finance', desc: 'Operations, resources and finance on one base.' },
      { name: 'Health & Pharma', anchor: 'sante', modules: 'Health · Inventory · Finance', desc: 'Compliant pharmacies and pharmaceutical distribution.' },
      { name: 'Education', anchor: 'education', modules: 'School · People · Finance', desc: 'Institutions, tuition and administration.' },
      { name: 'Business Services', anchor: 'services', modules: 'CRM · People · Finance', desc: 'Service SMEs: clients, teams and invoicing.' },
    ],
    pricing: [
      { name: 'Starter', price: 'On request', tagline: 'Get started with one module', highlight: false, cta: 'Request a quote', features: ['1 active module', 'Up to 5 users', 'Isolated & secure data', 'Mobile field app', 'E-mail support'] },
      { name: 'Business', price: 'On request', tagline: 'The platform, several modules', highlight: true, cta: 'Request a demo', features: ['Multiple modules', 'Unlimited users', 'Fine-grained roles & permissions', 'Configurable processes & rules', 'API & webhooks', 'Priority support'] },
      { name: 'Enterprise', price: 'Custom', tagline: 'Large & multi-site organizations', highlight: false, cta: 'Talk to an expert', features: ['Multi-branch & consolidation', 'SLA & dedicated support', 'Custom integrations', 'Per-industry config packs', 'Enhanced security', 'Training & onboarding'] },
    ],
    home: {
      eyebrow: 'One platform, every part of your business',
      title1: 'No more paper and spreadsheets:', title2: 'run everything in real time.',
      sub: 'TAS brings all your operations into one configurable platform — logistics, finance, HR, retail, health. Switch on the modules you need and keep a 360° view.',
      feats: ['Modules on demand', 'No double entry', 'Real-time tracking', 'Mobile field app'],
      trust: 'Built to the security and quality standards of the world’s leading vendors.',
      statement: 'One platform. Every part of your business. No compromise.',
      probEyebrow: 'The reality', probTitle: 'Your current tools are holding you back.', probSub: 'Paper, spreadsheets, WhatsApp: scattered, unreliable data you can’t consolidate — and decisions made blind.',
      problems: [
        { title: 'Everything is manual', desc: 'Paper logs, unsynced spreadsheets, double entry. Every mistake costs time and money.' },
        { title: 'No real-time visibility', desc: 'You can’t tell where a delivery, stock item or operation stands without making a call.' },
        { title: 'Scattered data', desc: 'Notebooks, WhatsApp, spreadsheets: no traceability, no reliable history.' },
        { title: 'Blurry financials', desc: 'Hard to know what comes in, what goes out and what your real margin is.' },
        { title: 'Unmanageable multi-branch', desc: 'Every site works in a silo. Impossible to consolidate and steer remotely.' },
        { title: 'Ill-fitting tools', desc: 'Solutions too complex, too expensive, with no local support or anchoring.' },
      ],
      solEyebrow: 'The TAS answer', solTitle: 'One platform, a module for every part of your business.', solSub: 'Turn on only what you need. Centralized data, precise roles, configurable processes and actionable reports — TAS adapts to your business, not the other way around.',
      whyEyebrow: 'Why TAS', whyTitle: 'Most software imposes its processes on you. TAS embraces yours.',
      whySub: 'Where traditional suites are rigid and costly, TAS is a modern, modular and configurable platform — designed to fit every organization.',
      modEyebrow: 'Our modules', modTitle: 'What each module solves for you.',
    },
    products: { eyebrow: 'Products', title: 'A platform, not just software.', sub: 'TAS Platform is the foundation: a process engine, rules, automation and multi-tenant isolation. On top, you activate the business modules you need.', socE: 'The core', socT: 'TAS Platform — the configurable engine', socS: 'The same technical core powers every module — that’s what makes the platform coherent, isolated and adaptable.', modE: 'The modules', modT: 'A module for every part of your business, one base', modS: 'Each module is autonomous yet shares the platform’s data, roles and processes. Activate them à la carte.', ctaT: 'Interested in a module?', ctaS: 'We show it to you in real conditions, configured for your business.' },
    solutions: { eyebrow: 'Solutions', title: 'A platform that speaks your industry’s language.', sub: 'We assemble the right modules and pre-configure the processes suited to your business. You start on a relevant base, then tune it.', feats: ['Pre-configured processes', 'Isolated & secure data', 'Mobile field app'], seeDemo: 'See a demo for this industry', ctaT: 'Industry not listed?', ctaS: 'The platform is configurable: tell us your use case and we adapt it.' },
    pricingPage: { eyebrow: 'Pricing', title: 'Pay for what you activate.', sub: 'Transparent SaaS plans that grow with you, and an Enterprise option for multi-site organizations.', faqTitle: 'What to know about our plans', faq: [['Why quote-based pricing?', 'Every deployment depends on active modules, number of users and level of support. We build a fair, no-surprise offer.'], ['Can I start with a single module?', 'Yes. Start with the priority module, then activate more as your needs grow — no migration.'], ['Is my data isolated?', 'Absolutely. Each client has strictly separated data (Row-Level Security), hosted in Germany.']], ctaT: 'Let’s build your plan together.', ctaS: 'Tell us your modules and volume: we come back with a clear quote within 24 h.' },
    about: { eyebrow: 'About', title: 'Tchomnou Applications Systems', sub: 'We build TAS: a platform designed for the reality of African businesses, with the quality and security standards of the world’s leading vendors.', histE: 'Our story', histT: 'Born from what we saw on the ground.', hist: ['Too many businesses still run on paper, scattered spreadsheets and messaging apps. Existing ERPs, meanwhile, are often too rigid, too expensive and disconnected from the local context.', 'TAS was born from a conviction: a modern, modular and configurable platform can do better — adapting to every organization instead of imposing a model. We started with logistics, then made TAS a true multi-industry platform.'], values: [{ title: 'Vision', desc: 'To become the reference ERP platform for businesses in Africa and beyond — modern, sovereign and accessible.' }, { title: 'Mission', desc: 'To give every organization the means to digitalize its processes, without the complexity or cost of traditional suites.' }, { title: 'Values', desc: 'Closeness, rigor, transparency and useful innovation. We build tools we’d be proud to use ourselves.' }], cards: [{ title: 'Why Africa', desc: 'A fast-digitalizing market underserved by unfit solutions. We design for this context: mobile, field-first, multi-branch, local support.' }, { title: 'Hosted in Germany 🇩🇪', desc: 'Your data is hosted on sovereign infrastructure in Germany, with a high level of security and strict per-client isolation.' }, { title: 'Presence in Cameroon & Germany', desc: 'A team close to its clients in Cameroon, and a technological anchor in Europe. The best of both worlds.' }], ctaT: 'Want to know more about TAS?', ctaS: 'Let’s meet: we show you the platform and answer your questions.' },
    resources: { eyebrow: 'Resources', title: 'Everything to master the platform.', sub: 'Documentation, help and news. We enrich this space release after release — in the meantime, our team is here for you.', items: [{ id: 'documentation', title: 'Documentation', desc: 'Getting-started guides, module configuration and API reference.', tag: 'In progress' }, { id: 'faq', title: 'FAQ', desc: 'Answers to the most common questions about the platform and security.', tag: 'Soon' }, { id: 'blog', title: 'Blog', desc: 'Our thoughts on digitalization, the modern ERP and tech in Africa.', tag: 'Soon' }, { id: 'aide', title: 'Help center', desc: 'Support, tutorials and assistance to get the most out of TAS.', tag: 'Soon' }, { id: 'actualites', title: 'News', desc: 'Product updates, new modules and platform announcements.', tag: 'Soon' }], ask: 'A question?', askSub: 'Write to us, we reply fast.', ctaT: 'The best resource is a demo.', ctaS: 'See the platform in action, on your own processes.' },
    careers: { eyebrow: 'Careers', title: 'Let’s build tomorrow’s ERP, together.', sub: 'We look for people who want real impact on how businesses digitalize. Engineering, product, sales, support.', perksE: 'Why join us', perksT: 'An ambitious project, a team that moves fast.', perks: [{ title: 'Real impact', desc: 'You build a platform used by real businesses, in a fast-transforming market.' }, { title: 'Modern tech', desc: 'Cloud architecture, API, multi-tenant, mobile. We code cleanly and ship often.' }, { title: 'Close-knit team', desc: 'Small team, strong autonomy, fast decisions. Your voice counts.' }, { title: 'Africa + Europe', desc: 'A Cameroonian anchor and European standards. The best of both.' }], spontT: 'No open role that fits?', spontSub: 'We’re growing. Send us a spontaneous application: tell us about you and what you’d like to build.', spontBtn: 'Send my application', ctaT: 'Curious to discover TAS before applying?', ctaS: 'Request a demo — it’s the best way to understand what we build.' },
    contact: { eyebrow: 'Contact & demo', title: 'See TAS on your own processes.', sub: 'Book a demo or write to us. We configure the platform on your real use case and get back to you within 24 h.', badge: 'Free demo, no commitment', talkT: 'Let’s talk about your project', talkSub: 'Pick the channel that suits you — we’re reachable in Cameroon and Germany.', loc: 'Location', form: { name: 'Full name', company: 'Company', email: 'E-mail', phone: 'Phone', sector: 'Industry', select: 'Select…', other: 'Other', need: 'Your need', needPh: 'Briefly describe your business and needs…', consent: 'I agree to be contacted by TAS about my request.', send: 'Request my demo', sending: 'Sending…', okT: 'Message sent!', okS: 'Thank you. Our team will contact you within 24 h to arrange your demo.', err: 'Something went wrong. Try again or e-mail us directly.', namePh: 'Your name', companyPh: 'Your company' } },
    footer: { tagline: 'The modular, configurable platform that adapts to every company’s processes.', cols: [{ title: 'Products', links: [{ label: 'TAS Platform', to: '/produits' }, { label: 'TAS Logistics', to: '/produits#logistics' }, { label: 'TAS People', to: '/produits#people' }, { label: 'Finance & CRM', to: '/produits#crm' }] }, { title: 'Solutions', links: [{ label: 'Transport', to: '/solutions#transport' }, { label: 'Retail', to: '/solutions#commerce' }, { label: 'Health', to: '/solutions#sante' }, { label: 'Education', to: '/solutions#education' }] }, { title: 'Company', links: [{ label: 'About', to: '/a-propos' }, { label: 'Careers', to: '/carrieres' }, { label: 'Pricing', to: '/tarifs' }, { label: 'Contact', to: '/contact' }] }, { title: 'Resources', links: [{ label: 'Documentation', to: '/ressources#documentation' }, { label: 'FAQ', to: '/ressources#faq' }, { label: 'Blog', to: '/ressources#blog' }, { label: 'Help center', to: '/ressources#aide' }] }], hosted: 'Hosted in Germany 🇩🇪', legal1: 'Legal notice', legal2: 'Privacy', rights: 'All rights reserved.' },
    notFound: { code: 'Error 404', title: 'Page not found', sub: 'The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.', home: 'Back to home', contact: 'Contact us' },
    ctaDefault: { title: 'Innovation at the service of your performance.', sub: 'Book a demo: we configure TAS on your real use case, and you see the value live.' },
  },
  /* ═══════════════════════ DE ═══════════════════════ */
  de: {
    nav: ['Start', 'Über uns', 'Produkte', 'Lösungen', 'Preise', 'Ressourcen', 'Karriere', 'Kontakt'].map((label, i) => ({ label, to: NAV_TO[i] })),
    cta: 'Demo anfragen', discover: 'Plattform entdecken', seeAll: 'Alle Module ansehen',
    statuses: { live: 'Verfügbar', beta: 'Beta', soon: 'Bald' },
    stats: [{ value: '10+', label: 'Fachmodule' }, { value: '6', label: 'Branchen' }, { value: '100%', label: 'Konfigurierbar' }, { value: 'Echtzeit', label: 'Tracking & Steuerung' }],
    why: [
      { title: 'Konfigurierbar, nicht starr', desc: 'Ihre Prozesse, Ihre Regeln, Ihre Rollen — die Plattform passt sich Ihrem Unternehmen an, nicht umgekehrt.' },
      { title: 'Modular & einheitlich', desc: 'Aktivieren Sie nur die Module, die Sie brauchen. Eine Basis, keine Doppelerfassung, 360°-Sicht.' },
      { title: 'Cloud & mandantenfähig', desc: 'Streng isolierte Daten je Kunde, sicher und überall verfügbar.' },
      { title: 'Modern & skalierbar', desc: 'Cloud-Architektur, offene API, mobile Feld-App und KI in Vorbereitung. Für die Zukunft gebaut.' },
    ],
    modules: {
      logistics: { name: 'TAS Logistics', tagline: 'Transport & Pakete', desc: 'Sendungen, Sortierung, Transit, Zustellung, Echtzeit-Tracking und Fuhrpark — Ende zu Ende.' },
      people: { name: 'TAS People', tagline: 'HR & Lohn', desc: 'Akten, Anwesenheit, Urlaub, Verträge, OHADA/CNPS-Lohn und HR-Dokumente.' },
      retail: { name: 'TAS Retail', tagline: 'Handel & POS', desc: 'Kasse, Verkauf, Katalog und Abrechnung über mehrere Filialen.' },
      health: { name: 'TAS Health', tagline: 'Gesundheit & Pharma', desc: 'Apotheken, Bestellungen, Patienten und pharmazeutischer Vertrieb.' },
      school: { name: 'TAS School', tagline: 'Bildung', desc: 'Schüler, Einschreibung, Schulgeld und Lernverfolgung.' },
      food: { name: 'TAS Food', tagline: 'Gastronomie', desc: 'Bestellungen, Küche, Bestand und Service.' },
      fleet: { name: 'TAS Fleet', tagline: 'Fuhrpark & Fahrzeuge', desc: 'Fahrzeuge, Wartung, Kraftstoff, Dokumente und Zuweisungen.' },
      crm: { name: 'TAS CRM', tagline: 'Kundenbeziehung', desc: 'Leads, Chancen, Angebote, Verträge und Nachfassaktionen.' },
      finance: { name: 'TAS Finance', tagline: 'Finanzen & Buchhaltung', desc: 'Rechnung, Kasse, OHADA-Buchhaltung, Preise und Inkasso.' },
      inventory: { name: 'TAS Inventory', tagline: 'Bestand & Einkauf', desc: 'Artikel, Lager, Bewegungen, Inventur und Beschaffung.' },
    },
    engines: [
      { name: 'TAS Platform', tag: 'Die Basis', desc: 'Ein einziges ERP-Fundament: gleiche Daten, Rollen und Regeln für alle Module.' },
      { name: 'Business Process Engine', tag: 'Prozesse', desc: 'Modellieren Sie Ihre Prozesse als konfigurierbare Zustandsautomaten — ohne Code.' },
      { name: 'Rules Engine', tag: 'Regeln', desc: 'Deklarative Geschäftsregeln, die sich jedem Unternehmen und Vertrag anpassen.' },
      { name: 'Automation Engine', tag: 'Automatisierung', desc: 'Automatische Auslöser und Aktionen: Benachrichtigungen, Übergänge, Aufgaben, Integrationen.' },
      { name: 'Multi-tenant', tag: 'Isolierung', desc: 'Jeder Kunde, streng isolierte Daten (Row-Level Security) und eigene Konfiguration.' },
      { name: 'Offene API', tag: 'Integration', desc: 'Dokumentierte REST-API, Self-Service-Schlüssel und Webhooks für Ihr Ökosystem.' },
      { name: 'Künstliche Intelligenz', tag: 'KI · Bald', desc: 'Integrierte Assistenz und Vorhersageanalyse in der Plattform.' },
    ],
    sectors: [
      { name: 'Transport & Logistik', anchor: 'transport', modules: 'Logistics · Fleet · Finance', desc: 'Kurier, Fracht, Filialen und Fuhrpark in Echtzeit gesteuert.' },
      { name: 'Handel & Distribution', anchor: 'commerce', modules: 'Retail · Inventory · CRM', desc: 'Verkauf, Bestand und Kunden vereint — vom Laden bis zur Buchhaltung.' },
      { name: 'Industrie & Dienstleistung', anchor: 'industrie', modules: 'Inventory · People · Finance', desc: 'Betrieb, Ressourcen und Finanzen auf einer Basis.' },
      { name: 'Gesundheit & Pharma', anchor: 'sante', modules: 'Health · Inventory · Finance', desc: 'Konforme Apotheken und pharmazeutischer Vertrieb.' },
      { name: 'Bildung', anchor: 'education', modules: 'School · People · Finance', desc: 'Einrichtungen, Schulgeld und Verwaltung.' },
      { name: 'Unternehmensdienste', anchor: 'services', modules: 'CRM · People · Finance', desc: 'Dienstleistungs-KMU: Kunden, Teams und Abrechnung.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Auf Anfrage', tagline: 'Mit einem Modul starten', highlight: false, cta: 'Angebot anfragen', features: ['1 aktives Modul', 'Bis zu 5 Nutzer', 'Isolierte & sichere Daten', 'Mobile Feld-App', 'E-Mail-Support'] },
      { name: 'Business', price: 'Auf Anfrage', tagline: 'Die Plattform, mehrere Module', highlight: true, cta: 'Demo anfragen', features: ['Mehrere Module', 'Unbegrenzte Nutzer', 'Feingranulare Rollen & Rechte', 'Konfigurierbare Prozesse & Regeln', 'API & Webhooks', 'Priorisierter Support'] },
      { name: 'Enterprise', price: 'Individuell', tagline: 'Große & Multi-Site-Organisationen', highlight: false, cta: 'Mit Experten sprechen', features: ['Multi-Filiale & Konsolidierung', 'SLA & dedizierte Betreuung', 'Individuelle Integrationen', 'Branchen-Config-Packs', 'Erhöhte Sicherheit', 'Schulung & Onboarding'] },
    ],
    home: {
      eyebrow: 'Eine Plattform für Ihr ganzes Unternehmen',
      title1: 'Schluss mit Papier und Excel:', title2: 'alles in Echtzeit steuern.',
      sub: 'TAS vereint all Ihre Bereiche in einer konfigurierbaren Plattform — Logistik, Finanzen, HR, Handel, Gesundheit. Aktivieren Sie die Module, die Sie brauchen, und behalten Sie die 360°-Sicht.',
      feats: ['Module nach Bedarf', 'Keine Doppelerfassung', 'Echtzeit-Tracking', 'Mobile Feld-App'],
      trust: 'Nach den Sicherheits- und Qualitätsstandards der führenden Anbieter gebaut.',
      statement: 'Eine Plattform. Alle Bereiche. Kein Kompromiss.',
      probEyebrow: 'Die Realität', probTitle: 'Ihre heutigen Werkzeuge bremsen Sie aus.', probSub: 'Papier, Excel, WhatsApp: verstreute, unzuverlässige Daten, die sich nicht zusammenführen lassen — und Entscheidungen im Blindflug.',
      problems: [
        { title: 'Alles ist manuell', desc: 'Papierlisten, nicht synchrone Tabellen, Doppelerfassung. Jeder Fehler kostet Zeit und Geld.' },
        { title: 'Keine Echtzeit-Sicht', desc: 'Ohne Anruf wissen Sie nicht, wo eine Lieferung, ein Bestand oder ein Vorgang steht.' },
        { title: 'Verstreute Daten', desc: 'Hefte, WhatsApp, Tabellen: keine Nachvollziehbarkeit, keine verlässliche Historie.' },
        { title: 'Unklare Finanzen', desc: 'Schwer zu sagen, was reinkommt, was rausgeht und wie hoch die echte Marge ist.' },
        { title: 'Multi-Filiale unbeherrschbar', desc: 'Jeder Standort im Silo. Konsolidierung und Fernsteuerung unmöglich.' },
        { title: 'Unpassende Werkzeuge', desc: 'Lösungen zu komplex, zu teuer, ohne lokalen Support und Verankerung.' },
      ],
      solEyebrow: 'Die TAS-Antwort', solTitle: 'Eine Plattform, ein Modul für jeden Bereich.', solSub: 'Aktivieren Sie nur, was Sie brauchen. Zentrale Daten, präzise Rollen, konfigurierbare Prozesse und auswertbare Berichte — TAS passt sich Ihrem Unternehmen an, nicht umgekehrt.',
      whyEyebrow: 'Warum TAS', whyTitle: 'Die meiste Software zwingt Ihnen ihre Prozesse auf. TAS übernimmt Ihre.',
      whySub: 'Wo klassische Suiten starr und teuer sind, ist TAS eine moderne, modulare und konfigurierbare Plattform — für jede Organisation gemacht.',
      modEyebrow: 'Unsere Module', modTitle: 'Was jedes Modul für Sie löst.',
    },
    products: { eyebrow: 'Produkte', title: 'Eine Plattform, nicht nur Software.', sub: 'TAS Platform ist das Fundament: eine Prozess-Engine, Regeln, Automatisierung und mandantenfähige Isolierung. Darauf aktivieren Sie die Fachmodule, die Sie brauchen.', socE: 'Die Basis', socT: 'TAS Platform — die konfigurierbare Engine', socS: 'Derselbe technische Kern treibt jedes Modul an — das macht die Plattform kohärent, isoliert und anpassbar.', modE: 'Die Module', modT: 'Ein Modul für jeden Bereich, eine Basis', modS: 'Jedes Modul ist autonom, teilt aber Daten, Rollen und Prozesse der Plattform. À la carte aktivierbar.', ctaT: 'Interesse an einem Modul?', ctaS: 'Wir zeigen es Ihnen unter realen Bedingungen, konfiguriert für Ihr Geschäft.' },
    solutions: { eyebrow: 'Lösungen', title: 'Eine Plattform, die die Sprache Ihrer Branche spricht.', sub: 'Wir kombinieren die richtigen Module und konfigurieren die passenden Prozesse vor. Sie starten auf einer relevanten Basis und passen sie an.', feats: ['Vorkonfigurierte Prozesse', 'Isolierte & sichere Daten', 'Mobile Feld-App'], seeDemo: 'Demo für diese Branche ansehen', ctaT: 'Ihre Branche fehlt?', ctaS: 'Die Plattform ist konfigurierbar: Erzählen Sie uns Ihren Anwendungsfall, wir passen sie an.' },
    pricingPage: { eyebrow: 'Preise', title: 'Zahlen Sie für das, was Sie aktivieren.', sub: 'Transparente SaaS-Pakete, die mit Ihnen wachsen, und eine Enterprise-Option für Multi-Site-Organisationen.', faqTitle: 'Wissenswertes zu unseren Paketen', faq: [['Warum Preise auf Anfrage?', 'Jede Einführung hängt von aktiven Modulen, Nutzerzahl und Betreuungsniveau ab. Wir erstellen ein faires Angebot ohne Überraschungen.'], ['Kann ich mit einem Modul starten?', 'Ja. Beginnen Sie mit dem wichtigsten Modul und aktivieren Sie weitere, wenn Ihr Bedarf wächst — ohne Migration.'], ['Sind meine Daten isoliert?', 'Absolut. Jeder Kunde hat streng getrennte Daten (Row-Level Security), gehostet in Deutschland.']], ctaT: 'Lassen Sie uns Ihr Paket gemeinsam bauen.', ctaS: 'Nennen Sie Module und Volumen: Wir melden uns mit einem klaren Angebot binnen 24 h.' },
    about: { eyebrow: 'Über uns', title: 'Tchomnou Applications Systems', sub: 'Wir bauen TAS: eine Plattform für die Realität afrikanischer Unternehmen — mit den Qualitäts- und Sicherheitsstandards der weltweit führenden Anbieter.', histE: 'Unsere Geschichte', histT: 'Aus der Praxis entstanden.', hist: ['Zu viele Unternehmen steuern ihr Geschäft noch mit Papier, verstreuten Tabellen und Messengern. Bestehende ERPs sind oft zu starr, zu teuer und vom lokalen Kontext abgekoppelt.', 'TAS entstand aus einer Überzeugung: Eine moderne, modulare und konfigurierbare Plattform kann es besser — sich jeder Organisation anpassen, statt ein Modell aufzuzwingen. Wir begannen mit Logistik und machten TAS zu einer echten Multi-Branchen-Plattform.'], values: [{ title: 'Vision', desc: 'Die Referenz-ERP-Plattform für Unternehmen in Afrika und darüber hinaus werden — modern, souverän und zugänglich.' }, { title: 'Mission', desc: 'Jeder Organisation die Mittel geben, ihre Prozesse zu digitalisieren — ohne die Komplexität und Kosten klassischer Suiten.' }, { title: 'Werte', desc: 'Nähe, Anspruch, Transparenz und nützliche Innovation. Wir bauen Werkzeuge, die wir selbst gern nutzen würden.' }], cards: [{ title: 'Warum Afrika', desc: 'Ein schnell digitalisierender Markt, unterversorgt von unpassenden Lösungen. Wir entwickeln für diesen Kontext: mobil, feldnah, multi-filial, lokaler Support.' }, { title: 'Hosting in Deutschland 🇩🇪', desc: 'Ihre Daten liegen auf souveräner Infrastruktur in Deutschland — mit hohem Sicherheitsniveau und strikter Isolierung je Kunde.' }, { title: 'Präsenz in Kamerun & Deutschland', desc: 'Ein Team nah an seinen Kunden in Kamerun und ein technologischer Anker in Europa. Das Beste aus beiden Welten.' }], ctaT: 'Mehr über TAS erfahren?', ctaS: 'Lernen wir uns kennen: Wir zeigen Ihnen die Plattform und beantworten Ihre Fragen.' },
    resources: { eyebrow: 'Ressourcen', title: 'Alles, um die Plattform zu meistern.', sub: 'Dokumentation, Hilfe und Neuigkeiten. Wir erweitern diesen Bereich Version für Version — bis dahin ist unser Team für Sie da.', items: [{ id: 'documentation', title: 'Dokumentation', desc: 'Einführungsleitfäden, Modulkonfiguration und API-Referenz.', tag: 'In Arbeit' }, { id: 'faq', title: 'FAQ', desc: 'Antworten auf die häufigsten Fragen zu Plattform und Sicherheit.', tag: 'Bald' }, { id: 'blog', title: 'Blog', desc: 'Unsere Gedanken zu Digitalisierung, modernem ERP und Tech in Afrika.', tag: 'Bald' }, { id: 'aide', title: 'Hilfezentrum', desc: 'Support, Tutorials und Hilfe, um das Beste aus TAS zu holen.', tag: 'Bald' }, { id: 'actualites', title: 'Neuigkeiten', desc: 'Produkt-Updates, neue Module und Ankündigungen.', tag: 'Bald' }], ask: 'Eine Frage?', askSub: 'Schreiben Sie uns, wir antworten schnell.', ctaT: 'Die beste Ressource ist eine Demo.', ctaS: 'Sehen Sie die Plattform in Aktion — an Ihren eigenen Prozessen.' },
    careers: { eyebrow: 'Karriere', title: 'Bauen wir gemeinsam das ERP von morgen.', sub: 'Wir suchen Menschen, die echten Einfluss auf die Digitalisierung von Unternehmen wollen. Engineering, Produkt, Vertrieb, Support.', perksE: 'Warum zu uns', perksT: 'Ein ehrgeiziges Projekt, ein Team, das schnell vorankommt.', perks: [{ title: 'Echter Einfluss', desc: 'Sie bauen eine Plattform, die von echten Unternehmen genutzt wird — in einem sich schnell wandelnden Markt.' }, { title: 'Moderne Tech', desc: 'Cloud-Architektur, API, mandantenfähig, mobil. Wir programmieren sauber und liefern oft.' }, { title: 'Enges Team', desc: 'Kleines Team, viel Autonomie, schnelle Entscheidungen. Ihre Stimme zählt.' }, { title: 'Afrika + Europa', desc: 'Kamerunische Verwurzelung und europäischer Anspruch. Das Beste aus beidem.' }], spontT: 'Keine passende Stelle offen?', spontSub: 'Wir wachsen. Senden Sie uns eine Initiativbewerbung: Erzählen Sie von sich und was Sie bauen möchten.', spontBtn: 'Bewerbung senden', ctaT: 'Neugierig auf TAS vor der Bewerbung?', ctaS: 'Fragen Sie eine Demo an — der beste Weg zu verstehen, was wir bauen.' },
    contact: { eyebrow: 'Kontakt & Demo', title: 'Sehen Sie TAS an Ihren eigenen Prozessen.', sub: 'Buchen Sie eine Demo oder schreiben Sie uns. Wir konfigurieren die Plattform auf Ihren realen Anwendungsfall und melden uns binnen 24 h.', badge: 'Kostenlose Demo, unverbindlich', talkT: 'Sprechen wir über Ihr Projekt', talkSub: 'Wählen Sie den passenden Kanal — wir sind in Kamerun und Deutschland erreichbar.', loc: 'Standort', form: { name: 'Vollständiger Name', company: 'Unternehmen', email: 'E-Mail', phone: 'Telefon', sector: 'Branche', select: 'Auswählen…', other: 'Andere', need: 'Ihr Bedarf', needPh: 'Beschreiben Sie kurz Ihr Geschäft und Ihre Bedürfnisse…', consent: 'Ich bin einverstanden, von TAS zu meiner Anfrage kontaktiert zu werden.', send: 'Meine Demo anfragen', sending: 'Senden…', okT: 'Nachricht gesendet!', okS: 'Danke. Unser Team meldet sich binnen 24 h, um Ihre Demo zu vereinbaren.', err: 'Etwas ist schiefgelaufen. Versuchen Sie es erneut oder schreiben Sie uns direkt.', namePh: 'Ihr Name', companyPh: 'Ihr Unternehmen' } },
    footer: { tagline: 'Die modulare, konfigurierbare Plattform, die sich den Prozessen jedes Unternehmens anpasst.', cols: [{ title: 'Produkte', links: [{ label: 'TAS Platform', to: '/produits' }, { label: 'TAS Logistics', to: '/produits#logistics' }, { label: 'TAS People', to: '/produits#people' }, { label: 'Finance & CRM', to: '/produits#crm' }] }, { title: 'Lösungen', links: [{ label: 'Transport', to: '/solutions#transport' }, { label: 'Handel', to: '/solutions#commerce' }, { label: 'Gesundheit', to: '/solutions#sante' }, { label: 'Bildung', to: '/solutions#education' }] }, { title: 'Unternehmen', links: [{ label: 'Über uns', to: '/a-propos' }, { label: 'Karriere', to: '/carrieres' }, { label: 'Preise', to: '/tarifs' }, { label: 'Kontakt', to: '/contact' }] }, { title: 'Ressourcen', links: [{ label: 'Dokumentation', to: '/ressources#documentation' }, { label: 'FAQ', to: '/ressources#faq' }, { label: 'Blog', to: '/ressources#blog' }, { label: 'Hilfezentrum', to: '/ressources#aide' }] }], hosted: 'Hosting in Deutschland 🇩🇪', legal1: 'Impressum', legal2: 'Datenschutz', rights: 'Alle Rechte vorbehalten.' },
    notFound: { code: 'Fehler 404', title: 'Seite nicht gefunden', sub: 'Die gesuchte Seite existiert nicht oder wurde verschoben. Zurück auf den richtigen Weg.', home: 'Zur Startseite', contact: 'Kontakt' },
    ctaDefault: { title: 'Innovation im Dienst Ihrer Leistung.', sub: 'Buchen Sie eine Demo: Wir konfigurieren TAS auf Ihren realen Anwendungsfall — und Sie sehen den Nutzen live.' },
  },
}

/* ── Helpers d'accès aux données typées avec icônes ─────────────────── */
export function modulesList(c: Content) {
  return MOD_ORDER.map((id) => ({ id, icon: MOD_ICON[id], status: MOD_STATUS[id], ...c.modules[id] }))
}
export function enginesList(c: Content) {
  return c.engines.map((e, i) => ({ ...e, icon: ENG_ICON[i], soon: i === c.engines.length - 1 }))
}
export function sectorsList(c: Content) {
  return c.sectors.map((s, i) => ({ ...s, icon: SEC_ICON[i] }))
}
export function whyList(c: Content) {
  return c.why.map((w, i) => ({ ...w, icon: WHY_ICON[i] }))
}

/* ── Contexte de langue ─────────────────────────────────────────────── */
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'fr', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('tas-lang')) as Lang | null
    return saved && ['fr', 'en', 'de'].includes(saved) ? saved : 'fr'
  })
  const setLang = (l: Lang) => { setLangState(l); try { localStorage.setItem('tas-lang', l) } catch {} }
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export function useLang() { return useContext(LangCtx) }
export function useT(): Content { return TR[useLang().lang] }
