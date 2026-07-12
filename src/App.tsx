import { useEffect, useState } from 'react'
import {
  Activity, AlertTriangle, ArrowRight, BarChart3, Building2, CheckCircle2, ChevronDown, Clock,
  DatabaseZap, FileText, Fingerprint, GraduationCap, HeartPulse, Headphones, History, KeyRound,
  LayoutGrid, Lock, Mail, MapPin, Menu, MessageCircle, Package, Phone, Puzzle, Quote, Search,
  ServerCrash, Settings2, Server, ShieldCheck, ShoppingBag, Sparkles, Star, TrendingDown, TrendingUp,
  Truck, Users, UtensilsCrossed, X, Zap,
} from 'lucide-react'

type Lang = 'fr' | 'en'
const LOGO = '/logo.png'
const APP_URL = 'https://app.tas-platform.com'   // ← à remplacer par l'URL réelle de l'app

type ModuleItem = { id: string; name: string; icon: React.ElementType; available: boolean; color: string; badge: string; tagline: string; desc: string; features: string[] }
type CardItem = { icon: React.ElementType; title: string; desc: string }

const contact = {
  email: 'contact@tas-platform.com',
  phone: '+49 176 71200287',
  whatsapp: '+49 176 29424376',
  location: 'Allemagne & Cameroun',
}

