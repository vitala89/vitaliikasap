import { Component, Inject, PLATFORM_ID, computed, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LucideIconsModule } from '../../../modules/lucide-icons/lucide-icons.module';
import { themeSignal } from '../../../../features/animated-bg/services/theme-signal.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [LucideIconsModule],
  template: `
    @if (isBrowser) {
      <button
        (click)="toggle()"
        class="fixed top-4 right-8 z-50 p-2 rounded-full shadow-lg bg-white dark:bg-neutral-800"
        aria-label="Переключить тему"
      >
        <lucide-icon [name]="icon()" [size]="24"></lucide-icon>
      </button>
    }
  `
})
export class ThemeSwitcherComponent {
  isBrowser = false;

  icon = computed(() => themeSignal() === 'dark' ? 'moon' : 'sun');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        themeSignal.set(saved);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeSignal.set('dark');
      }

      effect(() => {
        this.applyTheme(themeSignal());
      });
    }
  }

  toggle() {
    const next = themeSignal() === 'dark' ? 'light' : 'dark';
    themeSignal.set(next);
    // Ничего больше вызывать не нужно, effect сработает автоматически
  }

  private applyTheme(theme: 'dark' | 'light') {
    if (this.isBrowser) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }
}
