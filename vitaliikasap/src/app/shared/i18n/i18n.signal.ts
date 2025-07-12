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
    },
    skills: {
      badge: string;
      title: string;
      description: string;
      language: {
        title: string;
        list: Array<{
          name: string;
          value: number;
        }>;
      };
      hard: {
        title: string;
        list: Array<{
          name: string;
          value: number;
          icon: string;
        }>;
      };
      soft: {
        title: string;
        list: string[];
      };
    },
    testimonials: {
      badge: string;
      title: string;
      description: string;
      items: Array<{
        rating: number;
        name: string;
        role: string;
        avatar: string;
        stars: number;
        text: string;
      }>;
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
    skills: {
      badge: 'MY SKILLS',
      title: 'Technologies and tools I work with every day',
      description: '  My skill set is the result of years of hands-on engineering, continuous learning, and curiosity about new technologies. I combine deep expertise in modern frontend frameworks with practical experience across the entire web development stack. Below are some of the key technologies and tools I use to build scalable, user-focused, and maintainable applications.',
      language: {
        title: 'Language Skills',
        list: [
          {name: 'English', value: 75},
          {name: 'Russian', value: 100},
          {name: 'Ukrainian', value: 90},
          {name: 'German', value: 20}
        ]
      },
      hard: {
        title: 'Hard Skills',
        list: [
          { name: 'Angular', value: 95, icon: 'angular' },
          { name: 'React', value: 90, icon: 'react' },
          { name: 'TypeScript', value: 94, icon: 'typescript' },
          { name: 'JavaScript', value: 92, icon: 'javascript' },
          { name: 'HTML5', value: 96, icon: 'html5' },
          { name: 'SCSS/CSS3', value: 90, icon: 'css3' },
          { name: 'StencilJS', value: 80, icon: 'stenciljs' },
          { name: 'Redux', value: 85, icon: 'redux' },
          { name: 'Nx', value: 80, icon: 'nx' },
          { name: 'Node.js', value: 78, icon: 'nodejs' },
          { name: 'Express.js', value: 75, icon: 'express' },
          { name: 'Jest', value: 82, icon: 'jest' },
          { name: 'Docker', value: 70, icon: 'docker' },
          { name: 'Git', value: 88, icon: 'git' },
          { name: 'Webpack', value: 77, icon: 'webpack' },
          { name: 'Vite', value: 80, icon: 'vite' },
          { name: 'Figma', value: 65, icon: 'figma' },
          { name: 'REST API', value: 90, icon: 'api' },
          { name: 'CI/CD', value: 75, icon: 'cicd' },
          { name: 'React Native', value: 30, icon: 'react' },
        ]
      },
      soft: {
        title: 'Soft Skills',
        list: [
          'Teamwork',
          'Communication',
          'Problem Solving',
          'Time Management',
          'Adaptability',
          'Attention to Detail',
          'Critical Thinking',
          'Self-motivation',
          'Creativity',
          'Agile Mindset',
          'Continuous Learning',
          'Collaboration',
          'Leadership',
          'Empathy',
          'Conflict Resolution',
          'Client Orientation',
          'Accountability'
        ]
      }
    },
    testimonials: {
      badge: 'TESTIMONIALS',
      title: 'Feedback from colleagues and managers',
      description: 'A few words from those who have worked with me.',
      items: [
        {
          rating: 99,
          name: 'Maksimilian Koita',
          role: 'Driving Innovation and Business Growth as a Product Owner at NIQ/GFK',
          avatar: 'testimonials/koita.jpeg',
          stars: 5,
          text: 'I had the pleasure of working with Vitalii, an outstanding front-end engineer whose technical skills and attention to detail consistently impressed me. His ability to create seamless, user-friendly interfaces and solve complex design challenges made a significant impact on our projects. Beyond his expertise, Vitalii was a collaborative and reliable team member, always willing to support others and share valuable insights. I highly recommend Vitalii to any team looking for a skilled and dedicated front-end developer.'
        },
        {
          rating: 99,
          name: 'TEJASWINI MAHARANA',
          role: 'Junior Software Test Engineer | QA and Testing at NIQ/GFK',
          avatar: 'testimonials/teja.jpeg',
          stars: 5,
          text: 'I worked alongside Vitalii for several years, and his contributions as a front-end engineer consistently elevated the quality of our products. He brings a thoughtful, user-first mindset to every project, combining technical precision with an intuitive understanding of design and usability.\n' +
            '\n' +
            'Vitalii has a natural ability to break down complex UI problems and deliver clean, maintainable solutions. He\'s proactive, dependable, and always engaged—whether he\'s building new features or optimizing performance . His calm, solution-oriented approach makes him a key asset on any engineering team.\n' +
            '\n' +
            'I’d strongly recommend Vitalii to any organization looking for a front-end developer who brings both technical depth and collaborative spirit to the table.'
        },
        {
          rating: 99,
          name: 'Philipp Bruchner',
          role: 'Senior Front-end Software Engineer at NIQ/GFK',
          avatar: 'testimonials/bruchner.jpeg',
          stars: 5,
          text: 'I had the pleasure of working in parallel with Vitalii within the same frontend chapter, and he consistently stood out as a humble, approachable, and highly capable engineer. Despite being on different teams, it was easy to recognize his quick perception and pragmatic approach to problem-solving. Vitalii brings calm focus and solid judgment to his work - qualities that make collaboration with him both effective and enjoyable. A great asset to any team.'
        },
        {
          rating: 99,
          name: 'Maximilian Sponsel',
          role: 'Data Scientist at NIQ/GFK',
          avatar: 'testimonials/sponsel.jpeg',
          stars: 5,
          text: 'I had the pleasure of working with Vitalii for a few years. His front-end capabilities massively helped us in improving and extending our internal product and improve our client adoption. \n' +
            '\n' +
            'He was always willing to go beyond to achieve the next steps in the project phases. As a teammate he was always approachable and ready to help! \n' +
            '\n' +
            'I can dearly recommend hin to anyone looking to hire a skilled engineer and empethatic teammate!'
        },
        {
          rating: 99,
          name: 'Mahesh S Manjunatha',
          role: 'Machine Learning Engineer at NIQ/GFK',
          avatar: 'testimonials/manjunatha.jpeg',
          stars: 5,
          text: 'I had the pleasure of working with Vitalii Kasap on design and building of AI systems for outlier detection in the customer data for providing market insights. \n' +
            '\n' +
            'He consistently demonstrated excellent software engineering skills like JavaScript/jQuery , Angular, React etc. He has strong analytical abilities and excellent communication.\n' +
            'He is a valuable asset to any team and I highly recommend him for future opportunities.'
        },
        {
          rating: 99,
          name: 'Pricillia Gunawan',
          role: 'Agile Coach | Digital & Agile Transformation at NIQ/GFK',
          avatar: 'testimonials/gunawan.jpeg',
          stars: 5,
          text: 'I had the pleasure of working with Vitalii, and was always impressed by his positive attitude, team spirit, and eagerness to learn. He’s a friendly and collaborative front-end engineer who brings great energy to any team.\n' +
            'Vitalii also shows strong potential and a real commitment to improvement. He’s a joy to work with, and I’m confident he’ll thrive in the right environment. Any team would be lucky to have him! :)'
        },
        {
          rating: 99,
          name: 'Dmitri Vasilev',
          role: 'Principal Software Engineer/Tech Lead Data Enrichment at NIQ/GFK',
          avatar: 'testimonials/vasilev.jpeg',
          stars: 5,
          text: 'I wholeheartedly recommend Vitalii, a promising Software Engineer I worked with over two years. Vitalii possesses a good knowledge of front-end technologies like Angular and consistently produces high-quality work, demonstrating a strong commitment to excellence. He proved his adaptability by successfully contributing to projects across two different teams, embracing new challenges with ease. What truly stands out is his remarkable willingness and ability to quickly learn and adopt new technologies and best practices. Coupled with his genuine and open communication style, Vitalii is an excellent team player with immense potential. \n' +
            'I\'m confident he will continue to achieve great things in his career.'
        },
        {
          rating: 99,
          name: 'Ibrahim Izirov ',
          role: 'Software Engineer at NIQ/GFK',
          avatar: 'testimonials/izirov.jpeg',
          stars: 5,
          text: 'I had the pleasure of working closely with Vitalii for over two years, and I can confidently say he is one of the most reliable and capable front-end engineers I’ve collaborated with. His strong command of Angular and modern front-end practices consistently translated into clean, maintainable, and efficient code. What impressed me most was Vitalii’s mindset—he approaches challenges with curiosity and determination, always eager to expand his skill set and stay aligned with evolving standards\n' +
            'I have no doubt that he will continue to excel in any engineering team lucky to have him.'
        },
        {
          rating: 99,
          name: 'Ivan Sirosh',
          role: 'Principal Software Engineer at NIQ/GFK',
          avatar: 'testimonials/sirosh.jpeg',
          stars: 5,
          text: 'I supervised Vitalii at our previous company. Together, we implemented several projects where he consistently demonstrated strong frontend development skills, quickly picking up tasks and delivering reliable solutions.\n' +
            '\n' +
            'Over time, Vitalii demonstrated the potential to grow into a senior role, designing and building complex, high-load frontend applications. He was a key contributor to the project success and provided valuable support to other teams in handling complex feature requirements.\n' +
            '\n' +
            'I highly recommend Vitalii as a frontend developer capable of delivering high-quality technical solutions and making a strong impact on your organization.'
        },
        {
          rating: 99,
          name: 'Martin Georgiev',
          role: 'Delivery Lead / Senior Business Analyst at NIQ/GFK',
          avatar: 'testimonials/georgiev.jpeg',
          stars: 5,
          text: 'I had the pleasure of working with Vitalii during a critical time when our team urgently needed strong front-end expertise. He joined us when almost everyone else had left, but in no time, he rebuilt our entire application with outstanding speed, precision, and efficiency. His code was clean and flawless, and everything worked perfectly from day one. Beyond his technical skills, working with him was incredibly easy – he maintained clear communication and delivered results. Vitalii is the kind of developer every team dreams of: highly professional, reliable, and delivering beyond expectations. I highly recommend him for any front-end role.'
        },
      ]
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

    },
    skills: {
      badge: 'MEINE FÄHIGKEITEN',
      title: 'Technologien und Tools, die ich täglich verwende',
      description: 'Mein Skillset ist das Ergebnis jahrelanger praktischer Erfahrung, kontinuierlichen Lernens und echter Neugier für neue Technologien. Ich kombiniere fundiertes Know-how in modernen Frontend-Frameworks mit praktischer Erfahrung im gesamten Webentwicklungs-Stack. Unten finden Sie einige der wichtigsten Technologien und Werkzeuge, die ich für den Aufbau skalierbarer, benutzerorientierter und wartbarer Anwendungen verwende.',
      language: {
        title: 'Sprachkenntnisse',
        list: [
          { name: 'Englisch', value: 75 },
          { name: 'Russisch', value: 100 },
          { name: 'Ukrainisch', value: 90 },
          { name: 'Deutsch', value: 20 }
        ]
      },
      hard: {
        title: 'Hard Skills',
        list: [
          { name: 'Angular', value: 95, icon: 'angular' },
          { name: 'React', value: 90, icon: 'react' },
          { name: 'TypeScript', value: 94, icon: 'typescript' },
          { name: 'JavaScript', value: 92, icon: 'javascript' },
          { name: 'HTML5', value: 96, icon: 'html5' },
          { name: 'SCSS/CSS3', value: 90, icon: 'css3' },
          { name: 'StencilJS', value: 80, icon: 'stenciljs' },
          { name: 'Redux', value: 85, icon: 'redux' },
          { name: 'Nx', value: 80, icon: 'nx' },
          { name: 'Node.js', value: 78, icon: 'nodejs' },
          { name: 'Express.js', value: 75, icon: 'express' },
          { name: 'Jest', value: 82, icon: 'jest' },
          { name: 'Docker', value: 70, icon: 'docker' },
          { name: 'Git', value: 88, icon: 'git' },
          { name: 'Webpack', value: 77, icon: 'webpack' },
          { name: 'Vite', value: 80, icon: 'vite' },
          { name: 'Figma', value: 65, icon: 'figma' },
          { name: 'REST API', value: 90, icon: 'api' },
          { name: 'CI/CD', value: 75, icon: 'cicd' },
          { name: 'React Native', value: 30, icon: 'react' },
        ]
      },
      soft: {
        title: 'Soziale Kompetenzen',
        list: [
          'Teamarbeit',
          'Kommunikation',
          'Problemlösungsfähigkeit',
          'Zeitmanagement',
          'Anpassungsfähigkeit',
          'Aufmerksamkeit für Details',
          'Kritisches Denken',
          'Selbstmotivation',
          'Kreativität',
          'Agiles Mindset',
          'Lernbereitschaft',
          'Zusammenarbeit',
          'Führungsqualitäten',
          'Empathie',
          'Konfliktlösung',
          'Kundenorientierung',
          'Verantwortungsbewusstsein'
        ]
      }
    },
    testimonials: {
      badge: 'REFERENZEN',
      title: 'Feedback von Kollegen und Managern',
      description: 'Einige Worte von denjenigen, die mit mir gearbeitet haben.',
      items: [
        {
          rating: 99,
          name: 'Maksimilian Koita',
          role: 'Driving Innovation and Business Growth as a Product Owner at NIQ/GFK',
          avatar: 'testimonials/koita.jpeg',
          stars: 5,
          text: 'Ich hatte das Vergnügen, mit Vitalii zu arbeiten, einem herausragenden Frontend-Entwickler, dessen technische Fähigkeiten und Aufmerksamkeit für Details mich durchweg beeindruckten. Seine Fähigkeit, nahtlose, benutzerfreundliche Interfaces zu erstellen und komplexe Designherausforderungen zu lösen, hatte einen erheblichen Einfluss auf unsere Projekte. Über seine Expertise hinaus war Vitalii ein kollaborativer und zuverlässiger Teamkollege, der immer bereit war, andere zu unterstützen und wertvolle Einsichten zu teilen. Ich empfehle Vitalii jedem Team, das nach einem kompetenten und engagierten Frontend-Entwickler sucht.'
        },
        {
          rating: 99,
          name: 'TEJASWINI MAHARANA',
          role: 'Junior Software Test Engineer | QA and Testing at NIQ/GFK',
          avatar: 'testimonials/teja.jpeg',
          stars: 5,
          text: 'Ich arbeitete mehrere Jahre lang mit Vitalii zusammen, und seine Beiträge als Frontend-Entwickler haben die Qualität unserer Produkte kontinuierlich verbessert. Er bringt eine durchdachte, nutzerzentrierte Denkweise in jedes Projekt ein und kombiniert technische Präzision mit einem intuitiven Verständnis für Design und Usability.\n' +
            '\n' +
            'Vitalii hat eine natürliche Fähigkeit, komplexe UI-Probleme zu analysieren und saubere, wartbare Lösungen zu liefern. Er ist proaktiv, zuverlässig und immer engagiert – egal ob er neue Features entwickelt oder die Performance optimiert. Sein ruhiger, lösungsorientierter Ansatz macht ihn zu einer wichtigen Ressource für jedes Engineering-Team.\n' +
            '\n' +
            'Ich würde Vitalii jedem Unternehmen empfehlen, das nach einem Frontend-Entwickler sucht, der sowohl technische Tiefe als auch Teamgeist mitbringt.'
        },
        {
          rating: 99,
          name: 'Philipp Bruchner',
          role: 'Senior Front-end Software Engineer at NIQ/GFK',
          avatar: 'testimonials/bruchner.jpeg',
          stars: 5,
          text: 'Ich hatte das Vergnügen, parallel zu Vitalii im selben Frontend-Chapter zu arbeiten, und er stach durchweg als demütiger, zugänglicher und hochkompetenter Entwickler hervor. Obwohl wir in verschiedenen Teams waren, war es leicht zu erkennen, dass er über schnelle Auffassungsgabe und einen pragmatischen Ansatz zur Problemlösung verfügt. Vitalii bringt ruhige Konzentration und solides Urteilsvermögen in seine Arbeit ein – Eigenschaften, die die Zusammenarbeit mit ihm sowohl effektiv als auch angenehm machen. Eine große Bereicherung für jedes Team.'
        },
        {
          rating: 99,
          name: 'Maximilian Sponsel',
          role: 'Data Scientist at NIQ/GFK',
          avatar: 'testimonials/sponsel.jpeg',
          stars: 5,
          text: 'Ich hatte das Vergnügen, mehrere Jahre mit Vitalii zu arbeiten. Seine Frontend-Fähigkeiten haben uns massiv dabei geholfen, unser internes Produkt zu verbessern und zu erweitern sowie die Akzeptanz bei unseren Kunden zu steigern.\n' +
            '\n' +
            'Er war immer bereit, über das Erwartete hinauszugehen, um die nächsten Schritte in den Projektphasen zu erreichen. Als Teamkollege war er immer zugänglich und hilfsbereit!\n' +
            '\n' +
            'Ich kann ihn jedem wärmstens empfehlen, der einen kompetenten Entwickler und empathischen Teamkollegen sucht!'
        },
        {
          rating: 99,
          name: 'Mahesh S Manjunatha',
          role: 'Machine Learning Engineer at NIQ/GFK',
          avatar: 'testimonials/manjunatha.jpeg',
          stars: 5,
          text: 'Ich hatte das Vergnügen, mit Vitalii Kasap am Design und Aufbau von KI-Systemen für die Ausreißererkennung in Kundendaten zur Bereitstellung von Marktinsights zu arbeiten.\n' +
            '\n' +
            'Er zeigte durchweg exzellente Software-Engineering-Fähigkeiten wie JavaScript/jQuery, Angular, React usw. Er hat starke analytische Fähigkeiten und eine ausgezeichnete Kommunikation.\n' +
            'Er ist eine wertvolle Bereicherung für jedes Team und ich empfehle ihn für zukünftige Möglichkeiten.'
        },
        {
          rating: 99,
          name: 'Pricillia Gunawan',
          role: 'Agile Coach | Digital & Agile Transformation at NIQ/GFK',
          avatar: 'testimonials/gunawan.jpeg',
          stars: 5,
          text: 'Ich hatte das Vergnügen, mit Vitalii zu arbeiten, und war immer beeindruckt von seiner positiven Einstellung, seinem Teamgeist und seiner Lernbereitschaft. Er ist ein freundlicher und kooperativer Frontend-Entwickler, der große Energie in jedes Team einbringt.\n' +
            'Vitalii zeigt auch starkes Potenzial und eine echte Verpflichtung zur Verbesserung. Er ist eine Freude zu arbeiten, und ich bin zuversichtlich, dass er in der richtigen Umgebung gedeihen wird. Jedes Team würde Glück haben, ihn zu haben! :)'
        },
        {
          rating: 99,
          name: 'Dmitri Vasilev',
          role: 'Principal Software Engineer/Tech Lead Data Enrichment at NIQ/GFK',
          avatar: 'testimonials/vasilev.jpeg',
          stars: 5,
          text: 'Ich empfehle Vitalii von ganzem Herzen, einen vielversprechenden Software-Entwickler, mit dem ich über zwei Jahre zusammengearbeitet habe. Vitalii verfügt über gute Kenntnisse von Frontend-Technologien wie Angular und liefert kontinuierlich hochwertige Arbeit ab, was ein starkes Engagement für Exzellenz zeigt. Er bewies seine Anpassungsfähigkeit, indem er erfolgreich zu Projekten in zwei verschiedenen Teams beitrug und neue Herausforderungen mit Leichtigkeit annahm. Was wirklich heraussticht, ist seine bemerkenswerte Bereitschaft und Fähigkeit, schnell neue Technologien und bewährte Praktiken zu erlernen und anzuwenden. Gekoppelt mit seinem authentischen und offenen Kommunikationsstil ist Vitalii ein exzellenter Teamplayer mit enormem Potenzial.\n' +
            'Ich bin zuversichtlich, dass er in seiner Karriere weiterhin großartige Dinge erreichen wird.'
        },
        {
          rating: 99,
          name: 'Ibrahim Izirov ',
          role: 'Software Engineer at NIQ/GFK',
          avatar: 'testimonials/izirov.jpeg',
          stars: 5,
          text: 'Ich hatte das Vergnügen, über zwei Jahre eng mit Vitalii zusammenzuarbeiten, und ich kann mit Sicherheit sagen, dass er einer der zuverlässigsten und kompetentesten Frontend-Entwickler ist, mit denen ich je zusammengearbeitet habe. Seine starke Beherrschung von Angular und modernen Frontend-Praktiken führte kontinuierlich zu sauberem, wartbarem und effizientem Code. Was mich am meisten beeindruckte, war Vitaliis Denkweise – er geht Herausforderungen mit Neugier und Entschlossenheit an, immer bestrebt, seine Fähigkeiten zu erweitern und mit sich entwickelnden Standards Schritt zu halten.\n' +
            'Ich habe keinen Zweifel daran, dass er in jedem Engineering-Team, das das Glück hat, ihn zu haben, weiterhin herausragend abschneiden wird.'
        },
        {
          rating: 99,
          name: 'Ivan Sirosh',
          role: 'Principal Software Engineer at NIQ/GFK',
          avatar: 'testimonials/sirosh.jpeg',
          stars: 5,
          text: 'Ich habe Vitalii in unserem vorherigen Unternehmen betreut. Gemeinsam haben wir mehrere Projekte umgesetzt, bei denen er kontinuierlich starke Frontend-Entwicklungsfähigkeiten zeigte, Aufgaben schnell aufgriff und zuverlässige Lösungen lieferte.\n' +
            '\n' +
            'Mit der Zeit zeigte Vitalii das Potenzial, in eine Senior-Rolle hineinzuwachsen, komplexe, hochbelastete Frontend-Anwendungen zu entwerfen und zu entwickeln. Er war ein wichtiger Beitrag zum Projekterfolg und leistete wertvolle Unterstützung für andere Teams bei der Bewältigung komplexer Feature-Anforderungen.\n' +
            '\n' +
            'Ich empfehle Vitalii als Frontend-Entwickler, der hochwertige technische Lösungen liefern und einen starken Einfluss auf Ihr Unternehmen haben kann.'
        },
        {
          rating: 99,
          name: 'Martin Georgiev',
          role: 'Delivery Lead / Senior Business Analyst at NIQ/GFK',
          avatar: 'testimonials/georgiev.jpeg',
          stars: 5,
          text: 'Ich hatte das Vergnügen, mit Vitalii während einer kritischen Zeit zusammenzuarbeiten, als unser Team dringend starke Frontend-Expertise benötigte. Er kam zu uns, als fast alle anderen gegangen waren, aber in kürzester Zeit baute er unsere gesamte Anwendung mit außergewöhnlicher Geschwindigkeit, Präzision und Effizienz neu auf. Sein Code war sauber und fehlerfrei, und alles funktionierte vom ersten Tag an perfekt. Über seine technischen Fähigkeiten hinaus war die Zusammenarbeit mit ihm unglaublich einfach – er hielt klare Kommunikation aufrecht und lieferte Ergebnisse. Vitalii ist die Art von Entwickler, von der jedes Team träumt: hochprofessionell, zuverlässig und über die Erwartungen hinaus liefernd. Ich empfehle ihn für jede Frontend-Rolle.'
        },
      ]
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
    },
    skills: {
      badge: 'МОИ НАВЫКИ',
      title: 'Технологии и инструменты, с которыми я работаю каждый день',
      description: 'Мой набор навыков — это результат многих лет практического опыта, постоянного обучения и интереса к новым технологиям. Я совмещаю глубокую экспертизу в современных frontend-фреймворках с практическим опытом во всех слоях веб-разработки. Ниже приведены ключевые технологии и инструменты, которые я использую для создания масштабируемых, ориентированных на пользователя и поддерживаемых приложений.',
      language: {
        title: 'Языковые навыки',
        list: [
          { name: 'Английский', value: 75 },
          { name: 'Русский', value: 100 },
          { name: 'Украинский', value: 90 },
          { name: 'Немецкий', value: 20 }
        ]
      },
      hard: {
        title: 'Hard Skills',
        list: [
          { name: 'Angular', value: 95, icon: 'angular' },
          { name: 'React', value: 90, icon: 'react' },
          { name: 'TypeScript', value: 94, icon: 'typescript' },
          { name: 'JavaScript', value: 92, icon: 'javascript' },
          { name: 'HTML5', value: 96, icon: 'html5' },
          { name: 'SCSS/CSS3', value: 90, icon: 'css3' },
          { name: 'StencilJS', value: 80, icon: 'stenciljs' },
          { name: 'Redux', value: 85, icon: 'redux' },
          { name: 'Nx', value: 80, icon: 'nx' },
          { name: 'Node.js', value: 78, icon: 'nodejs' },
          { name: 'Express.js', value: 75, icon: 'express' },
          { name: 'Jest', value: 82, icon: 'jest' },
          { name: 'Docker', value: 70, icon: 'docker' },
          { name: 'Git', value: 88, icon: 'git' },
          { name: 'Webpack', value: 77, icon: 'webpack' },
          { name: 'Vite', value: 80, icon: 'vite' },
          { name: 'Figma', value: 65, icon: 'figma' },
          { name: 'REST API', value: 90, icon: 'api' },
          { name: 'CI/CD', value: 75, icon: 'cicd' },
          { name: 'React Native', value: 30, icon: 'react' },
        ]
      },
      soft: {
        title: 'Гибкие навыки',
        list: [
          'Работа в команде',
          'Коммуникация',
          'Решение проблем',
          'Тайм-менеджмент',
          'Адаптивность',
          'Внимательность к деталям',
          'Критическое мышление',
          'Самомотивация',
          'Креативность',
          'Гибкое мышление (Agile)',
          'Постоянное обучение',
          'Сотрудничество',
          'Лидерство',
          'Эмпатия',
          'Разрешение конфликтов',
          'Ориентация на клиента',
          'Ответственность'
        ]
      }
    },
    testimonials: {
      badge: 'ОТЗЫВЫ',
      title: 'Отзывы коллег и руководителей',
      description: 'Несколько слов от тех, кто работал со мной.',
      items: [
        {
          rating: 99,
          name: 'Максимилиан Койта',
          role: 'Driving Innovation and Business Growth as a Product Owner at NIQ/GFK',
          avatar: 'testimonials/koita.jpeg',
          stars: 5,
          text: 'Я имел удовольствие работать с Виталием, выдающимся frontend-разработчиком, чьи технические навыки и внимание к деталям постоянно впечатляли меня. Его способность создавать бесшовные, удобные для пользователя интерфейсы и решать сложные дизайнерские задачи оказала значительное влияние на наши проекты. Помимо его экспертизы, Виталий был отличным командным игроком, всегда готовым поддержать других и поделиться ценными идеями. Я настоятельно рекомендую Виталия любой команде, которая ищет квалифицированного и преданного frontend-разработчика.'
        },
        {
          rating: 99,
          name: 'ТЕДЖАСВИНИ МАХАРАНА',
          role: 'Junior Software Test Engineer | QA and Testing at NIQ/GFK',
          avatar: 'testimonials/teja.jpeg',
          stars: 5,
          text: 'Я работал с Виталием в течение нескольких лет, и его вклад как frontend-разработчика постоянно повышал качество наших продуктов. Он привносит вдумчивый, пользовательский подход в каждый проект, сочетая техническую точность с интуитивным пониманием дизайна и юзабилити.\n' +
            '\n' +
            'Виталий обладает естественной способностью разбивать сложные UI-проблемы и предоставлять чистые, поддерживаемые решения. Он проактивен, надёжен и всегда вовлечён — будь то разработка новых функций или оптимизация производительности. Его спокойный, ориентированный на решения подход делает его ключевым активом для любой инженерной команды.\n' +
            '\n' +
            'Я настоятельно рекомендую Виталия любой организации, которая ищет frontend-разработчика, который привносит как техническую глубину, так и дух сотрудничества.'
        },
        {
          rating: 99,
          name: 'Филипп Брухнер',
          role: 'Senior Front-end Software Engineer at NIQ/GFK',
          avatar: 'testimonials/bruchner.jpeg',
          stars: 5,
          text: 'Я имел удовольствие работать параллельно с Виталием в одном frontend-отделе, и он постоянно выделялся как скромный, доступный и высококвалифицированный инженер. Несмотря на то, что мы были в разных командах, легко было заметить его быстрое восприятие и прагматичный подход к решению проблем. Виталий привносит спокойную концентрацию и здравые суждения в свою работу — качества, которые делают сотрудничество с ним эффективным и приятным. Отличное дополнение к любой команде.'
        },
        {
          rating: 99,
          name: 'Максимилиан Шпонсель',
          role: 'Data Scientist at NIQ/GFK',
          avatar: 'testimonials/sponsel.jpeg',
          stars: 5,
          text: 'Я имел удовольствие работать с Виталием в течение нескольких лет. Его frontend-способности значительно помогли нам в улучшении и расширении нашего внутреннего продукта и повышении принятия клиентами.\n' +
            '\n' +
            'Он всегда был готов выйти за рамки, чтобы достичь следующих шагов в фазах проекта. Как товарищ по команде он всегда был доступен и готов помочь!\n' +
            '\n' +
            'Я искренне рекомендую его всем, кто хочет нанять квалифицированного инженера и эмпатичного товарища по команде!'
        },
        {
          rating: 99,
          name: 'Махеш С Манджунатха',
          role: 'Machine Learning Engineer at NIQ/GFK',
          avatar: 'testimonials/manjunatha.jpeg',
          stars: 5,
          text: 'Я имел удовольствие работать с Виталием Касапом над проектированием и созданием ИИ-систем для обнаружения выбросов в данных клиентов для предоставления рыночных инсайтов.\n' +
            '\n' +
            'Он постоянно демонстрировал отличные навыки программной инженерии, такие как JavaScript/jQuery, Angular, React и т.д. У него сильные аналитические способности и отличная коммуникация.\n' +
            'Он является ценным активом для любой команды, и я настоятельно рекомендую его для будущих возможностей.'
        },
        {
          rating: 99,
          name: 'Присиллия Гунаван',
          role: 'Agile Coach | Digital & Agile Transformation at NIQ/GFK',
          avatar: 'testimonials/gunawan.jpeg',
          stars: 5,
          text: 'Я имел удовольствие работать с Виталием и всегда был впечатлён его позитивным отношением, командным духом и стремлением к обучению. Он дружелюбный и отзывчивый frontend-разработчик, который привносит отличную энергию в любую команду.\n' +
            'Виталий также показывает сильный потенциал и настоящую приверженность улучшению. С ним радость работать, и я уверен, что он будет процветать в правильной среде. Любая команда была бы счастлива иметь его! :)'
        },
        {
          rating: 99,
          name: 'Дмитрий Васильев',
          role: 'Principal Software Engineer/Tech Lead Data Enrichment at NIQ/GFK',
          avatar: 'testimonials/vasilev.jpeg',
          stars: 5,
          text: 'Я от всего сердца рекомендую Виталия, многообещающего программного инженера, с которым я работал более двух лет. Виталий обладает хорошими знаниями frontend-технологий, таких как Angular, и постоянно производит высококачественную работу, демонстрируя сильную приверженность к совершенству. Он доказал свою адаптивность, успешно внося вклад в проекты двух разных команд, легко принимая новые вызовы. Что действительно выделяется, так это его замечательная готовность и способность быстро изучать и принимать новые технологии и лучшие практики. В сочетании с его искренним и открытым стилем общения, Виталий является отличным командным игроком с огромным потенциалом.\n' +
            'Я уверен, что он будет продолжать достигать великих результатов в своей карьере.'
        },
        {
          rating: 99,
          name: 'Ибрагим Изиров',
          role: 'Software Engineer at NIQ/GFK',
          avatar: 'testimonials/izirov.jpeg',
          stars: 5,
          text: 'Я имел удовольствие тесно работать с Виталием более двух лет, и могу с уверенностью сказать, что он один из самых надёжных и способных frontend-разработчиков, с которыми я сотрудничал. Его сильное владение Angular и современными frontend-практиками постоянно превращалось в чистый, поддерживаемый и эффективный код. Что меня больше всего впечатлило — это мышление Виталия: он подходит к вызовам с любопытством и решимостью, всегда стремясь расширить свои навыки и оставаться в соответствии с развивающимися стандартами.\n' +
            'У меня нет сомнений в том, что он будет продолжать превосходить результаты в любой инженерной команде, которой повезёт его иметь.'
        },
        {
          rating: 99,
          name: 'Иван Сирош',
          role: 'Principal Software Engineer at NIQ/GFK',
          avatar: 'testimonials/sirosh.jpeg',
          stars: 5,
          text: 'Я руководил Виталием в нашей предыдущей компании. Вместе мы реализовали несколько проектов, где он постоянно демонстрировал сильные навыки frontend-разработки, быстро схватывая задачи и предоставляя надёжные решения.\n' +
            '\n' +
            'Со временем Виталий продемонстрировал потенциал для роста в senior-роль, проектируя и создавая сложные, высоконагруженные frontend-приложения. Он был ключевым участником успеха проекта и оказывал ценную поддержку другим командам в решении сложных требований к функциям.\n' +
            '\n' +
            'Я настоятельно рекомендую Виталия как frontend-разработчика, способного предоставлять высококачественные технические решения и оказывать сильное влияние на вашу организацию.'
        },
        {
          rating: 99,
          name: 'Мартин Георгиев',
          role: 'Delivery Lead / Senior Business Analyst at NIQ/GFK',
          avatar: 'testimonials/georgiev.jpeg',
          stars: 5,
          text: 'Я имел удовольствие работать с Виталием в критическое время, когда наша команда срочно нуждалась в сильной frontend-экспертизе. Он присоединился к нам, когда почти все остальные ушли, но в кратчайшие сроки он перестроил всё наше приложение с выдающейся скоростью, точностью и эффективностью. Его код был чистым и безупречным, и всё работало идеально с первого дня. Помимо его технических навыков, работать с ним было невероятно легко — он поддерживал чёткую коммуникацию и достигал результатов. Виталий — тот тип разработчика, о котором мечтает каждая команда: высокопрофессиональный, надёжный и превосходящий ожидания. Я настоятельно рекомендую его для любой frontend-роли.'
        },
      ]
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
