import {Component, computed} from '@angular/core';
import {langSignal} from '../../../i18n/i18n.signal';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  template: `
    <button
      class="cursor-hover top-4 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-400"
      (click)="toggle()"
      aria-label="Switch language"
    >
      {{ currentLanguageDisplay() }}
    </button>
  `,
})
export class LangSwitcherComponent {
  private readonly supportedLanguages = ['en', 'de'] as const;
  private readonly languageLabels = {
    en: '🇬🇧 EN',
    de: '🇩🇪 DE'
  } as const;

  lang = langSignal;

  currentLanguageDisplay = computed(() =>
    this.languageLabels[this.lang() as keyof typeof this.languageLabels] || '🇬🇧 EN'
  );

  toggle() {
    const nextLanguage = this.getNextLanguage();
    langSignal.set(nextLanguage);
  }

  private getNextLanguage() {
    const currentIndex = this.supportedLanguages.indexOf(this.lang() as any);
    const nextIndex = (currentIndex + 1) % this.supportedLanguages.length;
    return this.supportedLanguages[nextIndex];
  }
}
