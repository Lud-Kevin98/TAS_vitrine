import {
  Truck, Users, ShoppingBag, HeartPulse, GraduationCap, UtensilsCrossed, Car,
  Contact2, Wallet, Boxes, Workflow, GitBranch, Zap, Layers, Plug, Sparkles,
  Building2, Factory, Stethoscope, Store, School, Briefcase,
  type LucideIcon,
} from 'lucide-react'

export const CONTACT = {
  email: 'contact@tas-platform.com',
  phone: '+237 6 57 08 69 84',
  whatsapp: '+237657086984',
  whatsapp2: '+4917629434276',
  location: 'Douala, Cameroun · Allemagne',
}

export const NAV: { label: string; to: string }[] = [
  { label: 'Produits', to: '/produits' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'Ressources', to: '/ressources' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Carrières', to: '/carrieres' },
  { label: 'Contact', to: '/contact' },
]

/** Socle technologique de la plateforme (page Produits + accueil « Pourquoi TAS »). */
export const ENGINES: { icon: LucideIcon; name: string; tag: string; desc: string; soon?: boolean }[] = [
  { icon: Layers, name: 'TAS Platform', tag: 'Le socle', desc: 'Une base ERP unique : mêmes données, mêmes rôles, mêmes règles pour tous vos modules.' },
  { icon: Workflow, name: 'Business Process Engine', tag: 'Processus', desc: 'Modélisez vos processus métier en machines à états configurables, sans écrire de code.' },
  { icon: GitBranch, name: 'Rules Engine', tag: 'Règles', desc: 'Des règles de gestion déclaratives qui s’adaptent à chaque entreprise et chaque contrat.' },
  { icon: Zap, name: 'Automation Engine', tag: 'Automatisation', desc: 'Déclencheurs et actions automatiques : notifications, transitions, tâches, intégrations.' },
  { icon: Building2, name: 'Multi-tenant', tag: 'Isolation', desc: 'Chaque client, ses données strictement isolées (Row-Level Security) et sa configuration propre.' },
  { icon: Plug, name: 'API ouverte', tag: 'Intégration', desc: 'API REST documentée, clés self-service et webhooks pour connecter votre écosystème.' },
  { icon: Sparkles, name: 'Intelligence Artificielle', tag: 'IA', desc: 'Assistance et analyse prédictive intégrées à la plateforme.', soon: true },
]

export type ModuleCard = {
  id: string; name: string; icon: LucideIcon; status: 'live' | 'beta' | 'soon';
  tagline: string; desc: string;
}

/** Modules métier activables. */
export const MODULES: ModuleCard[] = [
  { id: 'logistics', name: 'TAS Logistics', icon: Truck, status: 'live', tagline: 'Transport & colis', desc: 'Expéditions, tri, transit, livraison, suivi temps réel et flotte — de bout en bout.' },
  { id: 'people', name: 'TAS People', icon: Users, status: 'live', tagline: 'RH & paie', desc: 'Dossiers, présence, congés, contrats, paie OHADA/CNPS et documents RH.' },
  { id: 'retail', name: 'TAS Retail', icon: ShoppingBag, status: 'beta', tagline: 'Commerce & POS', desc: 'Point de vente, ventes, catalogue et encaissement multi-boutiques.' },
  { id: 'health', name: 'TAS Health', icon: HeartPulse, status: 'beta', tagline: 'Santé & pharma', desc: 'Officines, commandes, patients et distribution pharmaceutique.' },
  { id: 'school', name: 'TAS School', icon: GraduationCap, status: 'soon', tagline: 'Éducation', desc: 'Élèves, inscriptions, scolarité et suivi pédagogique.' },
  { id: 'food', name: 'TAS Food', icon: UtensilsCrossed, status: 'soon', tagline: 'Restauration', desc: 'Commandes, cuisine, stocks et service.' },
  { id: 'fleet', name: 'TAS Fleet', icon: Car, status: 'live', tagline: 'Flotte & véhicules', desc: 'Véhicules, entretien, carburant, documents et affectations.' },
  { id: 'crm', name: 'CRM', icon: Contact2, status: 'live', tagline: 'Relation client', desc: 'Prospects, opportunités, devis, contrats et relances commerciales.' },
  { id: 'finance', name: 'Finance', icon: Wallet, status: 'live', tagline: 'Finance & compta', desc: 'Facturation, caisse, comptabilité OHADA, tarification et recouvrement.' },
  { id: 'inventory', name: 'Inventory', icon: Boxes, status: 'live', tagline: 'Stocks & achats', desc: 'Articles, entrepôts, mouvements, inventaire et approvisionnements.' },
]

/** Les 4 modules mis en avant sur l’accueil. */
export const FEATURED = ['logistics', 'finance', 'people', 'inventory']

export const SECTORS: { icon: LucideIcon; name: string; to: string; modules: string; desc: string }[] = [
  { icon: Truck, name: 'Transport & Logistique', to: '/solutions#transport', modules: 'Logistics · Fleet · Finance', desc: 'Messagerie, fret, agences et flotte pilotés en temps réel.' },
  { icon: Store, name: 'Commerce & Distribution', to: '/solutions#commerce', modules: 'Retail · Inventory · CRM', desc: 'Ventes, stocks et clients unifiés, du magasin à la comptabilité.' },
  { icon: Factory, name: 'Industrie & Services', to: '/solutions#industrie', modules: 'Inventory · People · Finance', desc: 'Opérations, ressources et finance sur une même base.' },
  { icon: Stethoscope, name: 'Santé & Pharma', to: '/solutions#sante', modules: 'Health · Inventory · Finance', desc: 'Officines et distribution pharmaceutique conformes.' },
  { icon: School, name: 'Éducation', to: '/solutions#education', modules: 'School · People · Finance', desc: 'Établissements, scolarité et administration.' },
  { icon: Briefcase, name: 'Services aux entreprises', to: '/solutions#services', modules: 'CRM · People · Finance', desc: 'PME de services : clients, équipes et facturation.' },
]

export const WHY = [
  { icon: Workflow, title: 'Configurable, pas rigide', desc: 'Vos processus, vos règles, vos rôles — la plateforme s’adapte à votre entreprise, pas l’inverse.' },
  { icon: Layers, title: 'Modulaire & unifiée', desc: 'Activez les modules dont vous avez besoin. Une seule base, zéro double saisie, une vue à 360°.' },
  { icon: Building2, title: 'Cloud & multi-tenant', desc: 'Données strictement isolées par client, hébergement souverain en Allemagne, disponible partout.' },
  { icon: Sparkles, title: 'Moderne & évolutive', desc: 'Architecture cloud, API ouverte, app mobile terrain et IA à venir. Conçue pour durer.' },
]

export const STATS: { value: string; label: string }[] = [
  { value: '10+', label: 'Modules métier' },
  { value: '6', label: 'Secteurs couverts' },
  { value: '100%', label: 'Cloud & multi-tenant' },
  { value: '🇩🇪', label: 'Hébergement Allemagne' },
]

export const PRICING = [
  {
    name: 'Starter', price: 'Sur devis', highlight: false,
    tagline: 'Pour démarrer avec un module',
    features: ['1 module activé', 'Jusqu’à 5 utilisateurs', 'Données isolées & sécurisées', 'App mobile terrain', 'Support par e-mail'],
    cta: 'Demander un devis',
  },
  {
    name: 'Business', price: 'Sur devis', highlight: true,
    tagline: 'La plateforme, plusieurs modules',
    features: ['Modules multiples', 'Utilisateurs illimités', 'Rôles & permissions fins', 'Processus & règles configurables', 'API & webhooks', 'Support prioritaire'],
    cta: 'Demander une démo',
  },
  {
    name: 'Enterprise', price: 'Sur mesure', highlight: false,
    tagline: 'Grandes organisations & multi-sites',
    features: ['Multi-agences & consolidation', 'SLA & accompagnement dédié', 'Intégrations sur mesure', 'Config packs par secteur', 'Sécurité renforcée', 'Formation & onboarding'],
    cta: 'Parler à un expert',
  },
]

export const STATUS_LABEL: Record<ModuleCard['status'], string> = {
  live: 'Disponible', beta: 'En bêta', soon: 'Bientôt',
}
