import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LucideIconsModule} from '../../../../shared/modules/lucide-icons/lucide-icons.module';
import {NgClass} from '@angular/common';
import {t} from '../../../../shared/i18n/i18n';

type TranslationKey = Parameters<typeof t>[0];

type MenuItem = {
  icon: string;
  labelKey: TranslationKey;
  route: string;
};

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [LucideIconsModule, RouterLink, RouterLinkActive, NgClass],
  template: `
    <aside
      class="fixed left-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-1 rounded-[2rem] bg-white/90 py-2 px-1 shadow-lg dark:bg-neutral-900/80"
      style="width: 72px;"
    >
      @for (item of items; track item.route; let isLast = $last) {
        <div class="group relative flex w-full justify-center">
          <a
            [routerLink]="item.route"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.route === '' }"
            #rla="routerLinkActive"
            class="group mb-0.5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-150 hover:bg-indigo-50 dark:hover:bg-neutral-800"
            [class.border-indigo-400]="rla.isActive"
            [class.bg-indigo-50]="rla.isActive"
            [class.dark:bg-neutral-800]="rla.isActive"
            [class.border-transparent]="!rla.isActive"
          >
            <lucide-icon
              [name]="item.icon"
              [className]="rla.isActive
                ? 'text-indigo-500'
                : 'text-neutral-800 dark:text-neutral-300 group-hover:text-indigo-400 transition'"
              size="28"
            ></lucide-icon>
          </a>
          <!-- Tooltip (название секции) -->
          <div
            class="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 select-none rounded-full bg-neutral-900 px-5 py-1.5 text-lg font-bold text-white shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100"
            [style.background]="rla.isActive ? '#232323' : '#232323ee'"
            style="min-width: 92px"
          >
            {{ t(item.labelKey) }}
          </div>
        </div>
        @if (!isLast) {
          <div
            class="w-full"
            [ngClass]="{
              'border-b-2 border-indigo-400': rla.isActive,
              'border-b border-neutral-200 dark:border-neutral-700': !rla.isActive
            }"
          ></div>
        }
      }
    </aside>
  `,
})
export class SideNavComponent {
  readonly items: readonly MenuItem[] = [
    {icon: 'home', labelKey: 'sideNav.home', route: ''},
    {icon: 'user', labelKey: 'sideNav.about', route: '/about'},
    {icon: 'briefcase', labelKey: 'sideNav.resume', route: '/resume'},
    {icon: 'layers', labelKey: 'sideNav.skills', route: '/skills'},
    {icon: 'message-square-more', labelKey: 'sideNav.testimonials', route: '/testimonials'},
    {icon: 'mail', labelKey: 'sideNav.contact', route: '/contact'},
  ];
  protected readonly t = t;
}
