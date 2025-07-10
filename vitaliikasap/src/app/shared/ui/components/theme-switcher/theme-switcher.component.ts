import {
  Component,
  computed,
  effect,
  inject,
  PLATFORM_ID
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {LucideIconsModule} from '../../../modules/lucide-icons/lucide-icons.module';
import {themeSignal} from '../../../services/theme-signal.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [LucideIconsModule],
  template: `
    @if (isBrowser) {
      <button
        (click)="toggle()"
        class="fixed top-4 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-400 focus:ring-blue-500 dark:focus:ring-yellow-400"
        [attr.aria-label]="ariaLabel()"
        type="button"
      >
        <lucide-icon
          [name]="iconName()"
          [size]="24"
          class="transition-all duration-300"
        ></lucide-icon>
      </button>
    }
  `
})
export class ThemeSwitcherComponent {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly iconName = computed(() => themeSignal() === 'dark' ? 'moon' : 'sun');

  readonly ariaLabel = computed(() =>
    themeSignal() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );

  constructor() {
    if (this.isBrowser) {
      this.initializeTheme();

      effect(() => {
        this.applyTheme(themeSignal());
      });
    }
  }

  private initializeTheme(): void {
    const saved = localStorage.getItem('theme');

    if (saved === 'dark' || saved === 'light') {
      themeSignal.set(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themeSignal.set('dark');
    }
  }

  toggle(): void {
    const newTheme = themeSignal() === 'dark' ? 'light' : 'dark';
    themeSignal.set(newTheme);
    console.log('Theme switched to:', newTheme);
  }

  private applyTheme(theme: 'dark' | 'light'): void {
    if (!this.isBrowser) return;

    // Apply dark class to html element
    document.documentElement.classList.toggle('dark', theme === 'dark');

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }
}
