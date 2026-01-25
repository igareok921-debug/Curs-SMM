export type CourseModule = {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  goal: string;
};

export const content = {
  brandName: "Fiama Troian",

  nav: {
    links: [
      { label: "Despre Curs", href: "#despre-curs" },
      { label: "Module", href: "#module" },
      { label: "Înscrieri", href: "#inscrieri" },
    ],
    cta: "Înscrie-te",
  },

  hero: {
    title: "STRATEGIE DE BRAND SOCIAL MEDIA",
    subtitle: "Construirea unei prezențe online care vinde",
    cta: "Înscrie-te la curs",
  },

  message: {
    title: "EȘTI GATA SĂ ÎNCEPI?",
    paragraphs: [
      "Dacă îți dorești structură, claritate și o înțelegere reală a Social Media Managementului, acest curs este pentru tine.",
      "Nu promitem rezultate peste noapte, ci îți oferim strategii aplicabile, practică reală și o bază solidă pentru a construi corect.",
      "Următorul pas depinde de tine.",
    ],
    highlight: "Construiește o prezență online care chiar funcționează.",
    cta: "Vezi programul cursului",
  },

  courseStructure: {
    title: "STRUCTURA CURSULUI",
    intro:
      "Vei învăța pas cu pas să construiești o strategie de brand pe social media.\nCursul este structurat pe module clare și aplicabile:",
  },

  modules: [
    {
      id: "modul-1",
      title: "MODULUL 1 – Introducere în Social Media Management (Teorie)",
      subtitle: "Ce este Social Media Managerul și ce face concret",
      bullets: [
        "Ce înseamnă Social Media în 2026",
        "Rolul unui Social Media Manager (nu doar postări)",
        "Diferența dintre creator de conținut, SMM și influencer",
        "Ce servicii poți oferi și cum poți face bani din acest domeniu",
        "Ce NU este Social Media Management",
      ],
      goal: "Scop: să înțeleagă domeniul și dacă i se potrivește",
    },
    {
      id: "modul-2",
      title: "MODULUL 2 – Structura și funcționarea rețelelor sociale (Teorie)",
      subtitle: "Instagram, Facebook, TikTok – cum funcționează fiecare",
      bullets: [
        "Instagram: feed, reels, stories, algoritm, ce funcționează",
        "Facebook: pagini, grupuri, postări, public diferit",
        "TikTok: reach organic, trenduri, hook-uri",
        "Diferențe între platforme și cum le folosești împreună",
        "Cum gândește un SMM strategia pe fiecare platformă",
      ],
      goal: "Scop: să înțeleagă unde și ce postează, nu la întâmplare",
    },
    {
      id: "modul-3",
      title: "MODULUL 3 – Practică: Analiza paginilor & poziționare",
      subtitle: "Cum analizezi o pagină și construiești strategia",
      bullets: [
        "Analiza unei pagini reale (beauty / business / personal brand)",
        "Greșeli frecvente făcute de pagini",
        "Cum identifici publicul țintă",
        "Ce tip de conținut se potrivește fiecărei nișe",
        "Exercițiu practic: analiză + mini-strategie",
      ],
      goal: "Scop: să gândească ca un Social Media Manager, nu ca utilizator",
    },
    {
      id: "modul-4",
      title: "MODULUL 4 – Filmare & conținut video (Teorie)",
      subtitle: "Cum creezi conținut care prinde",
      bullets: [
        "Tipuri de conținut: educativ, emoțional, vânzare",
        "Cum filmezi cu telefonul (setări cameră, lumină, cadre)",
        "Hook-uri: primele 3 secunde",
        "Ce tip de video funcționează în 2026",
        "Greșeli în filmare care scad reach-ul",
      ],
      goal: "Scop: să știe CE și CUM să filmeze",
    },
    {
      id: "modul-5",
      title: "MODULUL 5 – Practică: Editare video & conținut",
      subtitle: "Edităm împreună – pas cu pas",
      bullets: [
        "Editare video (CapCut / aplicații simple)",
        "Tăieturi corecte, ritm, muzică",
        "Texte pe video care vând",
        "Cum editezi reels, TikTok, stories",
        "Exercițiu practic: editarea unui video complet",
      ],
      goal: "Scop: să poată livra conținut final pentru un client",
    },
    {
      id: "modul-6",
      title: "MODULUL 6 – Meta Ads & promovare plătită (Teorie)",
      subtitle: "Reclame pe Facebook & Instagram explicate simplu",
      bullets: [
        "Ce este Meta și cum funcționează",
        "Diferența dintre post sponsorizat și reclamă reală",
        "Obiective de reclamă",
        "Bugete, public, rezultate",
        "Diferența dintre „targetare” și „strategie”",
      ],
      goal: "Scop: să înțeleagă logica reclamelor, nu frica de ele",
    },
    {
      id: "modul-7",
      title: "MODULUL 7 – Practică: Lansarea unei reclame",
      subtitle: "Creăm o reclamă cap-coadă",
      bullets: [
        "Setarea contului",
        "Alegerea obiectivului",
        "Crearea publicului",
        "Textul reclamei",
        "Analiza rezultatelor",
        "Ce faci dacă reclama nu merge",
      ],
      goal: "Scop: să știe efectiv să lanseze o reclamă",
    },
    {
      id: "modul-8",
      title: "MODULUL 8 – Strategii avansate & viața reală de SMM",
      subtitle: "Cum crești, cum te promovezi și cum câștigi clienți",
      bullets: [
        "Colaborarea cu influenceri (când și cum)",
        "Cum te vinzi ca Social Media Manager",
        "Prețuri, pachete, greșeli frecvente",
        "Lifehack-uri din experiență reală",
        "Cum îți construiești portofoliul",
        "Ce faci după curs",
      ],
      goal: "Scop: să ieși cu direcție clară și încredere",
    },
  ] satisfies CourseModule[],

  finalCta: {
    text: "Următorul pas depinde de tine.",
    button: "Înscrie-te",
  },

  footer: {
    links: [
      { label: "Despre Curs", href: "#despre-curs" },
      { label: "Module", href: "#module" },
      { label: "Înscrieri", href: "#inscrieri" },
    ],
    contactTitle: "Contact",
    contactPlaceholder: "contact@exemplu.com",
  },
} as const;