const content = {
  fr: {
    nav: ['Modules', 'Sécurité', 'Tarifs', 'FAQ', 'Contact'],
    cta: 'Demander une démo',
    heroLabel: 'Plateforme SaaS modulaire',
    heroTitle: 'Pilotez toute votre entreprise depuis une seule plateforme.',
    heroDesc: 'TAS digitalise vos opérations, vos données et vos décisions — logistique, commerce, école, restauration, santé — avec des modules activables à la carte, pensés pour l’Afrique.',
    heroPrimary: 'Demander une démo',
    heroSecondary: 'Voir les tarifs',
    trackLabel: 'Suivez un colis en direct',
    trackPlaceholder: 'Entrez votre code de suivi…',
    trackBtn: 'Suivre',
    heroStats: [['5', 'Secteurs'], ['Live', 'TAS Logistics'], ['24h', 'Réponse garantie']],
    trustedBy: 'Ils digitalisent déjà avec TAS',
    dashboardTitle: 'TAS · Tableau de bord',
    kpis: [['Colis livrés', '1 284', '+12% ce mois'], ['CA du mois', '4,2M XAF', '+8% vs N-1'], ['Clients actifs', '347', '+23 nouveaux']],
    activity: 'Activité mensuelle', latest: 'Derniers colis', available: 'Disponible', availableNow: 'Disponible maintenant', soon: 'Bientôt disponible', multiSector: 'Multi-sectoriels',
    problemLabel: 'Les défis terrain',
    problemTitle: 'Vos outils actuels vous freinent',
    problemDesc: 'Registres papier, Excel éparpillé, WhatsApp : des données dispersées, peu fiables et impossibles à consolider.',
    problems: [
      ['Processus 100% manuels', "Registres papier, Excel non synchronisé, saisies en double. Chaque erreur coûte du temps et de l'argent."],
      ['Aucun suivi en temps réel', 'Impossible de savoir où en est une livraison, un stock ou une opération sans appeler directement.'],
      ['Pertes et silotage des données', 'Données éparpillées sur WhatsApp, cahiers, Excel. Aucune traçabilité, aucun historique fiable.'],
      ['Visibilité financière floue', 'Difficile de savoir exactement ce qui rentre, ce qui sort et quelle est la rentabilité réelle.'],
      ['Multi-agences ingérable', 'Chaque site fonctionne en silo. Impossible de consolider et de piloter à distance.'],
      ['Outils non adaptés à l’Afrique', 'Solutions occidentales trop complexes, trop chères, sans support local ni ancrage terrain.'],
    ],
    solutionLabel: 'La solution TAS',
    solutionTitle: 'Une plateforme unique, des modules adaptés à chaque secteur',
    solutionDesc: 'Activez uniquement les modules nécessaires, avec des données centralisées, des rôles précis et des rapports exploitables.',
    solutions: [
      ['Modules sectoriels', 'Activez seulement ce dont vous avez besoin. Payez uniquement pour ce que vous utilisez.'],
      ['Multi-utilisateurs', 'Gérez toute votre équipe avec des accès personnalisés et des rôles précis.'],
      ['Multi-agences', 'Plusieurs sites, un seul tableau de bord. Vue consolidée de toutes vos opérations.'],
      ['Rôles & permissions', 'Chaque collaborateur voit exactement ce dont il a besoin, rien de plus.'],
      ['Rapports & exports', 'Tableaux de bord analytiques, exports CSV et PDF pour votre comptabilité.'],
      ['Données centralisées', 'Toutes vos données au même endroit, sécurisées, accessibles depuis n’importe où.'],
    ],
    modulesLabel: 'Modules sectoriels',
    modulesTitle: 'Choisissez votre module, démarrez immédiatement',
    modulesDesc: "Des modules spécialisés par secteur, complets et autonomes, qui s'intègrent entre eux.",
    modules: [
      { id: 'logistics', name: 'TAS Logistics', icon: Truck, available: true, color: 'blue', badge: 'Live', tagline: 'Transport, Colis & Agences', desc: "Gérez vos expéditions, votre réseau d'agences, vos chauffeurs et vos clients B2B dans une solution logistique complète et moderne.", features: ['Gestion des colis & envois', 'Tracking public en temps réel', 'Réseau d’agences multi-sites', 'Chauffeurs, véhicules & GPS', 'Clients B2B & facturation', 'Bordereaux PDF automatiques', 'Comptabilité & exports CSV', 'Journal d’audit complet'] },
      { id: 'health', name: 'TAS Health', icon: HeartPulse, available: false, color: 'rose', badge: 'Soon', tagline: 'Pharmacie & Santé', desc: 'App mobile pour commander des médicaments (ordonnance, devis, livraison) + back-office officine. Cliniques, pharmacies et cabinets.', features: ['App client (commande + ordonnance)', 'Devis & validation en ligne', 'Paiement à la livraison', 'Officine / back-office', 'Stocks médicaux', 'Suivi des commandes'] },
      { id: 'retail', name: 'TAS Retail', icon: ShoppingBag, available: false, color: 'emerald', badge: 'Soon', tagline: 'Commerce & Distribution', desc: 'Pilotez boutiques, stocks, ventes et caisse. Conçu pour les commerces, quincailleries et distributeurs africains.', features: ['Stocks multi-entrepôts', 'Point de vente', 'Gestion fournisseurs', 'Codes-barres & étiquettes', 'Inventaires', 'Rapports de ventes'] },
      { id: 'school', name: 'TAS School', icon: GraduationCap, available: false, color: 'violet', badge: 'Soon', tagline: 'Gestion Scolaire', desc: 'Plateforme complète : élèves, classes, notes, présences et paiements de scolarité centralisés.', features: ['Dossiers élèves', 'Classes & emplois du temps', 'Notes & bulletins', 'Suivi des présences', 'Paiements de scolarité', 'Communication école-parents'] },
      { id: 'food', name: 'TAS Food', icon: UtensilsCrossed, available: false, color: 'orange', badge: 'Soon', tagline: 'Restauration & Caisse', desc: 'Système de gestion pour restaurants, fast-foods et hôtels. Commandes, tables, menus et caisse digitale.', features: ['Tables & commandes', 'Menus dynamiques', 'Caisse & encaissement', 'Stocks cuisine', 'Planning personnel', 'Rapports quotidiens'] },
    ] as ModuleItem[],
    logisticsLabel: 'TAS Logistics · Focus',
    logisticsTitle: 'La solution complète pour la logistique africaine',
    logisticsDesc: "De la réception du colis à la livraison finale : traçabilité complète, app mobile chauffeur et comptabilité intégrée.",
    logisticsFeatures: ['Colis traçables de bout en bout avec code de suivi', 'Tracking public accessible sans compte client', 'Gestion complète multi-agences & multi-entreprises', 'Chauffeurs, tournées, GPS et livraisons assignées', 'Clients B2B avec facturation mensuelle consolidée', 'Bordereaux, reçus et décharges en PDF automatique', 'Comptabilité par agence avec export CSV mensuel', 'Journal d’audit complet de toutes les actions'],
    logisticsCta1: 'Démarrer avec TAS Logistics', logisticsCta2: 'Voir une démo live',
    securityLabel: 'Sécurité & confiance',
    securityTitle: 'Vos données isolées, chiffrées, traçables',
    securityDesc: "La sécurité n'est pas une option : chaque entreprise est strictement cloisonnée, et tout est journalisé.",
    security: [
      ['Isolation stricte par client', "Chaque entreprise ne voit QUE ses données (Row-Level Security). Aucun tenant n'accède à celles d'un autre."],
      ['Chiffrement des données sensibles', 'Mots de passe et connexions chiffrés. Échanges en HTTPS de bout en bout.'],
      ['Base de données dédiée (option)', 'Hébergez vos données sur une base à part — la vôtre ou la nôtre — pour un cloisonnement physique.'],
      ['Rôles & permissions fins', 'Chaque collaborateur n’accède qu’à son périmètre (ville, agence, ses propres données).'],
      ['Journal d’audit complet', 'Qui a fait quoi, quand. Chaque action critique est tracée et conservée.'],
      ['Sauvegardes régulières', 'Vos données sauvegardées et restaurables. Continuité assurée.'],
    ],
    pricingLabel: 'Tarifs',
    pricingTitle: 'Un prix simple, qui grandit avec vous',
    pricingDesc: 'Commencez petit, ajoutez des modules et des agences à votre rythme. Sans engagement caché.',
    billMonthly: 'Mensuel', billAnnual: 'Annuel', annualNote: '2 mois offerts', perMonth: 'XAF / mois', billedAnnual: 'facturé annuellement',
    plans: [
      { id: 'starter', name: 'Starter', tagline: 'TPE & démarrage', m: '25 000', y: '21 000', popular: false, cta: 'Choisir Starter', features: ['1 module au choix', '1 agence', "Jusqu'à 3 utilisateurs", 'Base mutualisée + sous-domaine TAS', 'Suivi public & PDF', 'Support par e-mail'] },
      { id: 'business', name: 'Business', tagline: 'PME multi-sites', m: '80 000', y: '67 000', popular: true, cta: 'Choisir Business', features: ['1 module', 'Agences illimitées', "Jusqu'à 15 utilisateurs", 'Tous les rapports & exports', 'RBAC complet (rôles & portée)', 'App mobile (chauffeur/terrain)', 'Support prioritaire'] },
      { id: 'pro', name: 'Pro', tagline: 'Entreprises établies', m: '200 000', y: '167 000', popular: false, cta: 'Choisir Pro', features: ['1 module', 'Utilisateurs illimités', 'Base de données dédiée', 'Domaine / sous-domaine personnalisé', 'Notifications SMS', 'Onboarding + formation', 'SLA & support dédié'] },
    ],
    enterprise: { name: 'Enterprise', tagline: 'Groupes & multi-modules', price: 'Sur devis', cta: 'Nous contacter', features: ['Plusieurs modules', 'Intégrations sur-mesure', 'Hébergement dédié (chez vous ou chez nous)', 'Accompagnement & SLA renforcé'] },
    addonsTitle: 'Options & extensions',
    addons: [
      ['Module supplémentaire', '+50% du plan'],
      ['Base de données dédiée', '+50 000 XAF/mois'],
      ['Domaine personnalisé', '+15 000 XAF/mois'],
      ['Pack SMS / notifications', "à l'usage"],
      ['Formation & reprise de données', 'forfait unique'],
      ['Support Premium 24/7', 'sur devis'],
    ],
    pricingFoot: 'Paiement par Mobile Money (OM/MoMo) ou carte. Prix HT, indicatifs — ajustés selon votre volume.',
    testiLabel: 'Témoignages',
    testiTitle: 'Ce que disent les premières entreprises',
    testimonials: [
      ['Avant TAS, on suivait les colis dans des cahiers. Aujourd’hui tout est tracé et nos clients suivent en ligne.', 'Responsable d’exploitation', 'Société de transport · Douala'],
      ['Le multi-agences a tout changé : je pilote mes 3 sites depuis un seul tableau de bord.', 'Directrice', 'Réseau de distribution · Yaoundé'],
      ['L’équipe TAS comprend le terrain africain. Déploiement rapide, support réactif.', 'Gérant', 'PME logistique · Cameroun'],
    ],
    consultingLabel: 'TAS Consulting',
    consultingTitle: 'Des services de conseil pour transformer vos processus, même sans plateforme',
    consultingDesc: 'TAS accompagne aussi les entreprises qui veulent d’abord optimiser leurs opérations, mieux exploiter leurs données ou automatiser leurs tâches.',
    consultingItems: [
      ['Optimisation des processus', 'Cartographier, simplifier et améliorer les processus internes pour réduire les lenteurs, doublons et pertes.'],
      ['Gestion de données & reporting', 'Structurer vos données, créer des tableaux de bord et produire des rapports fiables.'],
      ['Automatisation opérationnelle', 'Automatiser les tâches répétitives pour gagner du temps et fiabiliser les opérations.'],
    ],
    consultingCta: 'Discuter avec un consultant',
    valueLabel: 'Notre plus-value',
    valueTitle: 'Une plateforme pensée pour le terrain africain',
    values: [
      ['Adapté à l’Afrique', 'Conçu pour les réalités africaines : connectivité, devises locales, pratiques métier.'],
      ['Solution flexible', 'Activez les modules utiles. Évoluez à votre rythme, sans contrainte.'],
      ['Données sécurisées', 'Données centralisées, chiffrées, sauvegardées. Accessibles partout.'],
      ['Zéro erreur manuelle', 'Les processus digitaux éliminent les fautes de saisie et les pertes.'],
      ['Traçabilité totale', 'Chaque opération enregistrée. Retrouvez n’importe quelle transaction.'],
      ['Vision financière claire', 'Tableaux de bord, rapports automatiques, exports pour piloter.'],
      ['Productivité boostée', 'Automatisez les tâches répétitives. Concentrez-vous sur la valeur.'],
      ['Accompagnement local', 'Une équipe en Afrique qui comprend vos enjeux et vous suit dans la durée.'],
    ],
    missionLabel: 'Mission & vision',
    missionTitle: 'Accompagner la transformation digitale des entreprises africaines',
    missionQuote: 'Accompagner la transformation digitale des entreprises africaines avec des solutions simples, puissantes et adaptées à leurs réalités opérationnelles.',
    vision: 'Devenir une référence SaaS/ERP modulaire en Afrique.',
    howLabel: 'Comment ça marche',
    howTitle: 'Un déploiement accompagné, étape par étape',
    howSteps: [
      ['Diagnostic', 'Nous analysons vos processus, défis et objectifs pour proposer la configuration idéale.'],
      ['Choix du module', 'Sélectionnez le module adapté à votre secteur. Commencez par un, ajoutez les autres ensuite.'],
      ['Configuration', 'Paramétrage de votre espace : agences, utilisateurs, produits, tarifs.'],
      ['Création des accès', 'Ajoutez vos collaborateurs avec leurs rôles et permissions.'],
      ['Formation & mise en prod', 'Formation de vos équipes et démarrage accompagné, sans friction.'],
      ['Suivi continu', 'Support réactif, mises à jour régulières, évolution selon vos retours.'],
    ],
    faqLabel: 'Questions fréquentes',
    faqTitle: 'Tout ce que vous devez savoir',
    faqs: [
      ['En combien de temps puis-je démarrer ?', 'Selon le module et votre organisation, le démarrage prend de quelques jours à deux semaines : configuration, création des accès, formation, puis mise en production accompagnée.'],
      ['Mes données sont-elles isolées et sécurisées ?', "Oui. Chaque entreprise est strictement cloisonnée (Row-Level Security) : aucun client ne voit les données d'un autre. Données chiffrées, journal d'audit, sauvegardes, et base de données dédiée en option."],
      ['Puis-je changer de plan ou ajouter des modules ?', "Oui, à tout moment. Vous commencez par un plan/module et vous montez en gamme ou activez d'autres modules selon vos besoins."],
      ['Est-ce que ça marche avec une connexion faible ?', "La plateforme est optimisée pour le terrain africain. L'app mobile fonctionne sur smartphone ; le suivi public est léger et accessible sans compte."],
      ['Quels moyens de paiement acceptez-vous ?', 'Mobile Money (Orange Money, MTN MoMo), virement et carte. Facturation mensuelle ou annuelle (2 mois offerts en annuel).'],
      ['Y a-t-il un engagement ?', "Pas d'engagement caché. Vous pouvez démarrer avec une démo gratuite, puis choisir le mensuel ou l'annuel."],
    ],
    demoLabel: 'Démonstration',
    demoTitle: 'Voyez TAS en action, gratuitement',
    demoDesc: 'Remplissez ce formulaire : notre équipe vous contacte sous 24h pour une démonstration personnalisée.',
    demoPerks: ['Démo personnalisée', 'Sans engagement', 'Accompagnement local'],
    form: { name: 'Nom complet', company: 'Entreprise', sector: 'Secteur', phone: 'Téléphone', email: 'Email', message: 'Message', submit: 'Envoyer la demande', sending: 'Envoi…', sent: 'Merci ! Votre demande a bien été envoyée. Nous vous recontactons rapidement.', error: 'Envoi impossible pour le moment. Réessayez ou contactez-nous par e-mail/WhatsApp.' },
    sectors: ['Logistique / Transport', 'Commerce / Distribution', 'Éducation', 'Restauration / Hôtellerie', 'Santé / Pharmacie', 'Conseil / Optimisation', 'Autre'],
    contactLabel: 'Contact', contactTitle: 'Parlons de votre projet',
    contactDesc: 'Notre équipe répond à vos questions, organise une démo ou discute de vos besoins spécifiques.',
    footerDesc: 'La plateforme SaaS modulaire pour digitaliser les entreprises africaines. Logistique, commerce, éducation, restauration, santé et consulting.',
    rights: 'Tous droits réservés.', made: 'Fait avec ❤️ en Afrique', ready: 'Prêt à démarrer ?', response: 'Réponse garantie sous 24h',
    legal: ['Mentions légales', 'Confidentialité', 'CGU'],
  },
  en: {} as any,
}

