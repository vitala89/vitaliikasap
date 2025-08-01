import { Component, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { t } from '../../../../shared/i18n/i18n';
import {LucideIconsModule} from '../../../../shared/modules/lucide-icons/lucide-icons.module';

type TranslationKey = Parameters<typeof t>[0];

type MenuItem = {
  icon: string;
  labelKey: TranslationKey;
  route: string;
};

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LogoComponent, LucideIconsModule],
  animations: [
    trigger('sideMenu', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ]),
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ],
  template: `
    @if (open()) {
      <div class="fixed inset-0 z-5000 flex">
        <!-- Background overlay with fade animation -->
        <div
          class="fixed inset-0 bg-black/30 backdrop-blur-sm"
          @overlay
          (click)="closeMenu()"
        ></div>

        <!-- Side menu with slide animation -->
        <aside
          class="relative z-10 bg-white/90 dark:bg-neutral-900/80 h-full w-80 shadow-2xl flex flex-col"
          @sideMenu
          (click)="$event.stopPropagation()"
        >
          <!-- Close button -->
          <div class="flex justify-between items-center px-4 py-2">
            <div class="w-24 h-24">
              <app-logo [size]="32" [useGradient]="true"/>
            </div>
            <button
              class="p-2 hover:bg-indigo-50 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-all duration-150 rounded-full"
              (click)="closeMenu()"
              aria-label="Close menu"
            >
              <lucide-icon
                name="x"
                size="28"
                class="text-neutral-800 dark:text-neutral-300 hover:text-indigo-400 transition cursor-pointer"
              />
            </button>
          </div>

          <!-- Navigation items -->
          <nav class="flex flex-col">
            @for (item of items; track item.route; let idx = $index) {
              <div class="relative group">
                <a
                  [routerLink]="item.route"
                  routerLinkActive="active"
                  [routerLinkActiveOptions]="{ exact: item.route === '' }"
                  #rla="routerLinkActive"
                  class="flex items-center gap-4 p-4 transition-all duration-150 hover:bg-indigo-50 dark:hover:bg-neutral-800 group"
                  [class.border-l-4]="true"
                  [class.border-indigo-400]="rla.isActive"
                  [class.bg-indigo-50]="rla.isActive"
                  [class.dark:bg-neutral-800]="rla.isActive"
                  [class.border-transparent]="!rla.isActive"
                  (click)="closeMenu()"
                >
                  <lucide-icon
                    [name]="item.icon"
                    [class]="rla.isActive
                      ? 'text-indigo-500'
                      : 'text-neutral-800 dark:text-neutral-300 group-hover:text-indigo-400 transition'"
                    size="28"
                  />
                  <span
                    class="text-lg font-medium select-none transition dark:text-neutral-300"
                    [class.text-indigo-500]="rla.isActive"
                    [class.group-hover:text-indigo-400]="!rla.isActive"
                    [class.text-neutral-800]="!rla.isActive"
                    [class.dark:text-neutral-300]="!rla.isActive"
                  >
                    {{ t(item.labelKey) }}
                  </span>
                </a>

                @if (idx !== items.length - 1) {
                  <div
                    class="w-full"
                    [class.border-b-2]="rla.isActive"
                    [class.border-indigo-400]="rla.isActive"
                    [class.border-b]="!rla.isActive"
                    [class.border-neutral-200]="!rla.isActive"
                    [class.dark:border-neutral-700]="!rla.isActive"
                  ></div>
                }
              </div>
            }
          </nav>
        </aside>
      </div>
    }
  `
})
export class SideMenuComponent {
  protected readonly t = t;

  open = input.required<boolean>();
  closed = output<void>();

  readonly items: MenuItem[] = [
    { icon: 'home', labelKey: 'sideNav.home', route: '' },
    { icon: 'user', labelKey: 'sideNav.about', route: '/about' },
    { icon: 'briefcase', labelKey: 'sideNav.resume', route: '/resume' },
    { icon: 'layers', labelKey: 'sideNav.skills', route: '/skills' },
    { icon: 'message-square-more', labelKey: 'sideNav.testimonials', route: '/testimonials' },
    { icon: 'mail', labelKey: 'sideNav.contact', route: '/contact' },
  ];

  closeMenu() {
    this.closed.emit();
  }
}
