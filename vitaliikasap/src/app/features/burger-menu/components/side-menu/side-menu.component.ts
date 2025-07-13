import { Component, input, output } from '@angular/core';
import { LucideIconsModule } from '../../../../shared/modules/lucide-icons/lucide-icons.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [LucideIconsModule, RouterLink, RouterLinkActive, NgClass, NgFor, NgIf],
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
    <div class="fixed inset-0 z-50 flex">
      <!-- Background overlay with fade animation -->
      <div
        class="fixed inset-0 bg-black/30 backdrop-blur-sm"
        @overlay
        (click)="closeMenu()"
      ></div>

      <!-- Side menu with slide animation -->
      <aside
        class="relative z-10 bg-white/90 dark:bg-neutral-900/80 h-full w-80 shadow-2xl p-6 flex flex-col"
        @sideMenu
        (click)="$event.stopPropagation()"
      >
        <!-- Close button -->
        <div class="flex justify-end mb-8">
          <button
            class="p-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-neutral-800 transition-all duration-150"
            (click)="closeMenu()"
          >
            <lucide-icon
              name="x"
              size="28"
              className="text-neutral-800 dark:text-neutral-300 hover:text-indigo-400 transition"
            />
          </button>
        </div>

        <!-- Navigation items -->
        <nav class="flex flex-col gap-2">
          <ng-container *ngFor="let item of items; let idx = index">
            <div class="relative group">
              <a
                [routerLink]="item.route"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: item.route === '' }"
                #rla="routerLinkActive"
                class="flex items-center gap-4 p-4 rounded-xl transition-all duration-150
                       hover:bg-indigo-50 dark:hover:bg-neutral-800 group"
                [class]="{
                  'border-l-4 border-indigo-400 bg-indigo-50 dark:bg-neutral-800': rla.isActive,
                  'border-l-4 border-transparent': !rla.isActive
                }"
                (click)="closeMenu()"
              >
                <lucide-icon
                  [name]="item.icon"
                  [className]="
                    rla.isActive
                      ? 'text-indigo-500'
                      : 'text-neutral-800 dark:text-neutral-300 group-hover:text-indigo-400 transition'
                  "
                  size="28"
                />
                <span
                  class="text-lg font-medium select-none"
                  [class]="{
                    'text-indigo-500': rla.isActive,
                    'text-neutral-800 dark:text-neutral-300 group-hover:text-indigo-400 transition': !rla.isActive
                  }"
                >
                  {{ item.label }}
                </span>
              </a>
            </div>

            <!-- Divider -->
            <div
              *ngIf="idx !== items.length - 1"
              class="w-full mx-4"
              [ngClass]="{
                'border-b-2 border-indigo-400': rla.isActive,
                'border-b border-neutral-200 dark:border-neutral-700': !rla.isActive
              }"
            >
            </div>
          </ng-container>
        </nav>
      </aside>
    </div>
  `
})
export class SideMenuComponent {
  open = input.required<boolean>();
  closed = output<void>();

  items: MenuItem[] = [
    { icon: 'home', label: 'HOME', route: '' },
    { icon: 'user', label: 'ABOUT', route: '/about' },
    { icon: 'briefcase', label: 'RESUME', route: '/resume' },
    { icon: 'layers', label: 'SKILLS', route: '/skills' },
    { icon: 'message-square-more', label: 'TESTIMONIALS', route: '/testimonials' },
    { icon: 'mail', label: 'CONTACT', route: '/contact' },
  ];

  closeMenu() {
    this.closed.emit();
  }
}