// --- Version anglaise (mêmes structures) ---
content.en = {
  nav: ['Modules', 'Security', 'Pricing', 'FAQ', 'Contact'],
  cta: 'Request a demo',
  heroLabel: 'Modular SaaS platform',
  heroTitle: 'Run your entire business from a single platform.',
  heroDesc: 'TAS digitizes your operations, data and decisions — logistics, retail, school, food, health — with modules you activate on demand, built for Africa.',
  heroPrimary: 'Request a demo', heroSecondary: 'See pricing',
  trackLabel: 'Track a parcel live', trackPlaceholder: 'Enter your tracking code…', trackBtn: 'Track',
  heroStats: [['5', 'Sectors'], ['Live', 'TAS Logistics'], ['24h', 'Guaranteed reply']],
  trustedBy: 'Already digitizing with TAS',
  dashboardTitle: 'TAS · Dashboard',
  kpis: [['Delivered parcels', '1,284', '+12% this month'], ['Monthly revenue', '4.2M XAF', '+8% YoY'], ['Active clients', '347', '+23 new']],
  activity: 'Monthly activity', latest: 'Latest shipments', available: 'Available', availableNow: 'Available now', soon: 'Coming soon', multiSector: 'Multi-sector',
  problemLabel: 'Field challenges', problemTitle: 'Your current tools are slowing you down',
  problemDesc: 'Paper logs, scattered Excel, WhatsApp: data that is dispersed, unreliable and impossible to consolidate.',
  problems: content.fr.problems.map((_, i) => [
    ['Fully manual processes', 'Paper logs, unsynchronized Excel and duplicate entries. Every mistake costs time and money.'],
    ['No real-time tracking', 'Impossible to know the status of a delivery, stock or operation without calling someone.'],
    ['Data loss and silos', 'Data spread across WhatsApp, notebooks and Excel. No traceability, no reliable history.'],
    ['Unclear financial visibility', 'Hard to know exactly what comes in, what goes out and what is truly profitable.'],
    ['Multi-branch complexity', 'Each site works in isolation. Consolidation and remote management become difficult.'],
    ['Tools not built for Africa', 'Western solutions are often too complex, too expensive, with poor local support.'],
  ][i]),
  solutionLabel: 'The TAS solution', solutionTitle: 'One platform, modules adapted to every sector',
  solutionDesc: 'Activate only the modules you need, with centralized data, precise roles and actionable reporting.',
  solutions: [
    ['Sector modules', 'Activate only what you need. Pay only for what you use.'],
    ['Multi-user access', 'Manage your whole team with customized access and precise roles.'],
    ['Multi-branch', 'Several sites, one dashboard. A consolidated view of all operations.'],
    ['Roles & permissions', 'Each employee sees exactly what they need, nothing more.'],
    ['Reports & exports', 'Analytical dashboards, CSV and PDF exports for accounting.'],
    ['Centralized data', 'All your data in one secure place, accessible from anywhere.'],
  ],
  modulesLabel: 'Sector modules', modulesTitle: 'Choose your module and start immediately',
  modulesDesc: 'Specialized modules by sector, complete and autonomous, that integrate with each other.',
  modules: content.fr.modules.map((m, i) => ({ ...m, ...[
    { tagline: 'Transport, Parcels & Branches', desc: 'Manage shipments, branches, drivers and B2B clients in a complete, modern logistics solution.', features: ['Shipments management', 'Real-time public tracking', 'Multi-site branch network', 'Drivers, vehicles & GPS', 'B2B clients & billing', 'Automatic PDF waybills', 'Accounting & CSV exports', 'Full audit trail'] },
    { tagline: 'Pharmacy & Health', desc: 'Mobile app to order medicine (prescription, quote, delivery) + pharmacy back-office. Clinics and practices.', features: ['Customer app (order + prescription)', 'Online quote & approval', 'Pay on delivery', 'Pharmacy back-office', 'Medical stock', 'Order tracking'] },
    { tagline: 'Retail & Distribution', desc: 'Run shops, stock, sales and checkout. Built for stores, hardware businesses and African distributors.', features: ['Multi-warehouse stock', 'Point of sale', 'Supplier management', 'Barcodes & labels', 'Inventory', 'Sales reports'] },
    { tagline: 'School Management', desc: 'A complete platform: students, classes, grades, attendance and fee payments centralized.', features: ['Student records', 'Classes & schedules', 'Grades & report cards', 'Attendance', 'Fee payments', 'School-parent communication'] },
    { tagline: 'Restaurants & Checkout', desc: 'Management system for restaurants, fast-food and hotels. Orders, tables, menus and checkout.', features: ['Tables & orders', 'Dynamic menus', 'Checkout', 'Kitchen stock', 'Staff planning', 'Daily reports'] },
  ][i] })) as ModuleItem[],
  logisticsLabel: 'TAS Logistics · Focus', logisticsTitle: 'A complete solution for African logistics',
  logisticsDesc: 'From parcel reception to final delivery: full traceability, driver mobile app and integrated accounting.',
  logisticsFeatures: ['End-to-end trackable shipments with unique codes', 'Public tracking without a client account', 'Complete multi-branch & multi-company management', 'Drivers, routes, GPS and assigned deliveries', 'B2B clients with consolidated monthly billing', 'Automatic PDF waybills, receipts and discharge forms', 'Branch accounting with monthly CSV exports', 'Full audit trail of all actions'],
  logisticsCta1: 'Start with TAS Logistics', logisticsCta2: 'See a live demo',
  securityLabel: 'Security & trust', securityTitle: 'Your data isolated, encrypted, traceable',
  securityDesc: "Security isn't optional: every company is strictly partitioned, and everything is logged.",
  security: [
    ['Strict per-client isolation', "Each company sees ONLY its data (Row-Level Security). No tenant accesses another's."],
    ['Sensitive data encryption', 'Passwords and connections encrypted. End-to-end HTTPS.'],
    ['Dedicated database (option)', 'Host your data on a separate database — yours or ours — for physical isolation.'],
    ['Fine-grained permissions', 'Each user accesses only their scope (city, branch, own data).'],
    ['Full audit trail', 'Who did what, when. Every critical action is logged and kept.'],
    ['Regular backups', 'Your data backed up and restorable. Continuity guaranteed.'],
  ],
  pricingLabel: 'Pricing', pricingTitle: 'Simple pricing that grows with you',
  pricingDesc: 'Start small, add modules and branches at your pace. No hidden commitment.',
  billMonthly: 'Monthly', billAnnual: 'Annual', annualNote: '2 months free', perMonth: 'XAF / month', billedAnnual: 'billed annually',
  plans: [
    { id: 'starter', name: 'Starter', tagline: 'Small businesses', m: '25 000', y: '21 000', popular: false, cta: 'Choose Starter', features: ['1 module of your choice', '1 branch', 'Up to 3 users', 'Shared database + TAS subdomain', 'Public tracking & PDF', 'Email support'] },
    { id: 'business', name: 'Business', tagline: 'Multi-site SMEs', m: '80 000', y: '67 000', popular: true, cta: 'Choose Business', features: ['1 module', 'Unlimited branches', 'Up to 15 users', 'All reports & exports', 'Full RBAC (roles & scope)', 'Mobile app (driver/field)', 'Priority support'] },
    { id: 'pro', name: 'Pro', tagline: 'Established companies', m: '200 000', y: '167 000', popular: false, cta: 'Choose Pro', features: ['1 module', 'Unlimited users', 'Dedicated database', 'Custom domain / subdomain', 'SMS notifications', 'Onboarding + training', 'SLA & dedicated support'] },
  ],
  enterprise: { name: 'Enterprise', tagline: 'Groups & multi-module', price: 'Custom', cta: 'Contact us', features: ['Multiple modules', 'Custom integrations', 'Dedicated hosting (yours or ours)', 'Enhanced SLA & support'] },
  addonsTitle: 'Add-ons & extensions',
  addons: [['Extra module', '+50% of plan'], ['Dedicated database', '+50,000 XAF/mo'], ['Custom domain', '+15,000 XAF/mo'], ['SMS / notifications pack', 'pay as you go'], ['Training & data migration', 'one-time fee'], ['Premium 24/7 support', 'custom']],
  pricingFoot: 'Pay by Mobile Money (OM/MoMo) or card. Indicative prices, excl. tax — adjusted to your volume.',
  testiLabel: 'Testimonials', testiTitle: 'What early companies say',
  testimonials: [
    ['Before TAS we tracked parcels in notebooks. Now everything is traceable and clients track online.', 'Operations Manager', 'Transport company · Douala'],
    ['Multi-branch changed everything: I run my 3 sites from one dashboard.', 'Director', 'Distribution network · Yaoundé'],
    ['The TAS team understands the African field. Fast rollout, responsive support.', 'Manager', 'Logistics SME · Cameroon'],
  ],
  consultingLabel: 'TAS Consulting', consultingTitle: 'Consulting to improve your processes, even without the platform',
  consultingDesc: 'TAS also supports organizations that first want to optimize operations, better use data or automate tasks.',
  consultingItems: [
    ['Process optimization', 'Map, simplify and improve internal processes to reduce delays, duplicates and losses.'],
    ['Data management & reporting', 'Structure your data, build dashboards and produce reliable reports.'],
    ['Operational automation', 'Automate repetitive tasks to save time and improve reliability.'],
  ],
  consultingCta: 'Talk to a consultant',
  valueLabel: 'Our added value', valueTitle: 'A platform built for the African field reality',
  values: [
    ['Built for Africa', 'Designed for African realities: connectivity, local currencies, business practices.'],
    ['Flexible solution', 'Activate useful modules. Grow at your own pace.'],
    ['Secure data', 'Centralized, encrypted, backed-up data. Available everywhere.'],
    ['Fewer manual errors', 'Digital processes reduce entry mistakes and losses.'],
    ['Full traceability', 'Every operation recorded. Find any transaction quickly.'],
    ['Clear financial visibility', 'Dashboards, automated reports and exports.'],
    ['Boosted productivity', 'Automate repetitive work. Focus on value.'],
    ['Local support', 'A team in Africa that understands your challenges.'],
  ],
  missionLabel: 'Mission & vision', missionTitle: 'Supporting African companies in their digital transformation',
  missionQuote: 'Support African companies in their digital transformation with simple, powerful solutions adapted to their operational realities.',
  vision: 'Become a reference modular SaaS/ERP platform in Africa.',
  howLabel: 'How it works', howTitle: 'A supported rollout, step by step',
  howSteps: [
    ['Diagnosis', 'We analyze your processes, challenges and goals to recommend the right setup.'],
    ['Module selection', 'Choose the module for your sector. Start with one and add others.'],
    ['Configuration', 'Set up your workspace: branches, users, products and tariffs.'],
    ['Access creation', 'Add collaborators with roles and permissions.'],
    ['Training & launch', 'Train your teams and launch smoothly.'],
    ['Continuous support', 'Responsive support, regular updates and improvements.'],
  ],
  faqLabel: 'FAQ', faqTitle: 'Everything you need to know',
  faqs: [
    ['How fast can I start?', 'Depending on the module and your organization, going live takes a few days to two weeks: setup, access creation, training, then a supported launch.'],
    ['Is my data isolated and secure?', "Yes. Every company is strictly partitioned (Row-Level Security): no client sees another's data. Encrypted data, audit trail, backups, and an optional dedicated database."],
    ['Can I change plan or add modules?', 'Yes, anytime. Start with one plan/module and upgrade or activate other modules as you grow.'],
    ['Does it work on a weak connection?', 'The platform is optimized for the African field. The mobile app runs on smartphones; public tracking is light and account-free.'],
    ['Which payment methods do you accept?', 'Mobile Money (Orange Money, MTN MoMo), bank transfer and card. Monthly or annual billing (2 months free on annual).'],
    ['Is there a commitment?', 'No hidden commitment. Start with a free demo, then choose monthly or annual.'],
  ],
  demoLabel: 'Demo', demoTitle: 'See TAS in action, for free',
  demoDesc: 'Fill in the form: our team contacts you within 24h for a personalized demo.',
  demoPerks: ['Personalized demo', 'No commitment', 'Local support'],
  form: { name: 'Full name', company: 'Company', sector: 'Sector', phone: 'Phone', email: 'Email', message: 'Message', submit: 'Send request', sending: 'Sending…', sent: 'Thank you! Your request has been sent. We\'ll get back to you shortly.', error: 'Could not send right now. Please retry or reach us by email/WhatsApp.' },
  sectors: ['Logistics / Transport', 'Retail / Distribution', 'Education', 'Food / Hospitality', 'Health / Pharmacy', 'Consulting / Optimization', 'Other'],
  contactLabel: 'Contact', contactTitle: 'Let’s talk about your project',
  contactDesc: 'Our team answers your questions, organizes a demo or discusses your specific needs.',
  footerDesc: 'The modular SaaS platform to digitize African companies. Logistics, retail, education, food, health and consulting.',
  rights: 'All rights reserved.', made: 'Made with ❤️ in Africa', ready: 'Ready to start?', response: 'Guaranteed reply within 24h',
  legal: ['Legal notice', 'Privacy', 'Terms'],
}

