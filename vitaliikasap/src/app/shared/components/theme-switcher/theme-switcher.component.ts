import {
  Component,
  computed,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import {isPlatformBrowser, NgClass} from '@angular/common';
import { LucideIconsModule } from '../../modules/lucide-icons/lucide-icons.module';
import { themeSignal } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [LucideIconsModule, NgClass],
  template: `
    @if (isBrowser) {
      <button
        (click)="toggle()"
        class="cursor-hover top-4 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 text-yellow-400 hover:scale-120 bg-white/70 dark:bg-neutral-800/70 text-indigo-500 dark:text-yellow-400"
        [attr.aria-label]="ariaLabel()"
        type="button"
      >
        <div [ngClass]="{ 'animate-spin': spinning() }"
             style="animation-duration:2s"
        >
          <lucide-icon
            [name]="iconName()"
            [size]="28"
            class="text-lg"
          ></lucide-icon>
        </div>
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

  spinning = signal(true);

  constructor() {
    if (this.isBrowser) {
      this.initializeTheme();
      effect(() => {
        this.applyTheme(themeSignal());
      });
      // Стартовая анимация
      setTimeout(() => this.spinning.set(false), 2000);
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
    this.spinning.set(true);
    setTimeout(() => this.spinning.set(false), 2000);
  }

  private applyTheme(theme: 'dark' | 'light'): void {
    if (!this.isBrowser) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
}
