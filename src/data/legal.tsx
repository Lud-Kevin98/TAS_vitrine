import type { Lang } from '../i18n'

/* Contenu LÉGAL trilingue (fr / en / de).
 * — Aucun hébergeur concret n'est nommé (décrit génériquement + « à compléter »).
 * — Tout élément d'immatriculation manquant est marqué `todo: true` → rendu en
 *   encadré « élément à ajouter » sur la page, pour être complété avec les vraies
 *   informations légales de la société. */

export type Block = { h?: string; p?: string[]; ul?: string[]; todo?: boolean }
export type LegalDoc = { title: string; updated: string; intro?: string; blocks: Block[] }
export type LegalKey = 'legal' | 'privacy' | 'cookies' | 'terms'

const UPDATED = { fr: 'Dernière mise à jour : août 2026', en: 'Last updated: August 2026', de: 'Zuletzt aktualisiert: August 2026' }

export const LEGAL: Record<Lang, Record<LegalKey, LegalDoc>> = {
  /* ────────────────────────────── FRANÇAIS ────────────────────────────── */
  fr: {
    legal: {
      title: 'Mentions légales',
      updated: UPDATED.fr,
      intro: 'Informations relatives à l’éditeur du site tas-platform.com et de la plateforme TAS.',
      blocks: [
        { h: 'Éditeur du site', p: [
          'Le présent site et la plateforme TAS sont édités par Tchomnou Applications Systems (« TAS »), entreprise spécialisée dans la digitalisation, le conseil informatique et l’édition de sa plateforme de gestion.',
        ] },
        { todo: true, p: [
          'À compléter avec les informations légales de la société : forme juridique (ex. SARL / GmbH / SAS), capital social, adresse du siège social (Cameroun et/ou Allemagne), numéro d’immatriculation (RCCM au Cameroun / Handelsregister-Nr. en Allemagne), et numéro d’identification fiscale (NIU / TVA / USt-IdNr.).',
        ] },
        { h: 'Contact', p: [
          'E-mail : contact@tas-platform.com',
          'Téléphone (Cameroun) : +237 6 57 08 69 84',
          'Téléphone / WhatsApp (Allemagne) : +49 176 29434276',
          'Présence : Douala, Cameroun · Allemagne',
        ] },
        { h: 'Directeur de la publication', todo: true, p: [
          'À compléter : nom du représentant légal / directeur de la publication.',
        ] },
        { h: 'Hébergement', p: [
          'Le site et la plateforme sont hébergés sur une infrastructure sécurisée située en Allemagne (Union européenne), avec un haut niveau de sécurité et une isolation stricte des données par client.',
        ] },
        { todo: true, p: [
          'À compléter : raison sociale et adresse postale de l’hébergeur, conformément aux obligations légales d’information.',
        ] },
        { h: 'Propriété intellectuelle', p: [
          'La marque « TAS », le logo, l’identité visuelle, les textes, l’interface, le code et l’ensemble des contenus du site et de la plateforme sont la propriété exclusive de Tchomnou Applications Systems, sauf mention contraire. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite.',
        ] },
        { h: 'Responsabilité', p: [
          'TAS s’efforce d’assurer l’exactitude et la mise à jour des informations publiées, sans pouvoir en garantir l’exhaustivité. Le site peut contenir des liens vers des ressources externes sur lesquelles TAS n’exerce aucun contrôle et décline toute responsabilité quant à leur contenu.',
        ] },
        { h: 'Droit applicable', p: [
          'Les présentes mentions sont régies par le droit applicable au lieu du siège de l’éditeur. Tout litige relève des juridictions compétentes, sous réserve des dispositions légales impératives.',
        ] },
      ],
    },
    privacy: {
      title: 'Politique de confidentialité',
      updated: UPDATED.fr,
      intro: 'La protection de vos données est au cœur de notre métier. Cette politique explique quelles données nous traitons, pourquoi, et quels sont vos droits.',
      blocks: [
        { h: 'Responsable du traitement', p: [
          'Le responsable du traitement des données personnelles collectées via ce site est Tchomnou Applications Systems (TAS). Pour toute question relative à vos données : contact@tas-platform.com.',
        ] },
        { h: 'Données que nous collectons', p: [
          'Nous collectons uniquement les données nécessaires :',
        ], ul: [
          'Données que vous nous transmettez via le formulaire de contact / demande de démonstration : nom, entreprise, e-mail, téléphone, secteur d’activité et message.',
          'Données techniques minimales générées lors de la navigation (journaux de connexion, adresse IP, type de navigateur) à des fins de sécurité et de bon fonctionnement.',
          'Préférences d’usage stockées localement dans votre navigateur (langue, choix de consentement) — voir la Politique de cookies.',
        ] },
        { h: 'Finalités et bases légales', p: [
          'Vos données sont traitées pour :',
        ], ul: [
          'répondre à vos demandes et organiser une démonstration (exécution de mesures précontractuelles / votre consentement) ;',
          'assurer la sécurité, la prévention des abus et le bon fonctionnement du site (intérêt légitime) ;',
          'respecter nos obligations légales le cas échéant.',
        ] },
        { h: 'Destinataires', p: [
          'Vos données sont accessibles uniquement aux équipes de TAS habilitées et, le cas échéant, à des prestataires techniques agissant pour notre compte (hébergement au sein de l’Union européenne). Nous ne vendons ni ne louons vos données à des tiers.',
        ] },
        { h: 'Hébergement et transferts', p: [
          'Les données sont hébergées sur une infrastructure sécurisée située en Allemagne (Union européenne). En cas de recours à un sous-traitant impliquant un transfert hors de l’UE, des garanties appropriées (clauses contractuelles types ou mécanisme équivalent) seraient mises en place.',
        ] },
        { h: 'Durée de conservation', p: [
          'Les données de contact/prospection sont conservées le temps nécessaire au traitement de votre demande puis, le cas échéant, pendant une durée raisonnable à des fins de suivi commercial, avant suppression ou anonymisation. Les journaux techniques sont conservés pour une durée limitée.',
        ] },
        { h: 'Sécurité', p: [
          'Nous mettons en œuvre des mesures techniques et organisationnelles adaptées : chiffrement des échanges, contrôle des accès, isolation stricte des données par client (Row-Level Security) et supervision.',
        ] },
        { h: 'Vos droits', p: [
          'Conformément à la réglementation applicable (notamment le RGPD), vous disposez des droits suivants :',
        ], ul: [
          'droit d’accès, de rectification et d’effacement ;',
          'droit à la limitation et d’opposition au traitement ;',
          'droit à la portabilité de vos données ;',
          'droit de retirer votre consentement à tout moment ;',
          'droit d’introduire une réclamation auprès de l’autorité de contrôle compétente.',
        ] },
        { p: [
          'Pour exercer vos droits, écrivez-nous à contact@tas-platform.com. Nous vous répondrons dans les meilleurs délais.',
        ] },
        { h: 'Délégué à la protection des données', todo: true, p: [
          'À compléter si applicable : coordonnées d’un délégué à la protection des données (DPO) et/ou de l’autorité de contrôle compétente (ex. CNIL en France, autorité de protection des données du Land concerné en Allemagne).',
        ] },
      ],
    },
    cookies: {
      title: 'Politique de cookies',
      updated: UPDATED.fr,
      intro: 'Nous limitons au strict nécessaire l’usage des traceurs. Voici ce que nous utilisons et comment vous gardez le contrôle.',
      blocks: [
        { h: 'Notre approche', p: [
          'Par défaut, ce site ne dépose aucun cookie publicitaire ni traceur tiers à des fins de profilage. Nous utilisons uniquement le stockage local strictement nécessaire au fonctionnement du site.',
        ] },
        { h: 'Ce que nous utilisons', ul: [
          'Préférence de langue (fr / en / de), mémorisée dans le stockage local de votre navigateur.',
          'Votre choix concernant le bandeau d’information (pour ne pas le réafficher).',
        ] },
        { p: [
          'Ces éléments sont indispensables au bon fonctionnement du site et ne servent à aucun suivi publicitaire.',
        ] },
        { h: 'Mesure d’audience et outils tiers', todo: true, p: [
          'À compléter si vous ajoutez ultérieurement un outil de mesure d’audience, une carte, une vidéo intégrée ou tout service tiers susceptible de déposer des cookies : lister ces outils, leur finalité et recueillir le consentement préalable de l’utilisateur.',
        ] },
        { h: 'Gérer vos préférences', p: [
          'Vous pouvez à tout moment effacer le stockage local et les cookies via les réglages de votre navigateur. La suppression de la préférence de langue réinitialisera simplement la langue par défaut.',
        ] },
      ],
    },
    terms: {
      title: 'Conditions générales d’utilisation',
      updated: UPDATED.fr,
      intro: 'Les présentes conditions encadrent l’accès et l’utilisation du site vitrine tas-platform.com.',
      blocks: [
        { h: 'Objet', p: [
          'Les présentes conditions générales d’utilisation (CGU) définissent les modalités d’accès et d’utilisation du site vitrine de TAS. L’usage de la plateforme TAS par nos clients est régi par un contrat de service et des conditions dédiées, distincts des présentes CGU.',
        ] },
        { h: 'Acceptation', p: [
          'En accédant au site, vous acceptez sans réserve les présentes CGU. Si vous n’y consentez pas, nous vous invitons à ne pas utiliser le site.',
        ] },
        { h: 'Accès au site', p: [
          'TAS s’efforce d’assurer la disponibilité du site, sans garantie d’accès continu et sans interruption. Le site peut être modifié, suspendu ou interrompu à tout moment, notamment pour maintenance, sans que la responsabilité de TAS ne puisse être engagée.',
        ] },
        { h: 'Propriété intellectuelle', p: [
          'L’ensemble des éléments du site est protégé. Toute utilisation non autorisée est susceptible d’engager la responsabilité de son auteur.',
        ] },
        { h: 'Responsabilité', p: [
          'Les informations du site sont fournies à titre indicatif. TAS ne saurait être tenue responsable d’un dommage indirect résultant de l’utilisation du site ou de l’impossibilité d’y accéder.',
        ] },
        { h: 'Droit applicable', p: [
          'Les présentes CGU sont soumises au droit applicable au lieu du siège de l’éditeur, sous réserve des dispositions impératives protectrices des consommateurs.',
        ] },
      ],
    },
  },

  /* ────────────────────────────── ENGLISH ────────────────────────────── */
  en: {
    legal: {
      title: 'Legal notice',
      updated: UPDATED.en,
      intro: 'Information about the publisher of tas-platform.com and the TAS platform.',
      blocks: [
        { h: 'Publisher', p: [
          'This website and the TAS platform are published by Tchomnou Applications Systems (“TAS”), a company specialising in digitalisation, IT consulting and the development of its own business-management platform.',
        ] },
        { todo: true, p: [
          'To be completed with the company’s legal details: legal form (e.g. Ltd / GmbH), share capital, registered address (Cameroon and/or Germany), registration number (RCCM in Cameroon / Handelsregister in Germany) and tax identification number (VAT / USt-IdNr.).',
        ] },
        { h: 'Contact', p: [
          'E-mail: contact@tas-platform.com',
          'Phone (Cameroon): +237 6 57 08 69 84',
          'Phone / WhatsApp (Germany): +49 176 29434276',
          'Presence: Douala, Cameroon · Germany',
        ] },
        { h: 'Publication director', todo: true, p: [
          'To be completed: name of the legal representative / publication director.',
        ] },
        { h: 'Hosting', p: [
          'The website and platform are hosted on secure infrastructure located in Germany (European Union), with a high level of security and strict per-client data isolation.',
        ] },
        { todo: true, p: [
          'To be completed: name and postal address of the hosting provider, as required by applicable disclosure obligations.',
        ] },
        { h: 'Intellectual property', p: [
          'The “TAS” brand, logo, visual identity, texts, interface, code and all content of the site and platform are the exclusive property of Tchomnou Applications Systems unless stated otherwise. Any reproduction or use, in whole or in part, without prior written consent is prohibited.',
        ] },
        { h: 'Liability', p: [
          'TAS strives to keep published information accurate and up to date but cannot guarantee completeness. The site may link to external resources over which TAS has no control and for which it accepts no liability.',
        ] },
        { h: 'Governing law', p: [
          'This notice is governed by the law applicable at the publisher’s place of establishment. Any dispute falls under the competent courts, subject to mandatory legal provisions.',
        ] },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      updated: UPDATED.en,
      intro: 'Protecting your data is central to what we do. This policy explains what we process, why, and your rights.',
      blocks: [
        { h: 'Data controller', p: [
          'The controller of personal data collected via this site is Tchomnou Applications Systems (TAS). For any question about your data: contact@tas-platform.com.',
        ] },
        { h: 'Data we collect', p: ['We only collect what is necessary:'], ul: [
          'Data you provide via the contact / demo request form: name, company, e-mail, phone, industry and message.',
          'Minimal technical data generated while browsing (connection logs, IP address, browser type) for security and proper operation.',
          'Usage preferences stored locally in your browser (language, consent choice) — see the Cookie policy.',
        ] },
        { h: 'Purposes and legal bases', p: ['Your data is processed to:'], ul: [
          'respond to your requests and arrange a demo (pre-contractual steps / your consent);',
          'ensure security, prevent abuse and keep the site running (legitimate interest);',
          'comply with our legal obligations where applicable.',
        ] },
        { h: 'Recipients', p: [
          'Your data is accessible only to authorised TAS staff and, where relevant, to technical providers acting on our behalf (hosting within the European Union). We never sell or rent your data.',
        ] },
        { h: 'Hosting and transfers', p: [
          'Data is hosted on secure infrastructure located in Germany (European Union). Should a processor involve a transfer outside the EU, appropriate safeguards (standard contractual clauses or an equivalent mechanism) would be put in place.',
        ] },
        { h: 'Retention', p: [
          'Contact/prospect data is kept for as long as needed to handle your request and, where relevant, for a reasonable follow-up period, before deletion or anonymisation. Technical logs are kept for a limited time.',
        ] },
        { h: 'Security', p: [
          'We apply appropriate technical and organisational measures: encryption in transit, access control, strict per-client data isolation (Row-Level Security) and monitoring.',
        ] },
        { h: 'Your rights', p: ['Under applicable law (including the GDPR), you have the right to:'], ul: [
          'access, rectify and erase your data;',
          'restrict and object to processing;',
          'data portability;',
          'withdraw consent at any time;',
          'lodge a complaint with the competent supervisory authority.',
        ] },
        { p: ['To exercise your rights, e-mail us at contact@tas-platform.com. We will respond promptly.'] },
        { h: 'Data protection officer', todo: true, p: [
          'To be completed if applicable: contact details of a data protection officer (DPO) and/or the competent supervisory authority.',
        ] },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      updated: UPDATED.en,
      intro: 'We keep trackers to a strict minimum. Here is what we use and how you stay in control.',
      blocks: [
        { h: 'Our approach', p: [
          'By default, this site sets no advertising cookies and no third-party profiling trackers. We only use the local storage strictly necessary for the site to work.',
        ] },
        { h: 'What we use', ul: [
          'Language preference (fr / en / de), stored in your browser’s local storage.',
          'Your choice regarding the information banner (so it is not shown again).',
        ] },
        { p: ['These items are essential to the site and are not used for any advertising tracking.'] },
        { h: 'Analytics and third-party tools', todo: true, p: [
          'To be completed if you later add analytics, a map, an embedded video or any third-party service that may set cookies: list those tools, their purpose, and obtain the user’s prior consent.',
        ] },
        { h: 'Manage your preferences', p: [
          'You can clear local storage and cookies at any time via your browser settings. Removing the language preference simply resets the default language.',
        ] },
      ],
    },
    terms: {
      title: 'Terms of use',
      updated: UPDATED.en,
      intro: 'These terms govern access to and use of the tas-platform.com website.',
      blocks: [
        { h: 'Purpose', p: [
          'These terms of use govern access to and use of the TAS marketing website. Use of the TAS platform by our customers is governed by a separate service agreement and dedicated terms.',
        ] },
        { h: 'Acceptance', p: ['By accessing the site, you fully accept these terms. If you do not agree, please do not use the site.'] },
        { h: 'Access', p: [
          'TAS strives to keep the site available but does not guarantee uninterrupted access. The site may be changed, suspended or discontinued at any time, notably for maintenance, without liability for TAS.',
        ] },
        { h: 'Intellectual property', p: ['All elements of the site are protected. Any unauthorised use may engage the liability of its author.'] },
        { h: 'Liability', p: [
          'Information on the site is provided for guidance only. TAS cannot be held liable for indirect damage arising from use of, or inability to access, the site.',
        ] },
        { h: 'Governing law', p: ['These terms are governed by the law applicable at the publisher’s place of establishment, subject to mandatory consumer-protection provisions.'] },
      ],
    },
  },

  /* ────────────────────────────── DEUTSCH ────────────────────────────── */
  de: {
    legal: {
      title: 'Impressum',
      updated: UPDATED.de,
      intro: 'Angaben zum Anbieter der Website tas-platform.com und der TAS-Plattform.',
      blocks: [
        { h: 'Anbieter', p: [
          'Diese Website und die TAS-Plattform werden von Tchomnou Applications Systems („TAS“) betrieben — einem Unternehmen für Digitalisierung, IT-Beratung und die Entwicklung seiner eigenen Unternehmensplattform.',
        ] },
        { todo: true, p: [
          'Zu ergänzen mit den rechtlichen Angaben des Unternehmens: Rechtsform (z. B. GmbH / SARL), Stammkapital, Anschrift des Sitzes (Kamerun und/oder Deutschland), Registernummer (Handelsregister in Deutschland / RCCM in Kamerun) sowie Steuernummer / USt-IdNr.',
        ] },
        { h: 'Kontakt', p: [
          'E-Mail: contact@tas-platform.com',
          'Telefon (Kamerun): +237 6 57 08 69 84',
          'Telefon / WhatsApp (Deutschland): +49 176 29434276',
          'Präsenz: Douala, Kamerun · Deutschland',
        ] },
        { h: 'Verantwortlich für den Inhalt', todo: true, p: [
          'Zu ergänzen: Name des gesetzlichen Vertreters / inhaltlich Verantwortlichen (§ 18 Abs. 2 MStV).',
        ] },
        { h: 'Hosting', p: [
          'Website und Plattform werden auf einer sicheren Infrastruktur in Deutschland (Europäische Union) gehostet — mit hohem Sicherheitsniveau und strikter Datentrennung je Kunde.',
        ] },
        { todo: true, p: [
          'Zu ergänzen: Firmenname und Anschrift des Hosting-Anbieters entsprechend den gesetzlichen Informationspflichten.',
        ] },
        { h: 'Urheberrecht', p: [
          'Die Marke „TAS“, das Logo, die visuelle Identität, Texte, Oberfläche, Code und sämtliche Inhalte der Website und Plattform sind, sofern nicht anders angegeben, ausschließliches Eigentum von Tchomnou Applications Systems. Jede Vervielfältigung oder Nutzung, ganz oder teilweise, ohne vorherige schriftliche Zustimmung ist untersagt.',
        ] },
        { h: 'Haftung', p: [
          'TAS bemüht sich um Richtigkeit und Aktualität der veröffentlichten Informationen, kann jedoch keine Vollständigkeit garantieren. Die Website kann Links zu externen Quellen enthalten, auf die TAS keinen Einfluss hat und für deren Inhalte keine Haftung übernommen wird.',
        ] },
        { h: 'Anwendbares Recht', p: [
          'Dieses Impressum unterliegt dem am Sitz des Anbieters geltenden Recht. Für Streitigkeiten sind die zuständigen Gerichte zuständig, vorbehaltlich zwingender gesetzlicher Bestimmungen.',
        ] },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      updated: UPDATED.de,
      intro: 'Der Schutz Ihrer Daten steht im Zentrum unserer Arbeit. Diese Erklärung zeigt, welche Daten wir verarbeiten, warum und welche Rechte Sie haben.',
      blocks: [
        { h: 'Verantwortlicher', p: [
          'Verantwortlich für die über diese Website erhobenen personenbezogenen Daten ist Tchomnou Applications Systems (TAS). Bei Fragen zu Ihren Daten: contact@tas-platform.com.',
        ] },
        { h: 'Welche Daten wir erheben', p: ['Wir erheben nur das Notwendige:'], ul: [
          'Daten, die Sie über das Kontakt-/Demo-Formular übermitteln: Name, Unternehmen, E-Mail, Telefon, Branche und Nachricht.',
          'Minimale technische Daten beim Surfen (Verbindungsprotokolle, IP-Adresse, Browsertyp) zu Sicherheits- und Betriebszwecken.',
          'Lokal in Ihrem Browser gespeicherte Einstellungen (Sprache, Einwilligungswahl) — siehe Cookie-Richtlinie.',
        ] },
        { h: 'Zwecke und Rechtsgrundlagen', p: ['Ihre Daten werden verarbeitet, um:'], ul: [
          'Ihre Anfragen zu beantworten und eine Demo zu vereinbaren (vorvertragliche Maßnahmen / Ihre Einwilligung);',
          'Sicherheit, Missbrauchsprävention und Betrieb der Website zu gewährleisten (berechtigtes Interesse);',
          'gegebenenfalls gesetzliche Pflichten zu erfüllen.',
        ] },
        { h: 'Empfänger', p: [
          'Ihre Daten sind nur befugten TAS-Mitarbeitenden und ggf. technischen Dienstleistern in unserem Auftrag (Hosting innerhalb der EU) zugänglich. Wir verkaufen oder vermieten Ihre Daten nicht.',
        ] },
        { h: 'Hosting und Übermittlungen', p: [
          'Die Daten werden auf einer sicheren Infrastruktur in Deutschland (Europäische Union) gehostet. Sollte ein Auftragsverarbeiter eine Übermittlung außerhalb der EU erfordern, würden geeignete Garantien (Standardvertragsklauseln oder gleichwertig) eingesetzt.',
        ] },
        { h: 'Speicherdauer', p: [
          'Kontakt-/Interessentendaten werden so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist, und ggf. für einen angemessenen Nachverfolgungszeitraum, danach gelöscht oder anonymisiert. Technische Protokolle werden begrenzt aufbewahrt.',
        ] },
        { h: 'Sicherheit', p: [
          'Wir setzen geeignete technische und organisatorische Maßnahmen ein: Verschlüsselung der Übertragung, Zugriffskontrolle, strikte Datentrennung je Kunde (Row-Level Security) und Überwachung.',
        ] },
        { h: 'Ihre Rechte', p: ['Nach geltendem Recht (insbesondere DSGVO) haben Sie das Recht auf:'], ul: [
          'Auskunft, Berichtigung und Löschung;',
          'Einschränkung und Widerspruch gegen die Verarbeitung;',
          'Datenübertragbarkeit;',
          'jederzeitigen Widerruf der Einwilligung;',
          'Beschwerde bei der zuständigen Aufsichtsbehörde.',
        ] },
        { p: ['Zur Ausübung Ihrer Rechte schreiben Sie an contact@tas-platform.com. Wir antworten zeitnah.'] },
        { h: 'Datenschutzbeauftragter', todo: true, p: [
          'Falls zutreffend zu ergänzen: Kontaktdaten eines Datenschutzbeauftragten (DSB) und/oder der zuständigen Aufsichtsbehörde des betreffenden Bundeslandes.',
        ] },
      ],
    },
    cookies: {
      title: 'Cookie-Richtlinie',
      updated: UPDATED.de,
      intro: 'Wir halten Tracker auf ein striktes Minimum. Hier steht, was wir verwenden und wie Sie die Kontrolle behalten.',
      blocks: [
        { h: 'Unser Ansatz', p: [
          'Standardmäßig setzt diese Website keine Werbe-Cookies und keine Profiling-Tracker Dritter. Wir nutzen ausschließlich den für den Betrieb zwingend notwendigen lokalen Speicher.',
        ] },
        { h: 'Was wir verwenden', ul: [
          'Sprachpräferenz (fr / en / de), gespeichert im lokalen Speicher Ihres Browsers.',
          'Ihre Wahl zum Hinweisbanner (damit es nicht erneut erscheint).',
        ] },
        { p: ['Diese Elemente sind für den Betrieb der Website unerlässlich und dienen keinem Werbe-Tracking.'] },
        { h: 'Reichweitenmessung und Drittanbieter', todo: true, p: [
          'Zu ergänzen, falls Sie später ein Analyse-Tool, eine Karte, ein eingebettetes Video oder einen Drittdienst hinzufügen, der Cookies setzen kann: diese Tools, ihren Zweck auflisten und die vorherige Einwilligung einholen.',
        ] },
        { h: 'Einstellungen verwalten', p: [
          'Sie können lokalen Speicher und Cookies jederzeit über Ihre Browsereinstellungen löschen. Das Entfernen der Sprachpräferenz setzt lediglich die Standardsprache zurück.',
        ] },
      ],
    },
    terms: {
      title: 'Nutzungsbedingungen',
      updated: UPDATED.de,
      intro: 'Diese Bedingungen regeln den Zugang zur und die Nutzung der Website tas-platform.com.',
      blocks: [
        { h: 'Gegenstand', p: [
          'Diese Nutzungsbedingungen regeln Zugang und Nutzung der TAS-Website. Die Nutzung der TAS-Plattform durch unsere Kunden richtet sich nach einem gesonderten Servicevertrag mit eigenen Bedingungen.',
        ] },
        { h: 'Annahme', p: ['Mit dem Zugriff auf die Website akzeptieren Sie diese Bedingungen vollständig. Andernfalls nutzen Sie die Website bitte nicht.'] },
        { h: 'Zugang', p: [
          'TAS bemüht sich um Verfügbarkeit der Website, garantiert jedoch keinen ununterbrochenen Zugang. Die Website kann jederzeit — etwa für Wartungen — geändert, ausgesetzt oder eingestellt werden, ohne Haftung von TAS.',
        ] },
        { h: 'Urheberrecht', p: ['Alle Elemente der Website sind geschützt. Jede unbefugte Nutzung kann die Haftung des Verursachers begründen.'] },
        { h: 'Haftung', p: [
          'Die Informationen der Website dienen nur zur Orientierung. TAS haftet nicht für indirekte Schäden aus der Nutzung oder Nichtverfügbarkeit der Website.',
        ] },
        { h: 'Anwendbares Recht', p: ['Diese Bedingungen unterliegen dem am Sitz des Anbieters geltenden Recht, vorbehaltlich zwingender verbraucherschützender Vorschriften.'] },
      ],
    },
  },
}