const problemIcons = [FileText, Search, ServerCrash, TrendingDown, Building2, AlertTriangle]
const solutionIcons = [LayoutGrid, Users, Building2, ShieldCheck, BarChart3, DatabaseZap]
const securityIcons = [Fingerprint, Lock, Server, KeyRound, History, DatabaseZap]
const valueIcons = [MapPin, Puzzle, Lock, AlertTriangle, Search, TrendingUp, Zap, Headphones]
const consultingIcons = [Settings2, BarChart3, Sparkles]
const details = [Package, MapPin, Building2, Truck, Users, FileText, BarChart3, Activity]
const navIds = ['modules', 'securite', 'pricing', 'faq', 'contact']

function Label({ children }: { children: React.ReactNode }) { return <span className="section-label">{children}</span> }
function Logo({ className = 'h-11' }: { className?: string }) { return <img src={LOGO} alt="TAS" className={`${className} w-auto select-none`} draggable={false} /> }

function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false)
  const t = content[lang]
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[76px]">
          <a href="#hero" className="flex items-center" onClick={() => setOpen(false)}><Logo className="h-12 sm:h-14" /></a>
          <nav className="hidden lg:flex items-center gap-1">
            {t.nav.map((label: string, i: number) => (
              <a key={label} href={`#${navIds[i]}`} className="px-3.5 py-2 rounded-lg text-[15px] font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all">{label}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <div className="inline-flex rounded-xl bg-slate-100 p-1">
              <button onClick={() => setLang('fr')} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${lang === 'fr' ? 'bg-white text-blue-700 shadow-soft' : 'text-slate-500 hover:text-slate-700'}`}>FR</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${lang === 'en' ? 'bg-white text-blue-700 shadow-soft' : 'text-slate-500 hover:text-slate-700'}`}>EN</button>
            </div>
            <a href="#demo" className="btn-primary px-5 py-2.5">{t.cta}</a>
          </div>
          <button className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-700" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[620px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
          <div className="pt-3 border-t border-slate-100 space-y-1">
            {t.nav.map((label: string, i: number) => <a key={label} href={`#${navIds[i]}`} className="block px-3 py-3 rounded-xl text-slate-700 hover:bg-blue-50" onClick={() => setOpen(false)}>{label}</a>)}
            <div className="flex gap-2 pt-3">
              <button onClick={() => setLang('fr')} className={`flex-1 px-3 py-2 rounded-xl text-sm font-bold ${lang === 'fr' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>FR</button>
              <button onClick={() => setLang('en')} className={`flex-1 px-3 py-2 rounded-xl text-sm font-bold ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>EN</button>
            </div>
            <a href="#demo" className="btn-primary w-full mt-3 py-3" onClick={() => setOpen(false)}>{t.cta}</a>
          </div>
        </div>
      </div>
    </header>
  )
}

function TrackWidget({ t }: { t: any }) {
  const [code, setCode] = useState('')
  const go = (e: React.FormEvent) => { e.preventDefault(); if (code.trim()) window.open(`${APP_URL}/track/${encodeURIComponent(code.trim())}`, '_blank') }
  return (
    <form onSubmit={go} className="bg-white rounded-2xl shadow-medium border border-slate-100 p-2 flex items-center gap-2 max-w-md">
      <div className="pl-3 text-blue-600"><Search size={18} /></div>
      <input className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400 py-2.5" placeholder={t.trackPlaceholder} value={code} onChange={(e) => setCode(e.target.value)} />
      <button type="submit" className="btn-primary px-4 py-2.5 text-sm shrink-0">{t.trackBtn}</button>
    </form>
  )
}

function Hero({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-b from-mist via-white to-white overflow-hidden">
      <div className="blob w-[540px] h-[540px] -top-40 -right-24 bg-blue-200/70" />
      <div className="blob w-[420px] h-[420px] top-44 -left-32 bg-cyan-200/60" />
      <div className="absolute inset-0 bg-grid bg-grid opacity-40 pointer-events-none [mask-image:radial-gradient(70%_55%_at_50%_0%,#000,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7 max-w-xl animate-fade-up">
            <Label><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-ring" />{t.heroLabel}</Label>
            <h1 className="font-display font-bold text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-balance text-navy-900">{t.heroTitle.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{t.heroTitle.split(' ').slice(-1)}</span></h1>
            <p className="font-body text-lg text-slate-500 leading-relaxed">{t.heroDesc}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a href="#demo" className="btn-primary py-4 px-7 text-[15px]">{t.heroPrimary}<ArrowRight size={18} /></a>
              <a href="#pricing" className="btn-outline py-4 px-7 text-[15px]">{t.heroSecondary}</a>
            </div>
            <div className="pt-2"><p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">{t.trackLabel}</p><TrackWidget t={t} /></div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {t.heroStats.map(([n, l]: string[]) => (
                <div key={l} className="glass rounded-2xl p-4 shadow-soft hover:shadow-medium transition-all"><p className="font-display font-bold text-2xl gradient-text">{n}</p><p className="text-xs text-slate-500 mt-1">{l}</p></div>
              ))}
            </div>
          </div>
          <DashMockup t={t} lang={lang} />
        </div>
      </div>
    </section>
  )
}

