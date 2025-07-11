import { signal } from '@angular/core';

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
