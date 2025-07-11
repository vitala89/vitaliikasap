import { Component } from '@angular/core';
import {langSignal} from '../../../i18n/i18n.signal';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [NgIf],
  template: `
    <button
      class="cursor-hover  top-4 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-400 focus:ring-blue-500 dark:focus:ring-yellow-400"
      (click)="toggle()"
      aria-label="Switch language"
    >
      <span *ngIf="lang() === 'en'">🇬🇧 EN</span>
      <span *ngIf="lang() === 'de'">🇩🇪 DE</span>
    </button>
  `,
})
export class LangSwitcherComponent {
  lang = langSignal;

  toggle() {
    langSignal.set(this.lang() === 'en' ? 'de' : 'en');
  }
}
