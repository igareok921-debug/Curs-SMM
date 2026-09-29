export type CourseModule = {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  goal: string;
};

export const content = {
  brandName: "Fiiama Troian",

  nav: {
    links: [
      { label: "Despre Curs", href: "#despre-curs" },
      { label: "Module", href: "#module" },
      { label: "Testimoniale", href: "#testimoniale" },
      { label: "Înscrieri", href: "#inscrieri" },
    ],
    cta: "Înscrie-te",
  },

  hero: {
    title: "Cum faci bani din SMM",
    subtitle: "Învață de la zero cum să creezi conținut, să promovezi o afacere și să transformi Social Media într-o profesie.",
    vipNote: "În formatul VIP: lecție exclusivă cu invitatul special Alexandru Bordea",
    cta: "Aplică pentru un loc",
  },

  message: {
    title: "EȘTI GATA SĂ ÎNCEPI?",
    paragraphs: [
      "Dacă îți dorești structură, claritate și o înțelegere reală a Social Media Managementului, acest curs este pentru tine.",
      "Nu îți promit rezultate peste noapte. Îți ofer informații actuale, strategii aplicabile, practică reală și o bază solidă pentru a începe corect.",
      "Următorul pas depinde de tine.",
    ],
    highlight: "Construiește o prezență online care chiar funcționează.",
    cta: "Descoperă programul cursului",
  },

  courseStructure: {
    title: "STRUCTURA CURSULUI",
    intro:
      "Vei învăța pas cu pas să construiești o strategie de brand pe social media.\nCursul este structurat pe module clare și aplicabile:",
  },

  modules: [
    {
      id: "modul-1",
      title: "MODULUL 1 — Introducere în Social Media Management",
      subtitle: "Fundamentele profesiei de Social Media Manager",
      bullets: [
        "Ce înseamnă SMM și care este rolul unui Social Media Manager.",
        "Diferența dintre SMM, Content Creator, Reels Maker și Story Maker.",
        "Responsabilitățile specialistului și organizarea colaborării cu un client.",
        "Experiența mea personală, primele greșeli și lecțiile învățate din lucrul cu clienți reali.",
      ],
      goal: "Scop: să înțelegi ce face un SMM și cum se organizează activitatea reală.",
    },
    {
      id: "modul-2",
      title: "MODULUL 2 — Instagram, Facebook și TikTok",
      subtitle: "Cum funcționează și cum ne adaptăm pe fiecare platformă",
      bullets: [
        "Rolul și particularitățile fiecărei platforme.",
        "Cum alegem platformele potrivite în funcție de nișă și public.",
        "Cum adaptăm și distribuim același conținut pe mai multe platforme.",
        "Construirea unei identități unitare pe Instagram, Facebook și TikTok.",
      ],
      goal: "Scop: să alegi platformele potrivite și să construiești o strategie coerentă.",
    },
    {
      id: "modul-3",
      title: "MODULUL 3 — Auditul paginii, publicul-țintă și poziționarea",
      subtitle: "Cum analizezi o pagină și îți construiești poziționarea",
      bullets: [
        "Analiza fotografiei de profil, numelui, biografiei, reperelor și feed-ului.",
        "Identificarea problemelor care împiedică dezvoltarea unei pagini.",
        "Stabilirea publicului-țintă pe baza nișei, clienților și statisticilor.",
        "Construirea unei poziționări clare, coerente și profesionale.",
      ],
      goal: "Scop: să identifici punctele forte, punctele slabe și direcția potrivită pentru brand.",
    },
    {
      id: "modul-4",
      title: "MODULUL 4 — Strategia și crearea conținutului",
      subtitle: "Cum concepem strategia și planul de conținut",
      bullets: [
        "Realizarea strategiei de Social Media.",
        "Alegerea pilonilor și tipurilor de conținut.",
        "Crearea planului de conținut pentru o lună.",
        "Pregătirea unei zile de filmare: idei, scenarii, locații și echipament.",
        "Structura unui Reel: hook, mesaj principal și îndemn la acțiune.",
      ],
      goal: "Scop: să poți construi o strategie de conținut clară și aplicabilă.",
    },
    {
      id: "modul-5",
      title: "MODULUL 5 — Editarea video în CapCut",
      subtitle: "Cum transformi materialele filmate în Reels profesionale",
      bullets: [
        "Prezentarea aplicației CapCut și organizarea materialelor filmate.",
        "Selectarea și tăierea cadrelor.",
        "Adăugarea muzicii, subtitrărilor, tranzițiilor și efectelor.",
        "Reglarea sunetului și exportarea corectă a videoclipului.",
        "Editarea pas cu pas a unui Reel complet, de la început până la final.",
      ],
      goal: "Scop: să poți edita conținut video clar, atractiv și pregătit pentru publicare.",
    },
    {
      id: "modul-6",
      title: "MODULUL 6 — Meta Ads și promovarea plătită",
      subtitle: "Cum funcționează reclamele și când merită să le folosim",
      bullets: [
        "Ce este promovarea plătită și când avem nevoie de ea.",
        "Alegerea obiectivului campaniei în funcție de rezultatul dorit.",
        "Stabilirea publicului, locației, bugetului și perioadei.",
        "Alegerea conținutului potrivit pentru reclamă.",
        "Analizarea rezultatelor și identificarea greșelilor frecvente.",
      ],
      goal: "Scop: să înțelegi logica publicității plătite și să decizi potrivit.",
    },
    {
      id: "modul-7",
      title: "MODULUL 7 — Practică Meta Ads",
      subtitle: "Creăm o campanie demonstrativă din zero",
      bullets: [
        "Accesarea Meta Business Suite și Ads Manager.",
        "Crearea unei campanii demonstrative de la zero.",
        "Alegerea obiectivului, publicului, intereselor și locației.",
        "Stabilirea bugetului și selectarea materialului publicitar.",
        "Pregătirea campaniei până la etapa finală, fără activarea unui buget real.",
      ],
      goal: "Scop: să poți crea o campanie clară, structurată și pregătită pentru testare.",
    },
    {
      id: "modul-8",
      title: "MODULUL 8 — Inteligența artificială și pregătirea pentru examen",
      subtitle: "Cum aplici AI în activitatea de SMM și cum te pregătești pentru evaluare",
      bullets: [
        "Recapitularea principalelor informații din toate modulele.",
        "Organizarea activității cu un client: servicii, limite, prețuri și portofoliu.",
        "Utilizarea ChatGPT și Claude în activitatea de SMM.",
        "Crearea unei analize, strategii, plan de conținut și scenarii cu ajutorul AI.",
        "Organizarea informației în tabele, prezentări, documente Word și PDF.",
        "Personalizarea și verificarea conținutului creat cu AI.",
        "Explicarea cerințelor și pregătirea proiectului final pentru examen.",
      ],
      goal: "Scop: să transforme informația în proiect final și să fie pregătit pentru evaluare.",
    },
  ] satisfies CourseModule[],

  finalCta: {
    text: "Următorul pas depinde de tine.",
    button: "Înscrie-te",
  },

  testimonials: {
    title: "TESTIMONIALE",
    items: [
      {
        name: "Ana Popescu",
        gender: "f",
        text: "Nu credeam că niște detalii atât de mici pot schimba atât de mult rezultatul. După sfaturile tale, pagina mea arată mult mai profesionist și am început să primesc mesaje de la cliente noi. Mulțumesc enorm!",
      },
      {
        name: "Irina Dobre",
        gender: "f",
        text: "Vreau să-ți mulțumesc pentru toată strategia și ideile tale 🙏 După ce am aplicat ce mi-ai spus, am mai multă încredere să postez și chiar se simte diferența. Ești foarte clară și explici pe înțelesul tuturor.",
      },
      {
        name: "Raluca Ionescu",
        gender: "f",
        text: "Ai un mod foarte clar de a explica și asta contează enorm. M-ai ajutat să-mi structurez serviciile și să le prezint mult mai profesionist. Mulțumesc mult!",
      },
      {
        name: "Andreea Mihai",
        gender: "f",
        text: "Ai reușit să transformi ideea mea într-un concept frumos și clar.",
      },
      {
        name: "Elena Matei",
        gender: "f",
        text: "Promovarea evenimentului a fost impecabilă, iar reacțiile oamenilor au fost foarte bune. Mulțumesc mult!",
      },
      {
        name: "Carmen Stan",
        gender: "f",
        text: "Mulțumim pentru tot sprijinul și răbdarea ta. Ai știut exact cum să ne explici ce avem de făcut și cum să comunicăm mai bine cu clienții noștri.",
      },
      {
        name: "Diana Rusu",
        gender: "f",
        text: "Îți mulțumesc pentru tot ajutorul oferit. Ai reușit să ne pui în valoare lucrările și să explici clar ce facem. Se vede diferența pe pagină.",
      },
      {
        name: "Bianca Ilie",
        gender: "f",
        text: "Îți mulțumesc pentru tot ce ai împărtășit cu mine. Se simte că faci asta din experiență reală, nu din teorie. Ești foarte clară și sinceră.",
      },
    ],
  },

  footer: {
    links: [
      { label: "Despre Curs", href: "#despre-curs" },
      { label: "Module", href: "#module" },
      { label: "Testimoniale", href: "#testimoniale" },
      { label: "Înscrieri", href: "#inscrieri" },
    ],
    contactTitle: "Contact",
    contactPlaceholder: "contact@exemplu.com",
  },
} as const;
