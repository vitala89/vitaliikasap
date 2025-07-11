import { signal } from '@angular/core';

type Lang = 'en' | 'de';

const dictionary = {
  en: {
    hireMe: 'Hire Me',
    frontend: 'Frontend',
    developer: 'Developer',
    name: 'Vitalii Kasap',
  },
  de: {
    hireMe: 'Einstellen',
    frontend: 'Frontend',
    developer: 'Entwickler',
    name: 'Vitalii Kasap',
  },
};

export const langSignal = signal<Lang>('en');

export function t(key: keyof typeof dictionary['en']) {
  const lang = langSignal();
  return dictionary[lang][key];
}
