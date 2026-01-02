import { Project, Experience, SkillGroup } from './types';
import { Language } from './context/LanguageContext';

export const getNavLinks = (t: (key: string) => string) => [
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.experience'), href: '#experience' },
  { name: t('nav.contact'), href: '#contact' },
];

export const getSkills = (lang: Language): SkillGroup[] => [
  {
    category: lang === 'pl' ? "Backend i API" : "Backend & API",
    skills: ["Node.js", "TypeScript", "Next.js API Routes", "Stripe Integration", "n8n Automation", "PostgreSQL", "REST APIs"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design", "SEO Optimization"]
  },
  {
    category: lang === 'pl' ? "AI i Narzędzia" : "AI & Tools",
    skills: ["OpenAI/GPT Integration", "Prompt Engineering", "Git & GitHub", "Vercel", "Linux/Fedora", "Cursor"]
  }
];

export const getProjects = (lang: Language): Project[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'deeplomai',
      title: 'Deeplomai',
      category: 'SaaS',
      description: isPl 
        ? 'Platforma AI wspierająca pisanie prac dyplomowych. Gotowy produkt SaaS z regularnymi przychodami i bazą użytkowników.'
        : 'AI-Powered academic writing assistance platform targeting Polish universities. Production-ready SaaS with recurring revenue.',
      features: isPl 
        ? ['Generowanie struktury prac z GPT', 'Sugestie AI w czasie rzeczywistym', 'Automatyczne cytowania (APA/MLA)', 'Płatności subskrypcyjne Stripe']
        : ['GPT content generation for thesis structure', 'Real-time AI suggestions & style verification', 'Automated citations (APA/MLA) & DOI lookup', 'Stripe subscription monetization'],
      techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Stripe', 'Vercel'],
      status: 'Live',
      isMonetized: true,
      link: 'https://deeplomai.com/'
    },
    {
      id: 'wygoda-ski',
      title: 'Wygoda.ski',
      category: 'E-commerce',
      description: isPl
        ? 'Platforma rezerwacyjna wyjazdów narciarskich obsługująca złożone wyszukiwanie destynacji w całej Europie.'
        : 'Premium ski trip booking platform handling complex destination searches across Europe.',
      features: isPl
        ? ['Złożone filtrowanie 100+ destynacji', 'Dostępność i ceny w czasie rzeczywistym', 'Obsługa wielu języków', 'Zaawansowane SEO']
        : ['Complex filtering for 100+ destinations', 'Real-time availability & dynamic pricing', 'Multi-language support', 'High-performance SEO'],
      techStack: ['Next.js', 'React', 'Tailwind', 'Performance Optimization'],
      status: 'Live',
      link: 'https://wygoda.ski'
    },
    {
      id: 'gta5-hair',
      title: 'GTA5 Hairstyles DB',
      category: 'Reference DB',
      description: isPl
        ? 'Interaktywny katalog dla społeczności graczy ze zoptymalizowanym wyszukiwaniem.'
        : 'Interactive catalog for the gaming community with optimized search and filtering.',
      features: isPl
        ? ['150+ fryzur w bazie', 'Filtrowanie i sortowanie', 'Optymalizacja statyczna']
        : ['150+ searchable hairstyle entries', 'Filterable search & sorting', 'Static content delivery optimization'],
      techStack: ['Next.js', 'React', 'Responsive Design'],
      status: 'Live',
      link: 'https://hairstyles-gta5.com'
    },
    {
      id: 'ark-tested',
      title: 'ARK Tested',
      category: 'Reference DB',
      description: isPl
        ? 'Baza wiedzy o mechanikach gier survivalowych.'
        : 'Specialized knowledge base for survival game mechanics and guides.',
      features: isPl
        ? ['Złożona architektura informacji', 'Interfejs dla społeczności', 'Wydajność']
        : ['Complex information architecture', 'Searchable community interface', 'Performance focused'],
      techStack: ['React', 'Static Generation'],
      status: 'Live',
      link: 'https://arktested.com'
    },
    {
      id: 'anubis',
      title: 'Anubis Travel',
      category: 'Booking Platform',
      description: isPl
        ? 'Nowoczesna strona biura podróży z dynamicznym wyświetlaniem ofert.'
        : 'Modern travel agency website with dynamic tour package displays.',
      features: isPl
        ? ['Filtrowanie destynacji', 'Dynamiczne pakiety wycieczek', 'Nowoczesne UX']
        : ['Destination filtering', 'Dynamic tour packages', 'Modern UX patterns'],
      techStack: ['Next.js', 'React', 'UX Design'],
      status: 'Live',
      link: 'https://anubistravel.com/'
    },
    {
      id: 'helen-doron',
      title: 'Helen Doron',
      category: 'Marketing',
      description: isPl
        ? 'Strategia social media i tworzenie treści wizualnych dla oddziałów Grodzisk Mazowiecki i Pruszków.'
        : 'Social media strategy and visual content creation for Grodzisk Mazowiecki & Pruszkow branches.',
      features: isPl
        ? ['Spójny branding wizualny', 'Strategia social media', 'Materiały promocyjne']
        : ['Cohesive visual branding', 'Social media strategy', 'Promotional material design'],
      techStack: ['Adobe Suite', 'Graphic Design'],
      status: 'Active'
    }
  ];
};

export const getExperience = (lang: Language): Experience[] => {
  const isPl = lang === 'pl';
  return [
    {
      id: 'founder',
      role: isPl ? 'Założyciel & Full-Stack Developer' : 'Founder & Full-Stack Developer',
      company: isPl ? 'Własna działalność' : 'Self-Employed',
      period: isPl ? '2023 - Obecnie' : '2023 - Present',
      description: isPl
        ? [
            'Budowa i monetyzacja Deeplomai, narzędzia SaaS opartego na AI.',
            'Zarządzanie wieloma projektami freelance jednocześnie.',
            'Specjalizacja w integracjach płatności (Stripe) i workflow AI.'
          ]
        : [
            'Built and monetized Deeplomai, an AI-powered SaaS.',
            'Manage multiple freelance projects simultaneously.',
            'Specialized in integrating payment systems (Stripe) and AI workflows.'
          ]
    },
    {
      id: 'freelance',
      role: isPl ? 'Freelance Web Developer' : 'Freelance Web Developer',
      company: isPl ? 'Projekty dla Klientów' : 'Client Projects',
      period: isPl ? '2023 - Obecnie' : '2023 - Present',
      description: isPl
        ? [
            'Dostarczanie wydajnych platform rezerwacyjnych dla sektora turystycznego.',
            'Optymalizacja SEO i UX dla klientów e-commerce.',
            'Implementacja złożonej logiki filtrowania dla aplikacji data-heavy.'
          ]
        : [
            'Delivered high-performance booking platforms for travel & tourism sector.',
            'Optimized SEO and user experience for e-commerce clients.',
            'Implemented complex filtering logic for data-heavy applications.'
          ]
    }
  ];
};

export const getWhyHire = (lang: Language) => {
  const isPl = lang === 'pl';
  return isPl
    ? [
        "Kompleksowe podejście full-stack od pomysłu do wdrożenia",
        "Udowodnione sukcesy we wdrażaniu zarabiających produktów",
        "Doświadczenie w Fintech (Stripe, bezpieczne transakcje)",
        "Znajomość nowoczesnych integracji AI/LLM"
      ]
    : [
        "Full-stack expertise from concept to deployment",
        "Proven product launches with revenue generation",
        "Deep Fintech experience (Stripe, secure transactions)",
        "Modern AI/LLM integration proficiency"
      ];
};