function DashMockup({ t, lang }: { t: any; lang: Lang }) {
  return (
    <div className="relative w-full max-w-[540px] mx-auto lg:mx-0 animate-fade-up delay-300">
      <div className="bg-white rounded-3xl shadow-strong border border-slate-200 overflow-hidden">
        <div className="bg-blue-600 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5"><div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center"><Zap size={12} className="text-white" /></div><span className="font-display font-semibold text-white text-[13px]">{t.dashboardTitle}</span></div>
          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-emerald-400" /></div>
        </div>
        <div className="p-4 space-y-4 bg-slate-50">
          <div className="grid grid-cols-3 gap-3">
            {[Package, TrendingUp, Users].map((Icon, i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-slate-100 shadow-soft"><div className="w-7 h-7 rounded-lg mb-2 bg-blue-100 flex items-center justify-center"><Icon size={13} className="text-blue-600" /></div><p className="font-display font-bold text-slate-900 text-[15px] leading-tight">{t.kpis[i][1]}</p><p className="text-[10px] text-slate-500 mt-0.5">{t.kpis[i][0]}</p><p className="text-[10px] text-emerald-600 font-semibold mt-1">{t.kpis[i][2]}</p></div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-soft">
            <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><BarChart3 size={14} className="text-blue-600" /><span className="font-display font-semibold text-slate-800 text-xs">{t.activity}</span></div><span className="text-[10px] text-slate-400 font-mono">Jan → Déc</span></div>
            <div className="flex items-end gap-1 h-[52px]">{[35,55,40,72,60,88,50,95,75,65,80,100].map((h, i) => <div key={i} className={`flex-1 rounded-t ${i === 11 ? 'bg-blue-500' : i >= 9 ? 'bg-blue-300' : 'bg-blue-100'}`} style={{ height: `${h}%` }} />)}</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 shadow-soft overflow-hidden">
            <div className="px-4 py-2.5 border-b border-slate-50"><span className="font-display font-semibold text-slate-800 text-xs">{t.latest}</span></div>
            {['TAS-20241201-XKPQ', 'TAS-20241201-RMJT', 'TAS-20241201-HNAZ'].map((code, i) => (
              <div key={code} className="flex items-center justify-between px-4 py-2.5 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-2.5"><div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center shrink-0"><Truck size={11} className="text-blue-600" /></div><div><p className="font-mono text-[10px] font-medium text-slate-700">{code}</p><p className="text-[9px] text-slate-400">Douala → Yaoundé</p></div></div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${i === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>{i === 0 ? (lang === 'fr' ? 'Livré' : 'Delivered') : (lang === 'fr' ? 'En transit' : 'In transit')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -right-5 top-20 bg-white rounded-2xl shadow-medium border border-slate-100 px-4 py-3 hidden xl:flex items-center gap-3 animate-float"><CheckCircle2 size={18} className="text-emerald-600" /><div><p className="font-display font-bold text-slate-900 text-sm">{t.available}</p><p className="text-[10px] text-slate-500">TAS Logistics · Live</p></div></div>
    </div>
  )
}

function InfoCard({ icon: Icon, title, desc }: CardItem) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-strong hover:-translate-y-1.5 transition-all duration-300">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-brand shadow-glow group-hover:scale-105 transition-transform"><Icon size={20} className="text-white" /></div>
      <h3 className="font-display font-bold text-navy-900 text-lg mb-2">{title}</h3>
      <p className="font-body text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function ProblemSolution({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <>
      <section className="py-24 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="reveal text-center max-w-3xl mx-auto mb-14 space-y-4"><Label>{t.problemLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900">{t.problemTitle}</h2><p className="font-body text-slate-500 text-lg">{t.problemDesc}</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{t.problems.map(([title, desc]: string[], i: number) => <InfoCard key={title} icon={problemIcons[i]} title={title} desc={desc} />)}</div></div></section>
      <section id="services" className="py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="reveal text-center max-w-3xl mx-auto mb-14 space-y-4"><Label>{t.solutionLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900">{t.solutionTitle}</h2><p className="font-body text-slate-500 text-lg">{t.solutionDesc}</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{t.solutions.map(([title, desc]: string[], i: number) => <InfoCard key={title} icon={solutionIcons[i]} title={title} desc={desc} />)}</div></div></section>
    </>
  )
}

function Modules({ lang }: { lang: Lang }) {
  const t = content[lang]
  const [active, setActive] = useState('logistics')
  const current = t.modules.find((m: ModuleItem) => m.id === active)!
  const Icon = current.icon
  return (
    <section id="modules" className="py-24 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="reveal text-center mb-14 space-y-4"><Label>{t.modulesLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900">{t.modulesTitle}</h2><p className="font-body text-slate-500 text-lg max-w-2xl mx-auto">{t.modulesDesc}</p></div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">{t.modules.map((m: ModuleItem) => { const MIcon = m.icon; const isA = m.id === active; return <button key={m.id} onClick={() => setActive(m.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border font-display font-medium text-[13px] transition-all ${isA ? 'bg-blue-600 text-white border-blue-600 shadow-glow' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}><MIcon size={15} />{m.name}{m.available && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}</button> })}</div>
      <div className="bg-white rounded-3xl border border-slate-200 shadow-medium overflow-hidden"><div className="grid lg:grid-cols-5"><div className="lg:col-span-2 p-8 lg:p-10 bg-blue-50 border-b lg:border-b-0 lg:border-r border-blue-100"><div className="space-y-6"><span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-bold ${current.available ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>{current.available ? <CheckCircle2 size={12} /> : <Clock size={12} />}{current.available ? t.availableNow : t.soon}</span><div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-soft"><Icon size={28} className="text-blue-600" /></div><div><h3 className="font-display font-bold text-slate-900 text-3xl">{current.name}</h3><p className="font-display font-semibold text-blue-600 mt-1">{current.tagline}</p></div><p className="font-body text-slate-600 leading-relaxed">{current.desc}</p></div></div><div className="lg:col-span-3 p-8 lg:p-10"><div className="grid sm:grid-cols-2 gap-4">{current.features.map((f: string) => <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"><CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" /><span className="font-body text-slate-700 text-sm">{f}</span></div>)}</div></div></div></div>
    </div></section>
  )
}

function Logistics({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <section id="logistics-focus" className="py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"><div className="space-y-7"><Label>{t.logisticsLabel}</Label><div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-display font-bold"><CheckCircle2 size={12} />{t.availableNow}</div><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-tight">{t.logisticsTitle}</h2><p className="font-body text-slate-500 text-lg leading-relaxed">{t.logisticsDesc}</p><div className="space-y-3">{t.logisticsFeatures.map((item: string) => <div key={item} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /></div><span className="font-body text-slate-700 text-[14px]">{item}</span></div>)}</div><div className="flex flex-col sm:flex-row gap-3 pt-2"><a href="#demo" className="btn-primary py-3.5 px-7">{t.logisticsCta1}<ArrowRight size={16} /></a><a href="#contact" className="btn-outline py-3.5 px-6">{t.logisticsCta2}</a></div></div><div className="grid grid-cols-2 gap-4">{['Colis & plis', 'Tracking public', 'Multi-agences', 'Chauffeurs & GPS', 'Clients B2B', 'Bordereaux PDF', 'Comptabilité', 'Journal d’audit'].map((label, i) => { const Icon = details[i]; return <div key={label} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-soft hover:shadow-medium transition-all"><div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3"><Icon size={18} className="text-blue-600" /></div><h4 className="font-display font-semibold text-slate-900 text-sm mb-1">{label}</h4></div> })}</div></div></div></section>
  )
}

function Security({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <section id="securite" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div className="blob w-[460px] h-[460px] -top-24 left-1/4 bg-blue-600/30" />
      <div className="blob w-[380px] h-[380px] bottom-0 right-10 bg-cyan-500/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-14 space-y-4"><span className="section-label !bg-white/10 !text-blue-300 !border-white/15"><ShieldCheck size={14} />{t.securityLabel}</span><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px]">{t.securityTitle}</h2><p className="font-body text-slate-300 text-lg">{t.securityDesc}</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{t.security.map(([title, desc]: string[], i: number) => { const Icon = securityIcons[i]; return <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"><div className="w-11 h-11 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4"><Icon size={20} className="text-blue-300" /></div><h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3><p className="font-body text-slate-300 text-sm leading-relaxed">{desc}</p></div> })}</div>
      </div>
    </section>
  )
}

function Pricing({ lang }: { lang: Lang }) {
  const t = content[lang]
  const [annual, setAnnual] = useState(false)
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-blue-50 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-10 space-y-4"><Label>{t.pricingLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900">{t.pricingTitle}</h2><p className="font-body text-slate-500 text-lg">{t.pricingDesc}</p></div>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm font-medium ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>{t.billMonthly}</span>
          <button onClick={() => setAnnual(!annual)} className="relative w-14 h-7 rounded-full bg-blue-600 transition-colors" aria-label="toggle"><span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${annual ? 'translate-x-7' : ''}`} /></button>
          <span className={`text-sm font-medium ${annual ? 'text-slate-900' : 'text-slate-400'}`}>{t.billAnnual}</span>
          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">{t.annualNote}</span>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 items-stretch">
          {t.plans.map((p: any) => (
            <div key={p.id} className={`relative rounded-3xl p-7 flex flex-col transition-all duration-300 ${p.popular ? 'bg-brand text-white shadow-glow lg:-translate-y-3 ring-1 ring-blue-500/40' : 'bg-white text-navy-900 border border-slate-200 shadow-card hover:shadow-medium hover:-translate-y-1'}`}>
              {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-300 text-navy-900 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-medium">{lang === 'fr' ? 'Populaire' : 'Popular'}</span>}
              <h3 className="font-display font-bold text-xl">{p.name}</h3>
              <p className={`text-sm mt-1 ${p.popular ? 'text-blue-100' : 'text-slate-500'}`}>{p.tagline}</p>
              <div className="mt-5 mb-1 flex items-end gap-1"><span className="font-display font-extrabold text-4xl">{annual ? p.y : p.m}</span></div>
              <p className={`text-xs ${p.popular ? 'text-blue-100' : 'text-slate-500'}`}>{t.perMonth}{annual ? ` · ${t.billedAnnual}` : ''}</p>
              <a href="#demo" className={`mt-6 mb-6 inline-flex items-center justify-center gap-2 font-display font-semibold px-5 py-3 rounded-xl text-sm transition-all ${p.popular ? 'bg-white text-blue-700 hover:bg-blue-50' : 'btn-primary'}`}>{p.cta}<ArrowRight size={15} /></a>
              <ul className="space-y-2.5 mt-auto">{p.features.map((f: string) => <li key={f} className="flex items-start gap-2.5 text-sm"><CheckCircle2 size={17} className={`shrink-0 mt-0.5 ${p.popular ? 'text-emerald-300' : 'text-blue-600'}`} /><span className={p.popular ? 'text-blue-50' : 'text-slate-600'}>{f}</span></li>)}</ul>
            </div>
          ))}
          {/* Enterprise */}
          <div className="relative rounded-3xl p-7 flex flex-col bg-slate-900 text-white shadow-medium">
            <h3 className="font-display font-bold text-xl">{t.enterprise.name}</h3>
            <p className="text-sm mt-1 text-slate-400">{t.enterprise.tagline}</p>
            <div className="mt-5 mb-1"><span className="font-display font-extrabold text-3xl">{t.enterprise.price}</span></div>
            <p className="text-xs text-slate-400">&nbsp;</p>
            <a href="#contact" className="mt-6 mb-6 inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-display font-semibold px-5 py-3 rounded-xl text-sm hover:bg-blue-500 transition-all">{t.enterprise.cta}<ArrowRight size={15} /></a>
            <ul className="space-y-2.5 mt-auto">{t.enterprise.features.map((f: string) => <li key={f} className="flex items-start gap-2.5 text-sm"><CheckCircle2 size={17} className="shrink-0 mt-0.5 text-blue-400" /><span className="text-slate-300">{f}</span></li>)}</ul>
          </div>
        </div>
        {/* Add-ons */}
        <div className="mt-14"><h3 className="font-display font-bold text-slate-900 text-lg text-center mb-6">{t.addonsTitle}</h3><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">{t.addons.map(([name, price]: string[]) => <div key={name} className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-5 py-4"><span className="font-body text-slate-700 text-sm font-medium">{name}</span><span className="font-display font-bold text-blue-600 text-sm">{price}</span></div>)}</div></div>
        <p className="text-center text-xs text-slate-400 mt-8 max-w-2xl mx-auto">{t.pricingFoot}</p>
      </div>
    </section>
  )
}

function Testimonials({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <section className="py-24 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="reveal text-center max-w-3xl mx-auto mb-14 space-y-4"><Label>{t.testiLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900">{t.testiTitle}</h2></div>
      <div className="grid md:grid-cols-3 gap-6">{t.testimonials.map(([quote, name, role]: string[]) => (
        <div key={name} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-soft flex flex-col">
          <Quote size={26} className="text-blue-200 mb-3" />
          <div className="flex gap-0.5 mb-3">{[0,1,2,3,4].map(i => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}</div>
          <p className="font-body text-slate-700 leading-relaxed flex-1">“{quote}”</p>
          <div className="mt-5 pt-4 border-t border-slate-100"><p className="font-display font-bold text-slate-900 text-sm">{name}</p><p className="text-xs text-slate-500">{role}</p></div>
        </div>
      ))}</div>
    </div></section>
  )
}

function Consulting({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <section id="consulting" className="py-24 bg-blue-700 relative overflow-hidden text-white"><div className="absolute inset-0 bg-grid bg-grid opacity-10 pointer-events-none" /><div className="relative max-w-7xl mx-auto px-4 sm:px-6"><div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"><div className="space-y-6"><span className="inline-flex items-center gap-2 text-white font-display font-semibold text-xs tracking-widest uppercase bg-white/10 border border-white/15 rounded-full px-4 py-1.5">{t.consultingLabel}</span><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight">{t.consultingTitle}</h2><p className="font-body text-blue-100 text-lg leading-relaxed">{t.consultingDesc}</p><a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-display font-bold px-7 py-3.5 rounded-xl text-sm hover:bg-blue-50 transition-colors shadow-medium">{t.consultingCta}<ArrowRight size={16} /></a></div><div className="grid gap-4">{t.consultingItems.map(([title, desc]: string[], i: number) => { const Icon = consultingIcons[i]; return <div key={title} className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-sm"><div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center mb-4"><Icon size={20} /></div><h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3><p className="font-body text-blue-100 text-sm leading-relaxed">{desc}</p></div> })}</div></div></div></section>
  )
}

function ValueMission({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <>
      <section id="valeur" className="py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="reveal text-center max-w-3xl mx-auto mb-14 space-y-4"><Label>{t.valueLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900">{t.valueTitle}</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{t.values.map(([title, desc]: string[], i: number) => <InfoCard key={title} icon={valueIcons[i]} title={title} desc={desc} />)}</div></div></section>
      <section id="mission" className="py-24 bg-blue-700 text-white relative overflow-hidden"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="grid lg:grid-cols-2 gap-12 items-center"><div className="space-y-5"><span className="inline-flex items-center gap-2 text-white font-display font-semibold text-xs tracking-widest uppercase bg-white/10 border border-white/15 rounded-full px-4 py-1.5">{t.missionLabel}</span><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight">{t.missionTitle}</h2><blockquote className="font-body text-blue-100 text-xl leading-relaxed border-l-4 border-white/40 pl-5">“{t.missionQuote}”</blockquote></div><div className="space-y-5"><div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm"><p className="font-mono text-blue-200 text-xs tracking-widest uppercase mb-3">Vision</p><p className="font-display font-semibold text-white text-xl leading-snug">“{t.vision}”</p></div><div className="grid grid-cols-2 gap-4">{[['5', lang === 'fr' ? 'Modules' : 'Modules'], ['100%', 'Afrique'], ['2', lang === 'fr' ? 'Langues' : 'Languages'], ['24/7', 'Support']].map(([n, l]) => <div key={l} className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center backdrop-blur-sm"><p className="font-display font-extrabold text-3xl text-white mb-1">{n}</p><p className="font-body text-blue-200 text-xs">{l}</p></div>)}</div></div></div></div></section>
    </>
  )
}

function HowSteps({ lang }: { lang: Lang }) {
  const t = content[lang]
  return <section id="comment" className="py-24 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="reveal text-center max-w-3xl mx-auto mb-14 space-y-4"><Label>{t.howLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900">{t.howTitle}</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{t.howSteps.map(([title, desc]: string[], i: number) => <div key={title} className="relative bg-white rounded-2xl border border-slate-100 p-6 shadow-soft"><div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-display font-bold mb-5">{String(i+1).padStart(2,'0')}</div><h3 className="font-display font-bold text-slate-900 text-lg mb-2">{title}</h3><p className="font-body text-slate-500 text-sm leading-relaxed">{desc}</p></div>)}</div></div></section>
}

function Faq({ lang }: { lang: Lang }) {
  const t = content[lang]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="py-24 bg-white"><div className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="reveal text-center mb-12 space-y-4"><Label>{t.faqLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">{t.faqTitle}</h2></div>
      <div className="space-y-3">{t.faqs.map(([q, a]: string[], i: number) => (
        <div key={q} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"><span className="font-display font-semibold text-slate-900 text-[15px]">{q}</span><ChevronDown size={18} className={`text-blue-600 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} /></button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-60' : 'max-h-0'}`}><p className="px-5 pb-5 font-body text-slate-500 text-sm leading-relaxed">{a}</p></div>
        </div>
      ))}</div>
    </div></section>
  )
}

