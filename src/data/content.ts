export type Language = "pl" | "en";

export const content = {
  pl: {
    nav: {
      approach: "Podejście",
      projects: "Projekty",
      journey: "Droga",
      contact: "Kontakt",
    },

    hero: {
      label: "Aplikacje webowe • mobilne • API",
      line1: "Tworzę oprogramowanie",
      line2: "które rozwiązuje",
      highlight: "realne",
      afterHighlight: "problemy.",
      description:
        "Zajmuję się tworzeniem aplikacji webowych i mobilnych. Lubię zamieniać pomysły w praktyczne rozwiązania, z których ludzie naprawdę mogą korzystać.",
      primaryButton: "Zobacz projekty",
      secondaryButton: "Kontakt",
    },

    howIWork: {
      label: "Podejście",
      title: "Jak pracuję",
      description:
        "Uważam, że dobre oprogramowanie to coś więcej niż działający kod. Powinno być użyteczne, możliwe do utrzymania i tworzone z konkretnym celem.",
      principles: [
        {
          number: "01",
          title: "Tworzyć z celem",
          description:
            "Lubię tworzyć oprogramowanie, które rozwiązuje realne problemy, zamiast budować projekty tylko po to, żeby wypełnić portfolio.",
        },
        {
          number: "02",
          title: "Ciągle się rozwijać",
          description:
            "Każdy projekt uczy mnie czegoś nowego. Stawiam na naukę przez praktykę i systematyczne rozwijanie umiejętności.",
        },
        {
          number: "03",
          title: "Myśleć długoterminowo",
          description:
            "Cenię czystą architekturę, kod łatwy w utrzymaniu i rozwiązania, które można rozwijać z czasem.",
        },
      ],
    },

    selectedWork: {
      label: "Projekty",
      title: "Projekty tworzone z celem",
      description:
        "Skupiam się na projektach, które rozwiązują realne problemy i pomagają ludziom korzystać z technologii w praktyczny sposób.",
      statusBadge: "W trakcie rozwoju",
      projectType: "Aplikacja mobilna + panel admina + backend API",
      projectTitle: "Pilgrimage Companion",
      projectDescription:
        "System full-stack zaprojektowany do wsparcia organizacji pielgrzymki. Łączy aplikację mobilną, panel administracyjny, backend API oraz relacyjną bazę danych. System obejmuje harmonogramy dni, zarządzanie trasą, postoje, ogłoszenia, śpiewnik i regulamin.",
      stats: [
        {
          label: "Cel",
          value: "Realne użycie",
        },
        {
          label: "Rola",
          value: "Mobile + web + API",
        },
        {
          label: "Status",
          value: "W trakcie",
        },
      ],
      technologiesTitle: "Technologie",
      technologiesDescription:
        "Projekt powstaje jako realny system, a nie jako ćwiczenie z tutoriala. Łączy doświadczenie mobilne dla uczestników, panel administracyjny dla organizatorów oraz backend odpowiedzialny za zarządzanie danymi.",
    },

    journey: {
      label: "Droga",
      title: "Nauka przez tworzenie",
      description:
        "Moja droga jest jeszcze na wczesnym etapie, ale każdy projekt i każde doświadczenie pomaga mi lepiej rozumieć, jak tworzyć dobre oprogramowanie.",
      items: [
        {
          period: "2022 / 2023",
          title: "Początek nauki programowania",
          description:
            "Zacząłem uczyć się programowania w technikum. Z czasem, mimo trudności, coraz bardziej wciągnęło mnie tworzenie praktycznego oprogramowania.",
        },
        {
          period: "Praktyki I",
          title: "Tworzenie aplikacji webowych",
          description:
            "Podczas pierwszych praktyk pracowałem przy aplikacjach webowych, między innymi przy interfejsie CRUD opartym na tabeli, aplikacji połączonej z API oraz dostosowaniu aplikacji webowej do wersji mobilnej.",
        },
        {
          period: "Praktyki II",
          title: "Strony internetowe, WordPress i landing page’e",
          description:
            "Podczas drugich praktyk pracowałem nad stronami internetowymi, stronami opartymi na WordPressie, wdrażaniem landing page na podstawie projektu oraz dodawaniem podstron wspierających SEO.",
        },
        {
          period: "2026",
          title: "Pilgrimage Companion",
          description:
            "Realny projekt łączący aplikację mobilną, panel administracyjny, backend API i relacyjną bazę danych dla organizacji pielgrzymki.",
        },
      ],
    },

    contact: {
      label: "Kontakt",
      title: "Zbudujmy coś użytecznego.",
      description:
        "Jestem otwarty na rozmowy o oprogramowaniu, praktycznych projektach i możliwościach tworzenia aplikacji, które rozwiązują realne problemy.",
      github: "GitHub",
      email: "Email",
    },

    footer: {
      copyright: "© 2026 Mateusz Kosowski",
      note: "Built with care.",
    },
  },

  en: {
    nav: {
      approach: "Approach",
      projects: "Selected Work",
      journey: "Journey",
      contact: "Contact",
    },

    hero: {
      label: "Web apps • Mobile apps • APIs",
      line1: "Building software",
      line2: "that solves",
      highlight: "real",
      afterHighlight: "problems.",
      description:
        "I'm a software developer focused on building web and mobile applications. I enjoy turning ideas into practical software that people can actually use.",
      primaryButton: "View Projects",
      secondaryButton: "Contact",
    },

    howIWork: {
      label: "Approach",
      title: "How I work",
      description:
        "I believe good software is more than just working code. It should be useful, maintainable and built with purpose.",
      principles: [
        {
          number: "01",
          title: "Build with purpose",
          description:
            "I enjoy creating software that solves real problems instead of building projects just to fill a portfolio.",
        },
        {
          number: "02",
          title: "Keep improving",
          description:
            "Every project teaches me something new. I focus on learning through practice and continuously improving my skills.",
        },
        {
          number: "03",
          title: "Think long-term",
          description:
            "I value clean architecture, maintainable code and solutions designed to evolve over time.",
        },
      ],
    },

    selectedWork: {
      label: "Selected Work",
      title: "Projects built with purpose",
      description:
        "I focus on projects that solve real problems and help people use technology in a practical way.",
      statusBadge: "In development",
      projectType: "Mobile app + admin panel + backend API",
      projectTitle: "Pilgrimage Companion",
      projectDescription:
        "A full-stack system designed to support pilgrimage organization. It combines a mobile application, administrative panel, backend API and relational database. The system includes daily schedules, route management, stops, announcements, songbook and regulations.",
      stats: [
        {
          label: "Focus",
          value: "Real-world use",
        },
        {
          label: "Role",
          value: "Mobile + web + API",
        },
        {
          label: "Status",
          value: "In development",
        },
      ],
      technologiesTitle: "Technologies",
      technologiesDescription:
        "Built as a real-world project, not a tutorial. The system connects a mobile experience for participants with an administrative interface for organizers and a backend responsible for data management.",
    },

    journey: {
      label: "Journey",
      title: "Learning by building",
      description:
        "My path is still at an early stage, but every project and experience helps me understand how to build better software.",
      items: [
        {
          period: "2022 / 2023",
          title: "Started learning programming",
          description:
            "I started learning programming in technical school. Over time, despite the challenges, I became more interested in creating practical software.",
        },
        {
          period: "Internship I",
          title: "Web application development",
          description:
            "During my first internship, I worked with web applications, including a CRUD-style table interface, an application connected to an API and adapting a web app into a mobile version.",
        },
        {
          period: "Internship II",
          title: "Websites, WordPress and landing pages",
          description:
            "During my second internship, I worked on websites, WordPress-based pages, landing page implementation based on a design and creating additional pages to support SEO.",
        },
        {
          period: "2026",
          title: "Pilgrimage Companion",
          description:
            "A real-world project combining a mobile application, admin panel, backend API and relational database for pilgrimage organization.",
        },
      ],
    },

    contact: {
      label: "Contact",
      title: "Let’s build something useful.",
      description:
        "I’m open to conversations about software, practical projects and opportunities to build applications that solve real problems.",
      github: "GitHub",
      email: "Email",
    },

    footer: {
      copyright: "© 2026 Mateusz Kosowski",
      note: "Built with care.",
    },
  },
};