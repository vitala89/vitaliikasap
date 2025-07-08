import { Component, Inject, PLATFORM_ID, computed, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LucideIconsModule } from '../../../modules/lucide-icons/lucide-icons.module';

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
  private theme = signal<'dark' | 'light'>('light');

  // icon выбирается реактивно
  icon = computed(() => this.isDark() ? 'moon' : 'sun');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        this.theme.set(saved);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme.set('dark');
      }
      this.applyTheme(this.theme());
    }
  }

  isDark = () => this.theme() === 'dark';

  toggle() {
    const next = this.isDark() ? 'light' : 'dark';
    this.theme.set(next);
    this.applyTheme(next);
  }

  private applyTheme(theme: 'dark' | 'light') {
    if (this.isBrowser) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }
}