function DemoForm({ lang }: { lang: Lang }) {
  const t = content[lang]
  const [f, setF] = useState({ name: '', company: '', sector: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [err, setErr] = useState(false)
  const up = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }))
  const lead = () => `Demande de démo TAS\n\nNom: ${f.name}\nEntreprise: ${f.company}\nSecteur: ${f.sector}\nTéléphone: ${f.phone}\nEmail: ${f.email}\nMessage: ${f.message}`
  // Backend TAS (endpoint public de contact). Configurable via VITE_API_BASE.
  const API_BASE = ((import.meta as any).env?.VITE_API_BASE as string) || 'https://app.tondomaine.com'
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true); setErr(false)
    try {
      const res = await fetch(`${API_BASE}/api/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.name, email: f.email, phone: f.phone, company: f.company,
          subject: `Demande de démo TAS${f.sector ? ' — ' + f.sector : ''}`,
          message: f.message,
        }),
      })
      if (!res.ok) throw new Error('bad status')
      setSent(true)
      setF({ name: '', company: '', sector: '', phone: '', email: '', message: '' })
    } catch {
      setErr(true)
    } finally {
      setSending(false)
    }
  }
  return (
    <section id="demo" className="py-24 bg-slate-50"><div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-2 space-y-6"><Label>{t.demoLabel}</Label><h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">{t.demoTitle}</h2><p className="font-body text-slate-500 leading-relaxed">{t.demoDesc}</p><div className="space-y-3">{t.demoPerks.map((p: string) => <div key={p} className="flex items-center gap-3 text-slate-600 font-body text-sm"><CheckCircle2 size={17} className="text-blue-600" />{p}</div>)}</div></div>
      <form onSubmit={submit} className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 shadow-medium p-6 lg:p-8 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4"><input className="input-field" placeholder={t.form.name} value={f.name} onChange={(e) => up('name', e.target.value)} required /><input className="input-field" placeholder={t.form.company} value={f.company} onChange={(e) => up('company', e.target.value)} /></div>
        <div className="grid sm:grid-cols-2 gap-4"><select className="input-field" value={f.sector} onChange={(e) => up('sector', e.target.value)}><option value="">{t.form.sector}</option>{t.sectors.map((s: string) => <option key={s}>{s}</option>)}</select><input className="input-field" placeholder={t.form.phone} value={f.phone} onChange={(e) => up('phone', e.target.value)} required /></div>
        <input className="input-field" placeholder={t.form.email} type="email" value={f.email} onChange={(e) => up('email', e.target.value)} />
        <textarea className="input-field min-h-[120px]" placeholder={t.form.message} value={f.message} onChange={(e) => up('message', e.target.value)} />
        <button className="btn-primary w-full py-4" type="submit" disabled={sending}><MessageCircle size={17} /> {sending ? t.form.sending : t.form.submit}</button>
        <a className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-blue-600" href={`mailto:${contact.email}?subject=${encodeURIComponent('Demande de démo TAS')}&body=${encodeURIComponent(lead())}`}><Mail size={15} /> {contact.email}</a>
        {sent && <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl px-4 py-3 text-sm"><CheckCircle2 size={16} />{t.form.sent}</div>}
        {err && <div className="flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 text-sm"><Mail size={16} />{t.form.error}</div>}
      </form>
    </div></div></section>
  )
}

function Contact({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <section id="contact" className="py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start"><div className="space-y-8"><Label>{t.contactLabel}</Label><div className="space-y-4"><h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-tight">{t.contactTitle}</h2><p className="font-body text-slate-500 text-lg leading-relaxed">{t.contactDesc}</p></div><div className="grid sm:grid-cols-2 gap-4">{[[Mail, 'Email', contact.email, `mailto:${contact.email}`], [Phone, 'Téléphone', contact.phone, `tel:${contact.phone.replace(/\s/g, '')}`], [MessageCircle, 'WhatsApp', contact.whatsapp, `https://wa.me/${contact.whatsapp.replace(/\s|[+]/g, '')}`], [MapPin, 'Localisation', contact.location, '#']].map(([Icon, label, value, href]: any) => <a key={label} href={href} className="group flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-medium hover:border-blue-100 transition-all"><div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 group-hover:bg-blue-100 transition-colors"><Icon size={18} className="text-blue-600" /></div><div className="min-w-0"><p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">{label}</p><p className="font-body font-medium text-slate-800 text-sm truncate">{value}</p></div></a>)}</div></div><div className="bg-slate-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden"><div className="relative space-y-6"><Logo className="h-12 brightness-0 invert opacity-90" /><div><p className="font-mono text-blue-400 text-xs tracking-widest uppercase mb-3">{t.ready}</p><h3 className="font-display font-bold text-white text-2xl lg:text-3xl leading-tight">{t.demoTitle}</h3><p className="font-body text-slate-400 mt-3 leading-relaxed">{t.demoDesc}</p></div><a href="#demo" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-display font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-blue-500 transition-colors shadow-glow">{t.cta}<ArrowRight size={16} /></a></div></div></div></div></section>
  )
}

