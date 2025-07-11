import {signal} from '@angular/core';

type Lang = 'en' | 'de' | 'ru';

type Dictionary = {
  [key in Lang]: {
    hireMe: string;
    frontend: string;
    developer: string;
    name: string;
    intro: {
      badge: string;
      title: {
        part1: string;
        name: string;
        role: string;
      };
      description: {
        line1: string;
        line2: string;
        line3: string;
        line4: string;
      };
      downloadCv: string;
    };
    about: {
      badge: string;
      title: string;
      description: string;
      stats: {
        years: string;
        yearsLabel: string;
        projects: string;
        projectsLabel: string;
      };
    };
    resume: {
      badge: string;
      education: {
        title: string;
        description: string;
        items: {
          title: string;
          subtitle: string;
          description: string;
        }[];
      };
      experience: {
        title: string;
        description: string;
        items: {
          title: string;
          subtitle: string;
          description: string;
        }[];
      };
    }
  };
};

const dictionary: Dictionary = {
  en: {
    hireMe: 'Hire Me',
    frontend: 'Frontend',
    developer: 'Developer',
    name: 'Vitalii Kasap',
    intro: {
      badge: 'INTRO',
      title: {
        part1: 'Say Hi from',
        name: 'Vitalii Kasap',
        role: 'Frontend Engineer and Developer',
      },
      description: {
        line1: 'I am passionate about creating modern, high-performance and beautiful interfaces.',
        line2: 'Expertise in Angular/React/TypeScript, clean architecture, UI/UX.',
        line3: 'With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.',
        line4: 'I love turning complex into simple!',
      },
      downloadCv: 'Download CV',
    },
    about: {
      badge: 'ABOUT ME',
      title: 'Crafting stories through Design and Innovation',
      description: `Since beginning my journey as a frontend developer nearly 8 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I’m quietly confident, naturally curious, and perpetually working on improving my chops.`,
      stats: {
        years: '5+',
        yearsLabel: 'YEARS OF EXPERIENCE',
        projects: '20+',
        projectsLabel: 'PROJECTS COMPLETED IN 5 COUNTRIES'
      }
    },
    resume: {
      badge: 'RESUME',
      education: {
        title: 'Education',
        description: 'A strong educational foundation is at the core of my engineering journey. My academic background combines hands-on technical training in web development with advanced university studies in engineering and project management. This blend of technical expertise and strategic leadership helps me build reliable digital solutions and deliver results in dynamic environments.',
        items: [
          {
            title: 'Frontend Developer',
            subtitle: 'FoxmindEd, Kyiv / 03.2020 – 10.2020',
            description: 'Intensive hands-on program focused on modern web development, UI/UX, and best coding practices using JavaScript, Angular, and React. Developed several practical projects and gained a strong foundation in frontend engineering.',
          },
          {
            title: 'Master’s Degree, Project Manager',
            subtitle: 'Odessa National Maritime University / 09.2012 – 07.2013',
            description: 'Comprehensive study of project management methodologies, leadership, and business processes in engineering environments. Graduated with a strong emphasis on effective team and project coordination.',
          },
          {
            title: 'Master’s Degree, Mechanical Engineer',
            subtitle: 'Odessa National Maritime University / 09.2006 – 12.2011',
            description: 'Advanced studies in mechanical engineering, technical systems design, and maintenance. Built solid analytical and problem-solving skills essential for tackling complex engineering tasks.',
          },
        ],
      },
      experience: {
        title: 'Experience',
        description: `My journey in web development began as a hobby when I was 14, building websites and fun applications for friends. After spending a decade working at sea as a marine engineer, I decided to follow my passion for technology and fully transition to frontend engineering—turning what I love into my profession.

My professional experience spans a wide range of projects and teams, from large international enterprises to agile freelance environments. I have led migrations, built scalable architectures, and delivered high-impact features in fast-paced, collaborative settings. This diverse background has given me a holistic view of frontend development—from hands-on coding to cross-functional teamwork and technical leadership.`,
        items: [
          {
            title: 'Frontend Software Engineer',
            subtitle: 'GfK - An NIQ Company, Nuremberg, Germany / 12.2022 – PRESENT',
            description: 'Led migration of legacy applications to Angular (Nx) and React (Zustand, Vite), resulting in significant performance gains and bug reduction. Developed analytics dashboards, internal UI libraries, and role-based management. Ensured high code quality with 90–100% Jest test coverage and stable CI/CD.',
          },
          {
            title: 'Frontend Developer (Freelance / Project-Based)',
            subtitle: 'Odesa, Ukraine / 10.2021 – 12.2022',
            description: 'Created responsive React-based SPAs and marketing websites with fast load speeds and high user retention. Implemented SEO best practices and achieved WCAG 2.1 compliance. Delivered projects independently from scoping to deployment.',
          },
          {
            title: 'Junior Frontend Developer',
            subtitle: 'AmcomSoft, Dnipro, Ukraine / 04.2021 – 10.2021',
            description: 'Built eCommerce interfaces with Angular, REST APIs on Node.js, and enhanced project documentation. Focused on UI component development, bug fixing, and code refactoring, which improved team onboarding and reduced defects.',
          },
          {
            title: 'Web Developer (Freelance)',
            subtitle: 'Odesa, Ukraine / 09.2020 – 04.2021',
            description: 'Developed mobile-first React and Angular websites, reusable SCSS components, and delivered full project lifecycles. Strengthened skills in client communication, technical consulting, and rapid prototyping.',
          },
        ]
      }
    },
  },
  de: {
    hireMe: 'Einstellen',
    frontend: 'Frontend',
    developer: 'Entwickler',
    name: 'Vitalii Kasap',
    intro: {
      badge: 'EINFÜHRUNG',
      title: {
        part1: 'Hallo, ich bin',
        name: 'Vitalii Kasap',
        role: 'Frontend-Entwickler',
      },
      description: {
        line1: 'Ich bin leidenschaftlich an der Erstellung moderner, leistungsstarker und schöner Benutzeroberflächen interessiert.',
        line2: 'Expertise in Angular/React/TypeScript, sauberer Architektur, UI/UX.',
        line3: 'Mit einem soliden Fundament an Designprinzipien und einem scharfen Auge für Details bin ich darauf spezialisiert, komplexe Ideen in benutzerfreundliche Schnittstellen umzusetzen, die fesseln und einbeziehen.',
        line4: 'Ich liebe es, Komplexes zu vereinfachen!',
      },
      downloadCv: 'Lebenslauf herunterladen',
    },
    about: {
      badge: 'ÜBER MICH',
      title: 'Geschichten gestalten durch Design und Innovation',
      description: `Seit ich vor fast 8 Jahren meine Karriere als Frontend-Entwickler begonnen habe, habe ich für Agenturen gearbeitet, Startups beraten und mit talentierten Menschen zusammengearbeitet, um digitale Produkte für Unternehmen und Privatkunden zu entwickeln. Ich bin selbstbewusst, neugierig und arbeite ständig daran, meine Fähigkeiten zu verbessern.`,
      stats: {
        years: '5+',
        yearsLabel: 'JAHRE ERFAHRUNG',
        projects: '20+',
        projectsLabel: 'PROJEKTE IN 5 LÄNDERN'
      }
    },
    resume: {
      badge: 'RESUME',
      education: {
        title: 'Ausbildung',
        description: 'Ein solides Bildungsfundament bildet das Herzstück meines Werdegangs als Ingenieur. Mein akademischer Hintergrund verbindet praxisnahe technische Ausbildung im Bereich Webentwicklung mit weiterführenden Universitätsstudien in Ingenieurwissenschaften und Projektmanagement. Diese Kombination aus technischer Expertise und strategischer Führungskompetenz ermöglicht es mir, zuverlässige digitale Lösungen zu entwickeln und Ergebnisse in dynamischen Umgebungen zu liefern.',
        items: [
          {
            title: 'Frontend-Entwickler',
            subtitle: 'FoxmindEd, Kiew / 03.2020 – 10.2020',
            description: 'Intensives Praxisprogramm mit Fokus auf moderne Webentwicklung, UI/UX und bewährte Programmiermethoden unter Verwendung von JavaScript, Angular und React. Entwicklung mehrerer praxisorientierter Projekte und fundierte Kenntnisse im Frontend-Engineering erworben.',
          },
          {
            title: 'Masterabschluss, Projektmanagement',
            subtitle: 'Odessa Nationale Maritime Universität / 09.2012 – 07.2013',
            description: 'Umfassendes Studium der Projektmanagement-Methoden, Führung und Geschäftsprozesse in technischen Umgebungen. Abschluss mit Schwerpunkt auf effektive Team- und Projektkoordination.',
          },
          {
            title: 'Masterabschluss, Maschinenbauingenieur',
            subtitle: 'Odessa Nationale Maritime Universität / 09.2006 – 12.2011',
            description: 'Vertiefte Studien in Maschinenbau, Konstruktion technischer Systeme und Wartung. Ausgeprägte analytische und problemlösende Fähigkeiten zur Bewältigung komplexer technischer Aufgaben entwickelt.',
          },
        ],
      },
      experience: {
        title: 'Berufserfahrung',
        description: `Meine Reise in die Webentwicklung begann als Hobby im Alter von 14 Jahren – ich erstellte Websites und kleine Anwendungen für Freunde. Nach zehn Jahren Arbeit auf See als Schiffbauingenieur entschied ich mich, meiner Leidenschaft für Technologie zu folgen und vollständig in die Frontend-Entwicklung zu wechseln. So wurde mein Hobby zu meinem Beruf.

Meine berufliche Erfahrung umfasst eine Vielzahl von Projekten und Teams, von großen internationalen Unternehmen bis hin zu agilen Freelance-Umgebungen. Ich habe Migrationen geleitet, skalierbare Architekturen aufgebaut und funktionsstarke Features in dynamischen, kooperativen Teams entwickelt. Dieser vielfältige Hintergrund gibt mir einen ganzheitlichen Blick auf die Frontend-Entwicklung – von praktischer Programmierung bis zu interdisziplinärer Teamarbeit und technischer Führung.`,
        items: [
          {
            title: 'Frontend Software Engineer',
            subtitle: 'GfK - Ein Unternehmen der NIQ, Nürnberg, Deutschland / 12.2022 – HEUTE',
            description: 'Leitung der Migration von Legacy-Anwendungen zu Angular (Nx) und React (Zustand, Vite) mit deutlichen Leistungssteigerungen und weniger Bugs. Entwicklung von Analytics-Dashboards, internen UI-Bibliotheken und rollenbasierter Verwaltung. Sicherstellung hoher Code-Qualität mit 90–100% Testabdeckung (Jest) und stabilen CI/CD-Prozessen.',
          },
          {
            title: 'Frontend-Entwickler (Freelance / Projektbasiert)',
            subtitle: 'Odessa, Ukraine / 10.2021 – 12.2022',
            description: 'Entwicklung responsiver SPAs und Marketing-Websites auf Basis von React mit schnellen Ladezeiten und hoher Nutzerbindung. Umsetzung von SEO-Best Practices und Einhaltung von WCAG 2.1. Eigenverantwortliche Projektumsetzung von der Planung bis zum Deployment.',
          },
          {
            title: 'Junior Frontend-Entwickler',
            subtitle: 'AmcomSoft, Dnipro, Ukraine / 04.2021 – 10.2021',
            description: 'Erstellung von E-Commerce-Interfaces mit Angular und REST-APIs auf Node.js. Optimierung der Projektdokumentation, Entwicklung von UI-Komponenten, Bugfixing und Refactoring für eine bessere Team-Einarbeitung und weniger Fehler.',
          },
          {
            title: 'Webentwickler (Freelance)',
            subtitle: 'Odessa, Ukraine / 09.2020 – 04.2021',
            description: 'Entwicklung von mobilen Websites mit React und Angular, Wiederverwendung von SCSS-Komponenten und komplette Projektabwicklung. Stärkung der Kundenkommunikation, technische Beratung und schnelles Prototyping.',
          },
        ]
      }

    }
  },
  ru: {
    hireMe: 'Нанять',
    frontend: 'Фронтенд',
    developer: 'Разработчик',
    name: 'Виталий Касап',
    intro: {
      badge: 'ПРИВЕТСТВИЕ',
      title: {
        part1: 'Привет, я',
        name: 'Виталий Касап',
        role: 'Frontend Разработчик',
      },
      description: {
        line1: 'Я увлечён созданием современных, производительных и красивых интерфейсов.',
        line2: 'Экспертиза в Angular/TypeScript, чистой архитектуре, UI/UX.',
        line3: 'Обладая глубокими познаниями в принципах дизайна и вниманием к деталям, я специализируюсь на воплощении сложных идей в удобные для пользователя интерфейсы, которые увлекают и вовлекают.',
        line4: 'Люблю превращать сложное — в простое!',

      },
      downloadCv: 'Скачать резюме',
    },
    about: {
      badge: 'ОБО МНЕ',
      title: 'Создаю истории через дизайн и инновации',
      description: `С тех пор, как я начал свой путь фронтенд-разработчика почти 8 лет назад, я работал удалённо в агентствах, консультировал стартапы и сотрудничал с талантливыми людьми над созданием цифровых продуктов как для бизнеса, так и для обычных пользователей. Я сдержанно уверен в себе, от природы любознателен и постоянно работаю над совершенствованием своих навыков.`,
      stats: {
        years: '5+',
        yearsLabel: 'ЛЕТ ОПЫТА',
        projects: '20+',
        projectsLabel: 'ПРОЕКТОВ В 5 СТРАНАХ'
      }
    },
    resume: {
      badge: 'РЕЗЮМЕ',
      education: {
        title: 'Education',
        description: 'A strong educational foundation is at the core of my engineering journey. My academic background combines hands-on technical training in web development with advanced university studies in engineering and project management. This blend of technical expertise and strategic leadership helps me build reliable digital solutions and deliver results in dynamic environments.',
        items: [
          {
            title: 'Frontend Developer',
            subtitle: 'FoxmindEd, Kyiv / 03.2020 – 10.2020',
            description: 'Intensive hands-on program focused on modern web development, UI/UX, and best coding practices using JavaScript, Angular, and React. Developed several practical projects and gained a strong foundation in frontend engineering.',
          },
          {
            title: 'Master’s Degree, Project Manager',
            subtitle: 'Odessa National Maritime University / 09.2012 – 07.2013',
            description: 'Comprehensive study of project management methodologies, leadership, and business processes in engineering environments. Graduated with a strong emphasis on effective team and project coordination.',
          },
          {
            title: 'Master’s Degree, Mechanical Engineer',
            subtitle: 'Odessa National Maritime University / 09.2006 – 12.2011',
            description: 'Advanced studies in mechanical engineering, technical systems design, and maintenance. Built solid analytical and problem-solving skills essential for tackling complex engineering tasks.',
          },
        ],
      },
      experience: {
        title: 'Опыт работы',
        description: `Мой путь в веб-разработке начался с хобби в 14 лет — я создавал сайты и небольшие приложения для друзей. После десяти лет работы в море инженером-механиком я решил следовать своей страсти к технологиям и полностью перейти во frontend-разработку, превратив любимое дело в профессию.

Мой профессиональный опыт охватывает широкий спектр проектов и команд: от крупных международных компаний до гибкой работы на фрилансе. Я руководил миграцией проектов, строил масштабируемые архитектуры и реализовывал важные функции в динамичной командной среде. Такой разносторонний опыт дал мне целостное понимание frontend-разработки — от практического программирования до командной работы и технического лидерства.`,
        items: [
          {
            title: 'Frontend Software Engineer',
            subtitle: 'GfK — компания NIQ, Нюрнберг, Германия / 12.2022 – по настоящее время',
            description: 'Руководил миграцией легаси-приложений на Angular (Nx) и React (Zustand, Vite), что привело к значительному росту производительности и снижению числа багов. Разрабатывал аналитические дашборды, внутренние UI-библиотеки и систему управления ролями. Обеспечивал высокое качество кода (90–100% покрытие тестами Jest) и стабильный CI/CD.',
          },
          {
            title: 'Frontend-разработчик (Фриланс / проектная работа)',
            subtitle: 'Одесса, Украина / 10.2021 – 12.2022',
            description: 'Создавал адаптивные SPA и маркетинговые сайты на React с высокой скоростью загрузки и удержанием пользователей. Реализовал лучшие практики SEO и соответствие стандарту WCAG 2.1. Самостоятельно вел проекты от оценки до деплоя.',
          },
          {
            title: 'Junior Frontend-разработчик',
            subtitle: 'AmcomSoft, Днепр, Украина / 04.2021 – 10.2021',
            description: 'Разрабатывал eCommerce-интерфейсы на Angular и REST API на Node.js, улучшал проектную документацию. Занимался созданием UI-компонентов, исправлением ошибок и рефакторингом, что повысило качество внедрения новых сотрудников и снизило количество дефектов.',
          },
          {
            title: 'Веб-разработчик (Фриланс)',
            subtitle: 'Одесса, Украина / 09.2020 – 04.2021',
            description: 'Разрабатывал сайты с mobile-first подходом на React и Angular, создавал переиспользуемые SCSS-компоненты и вел полный цикл проектов. Укрепил навыки коммуникации с клиентами, технического консалтинга и быстрого прототипирования.',
          },
        ]
      }

    }
  },
};

export const langSignal = signal<Lang>('en');

// Type for translation keys with nested object support
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends object
    ? `${Extract<Key, string>}.${NestedKeyOf<ObjectType[Key]>}`
    : Extract<Key, string>;
}[keyof ObjectType];

type TranslationKey = NestedKeyOf<typeof dictionary.en>;

export function t(key: TranslationKey): string {
  const lang = langSignal();
  const keys = key.split('.') as Array<keyof any>;
  let result: any = dictionary[lang];

  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key as string;
    }
  }

  return result as string;
}

// Helper function to change language
export function setLanguage(lang: Lang): void {
  langSignal.set(lang);
}

// Helper function to get current language
export function getCurrentLanguage(): Lang {
  return langSignal();
}