function Footer({ lang }: { lang: Lang }) {
  const t = content[lang]
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-slate-400"><div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8"><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12"><div className="space-y-5"><Logo className="h-12 brightness-0 invert" /><p className="font-body text-slate-500 text-sm leading-relaxed">{t.footerDesc}</p><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /><span className="font-body text-emerald-400 text-xs">Actif au Cameroun · Afrique</span></div></div><div><p className="font-display font-semibold text-white text-sm mb-5">Modules</p><ul className="space-y-3">{['TAS Logistics', 'TAS Health', 'TAS Retail', 'TAS School', 'TAS Food', 'TAS Consulting'].map(m => <li key={m}><a href={m === 'TAS Consulting' ? '#consulting' : '#modules'} className="font-body text-slate-500 hover:text-white text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-600/60" />{m}</a></li>)}</ul></div><div><p className="font-display font-semibold text-white text-sm mb-5">Navigation</p><ul className="space-y-3">{t.nav.map((label: string, i: number) => <li key={label}><a href={`#${navIds[i]}`} className="font-body text-slate-500 hover:text-white text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-600/60" />{label}</a></li>)}</ul></div><div><p className="font-display font-semibold text-white text-sm mb-5">Contact</p><ul className="space-y-4"><li><a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white transition-colors"><Mail size={15} className="text-blue-500" />{contact.email}</a></li><li><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors"><Phone size={15} className="text-blue-500" />{contact.phone}</a></li><li><div className="flex items-center gap-3"><MapPin size={15} className="text-blue-500" />{contact.location}</div></li></ul></div></div><div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"><p className="font-body text-slate-600 text-sm">© {year} TAS Platform. {t.rights}</p><div className="flex items-center gap-4">{t.legal.map((l: string) => <a key={l} href="#" className="text-xs text-slate-500 hover:text-white transition-colors">{l}</a>)}<span className="text-xs font-body text-slate-600">{t.made}</span></div></div></div></footer>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('fr')
  // Révélation au scroll : ajoute `.in` aux éléments `.reveal` à leur entrée.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [lang])
  return (
    <div className="min-h-screen">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <ProblemSolution lang={lang} />
        <Modules lang={lang} />
        <Logistics lang={lang} />
        <Security lang={lang} />
        <Pricing lang={lang} />
        <Testimonials lang={lang} />
        <Consulting lang={lang} />
        <ValueMission lang={lang} />
        <HowSteps lang={lang} />
        <Faq lang={lang} />
        <DemoForm lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}
