import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LucideIconsModule} from '../../../../shared/modules/lucide-icons/lucide-icons.module';
import {NgClass, NgFor, NgIf} from '@angular/common';

type MenuItem = {
  icon: string;
  label: string;
  route: string;
  color?: string;
};

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [LucideIconsModule, RouterLink, RouterLinkActive, NgIf, NgFor, NgClass],
  template: `
    <aside
      class="fixed left-4 top-16 z-50 flex flex-col bg-white/90 dark:bg-neutral-900/80 rounded-[2rem] shadow-lg py-2 px-1 gap-1 items-center"
      style="width: 72px;">
      <ng-container *ngFor="let item of items; let idx = index">
        <div class="relative group flex w-full justify-center">
          <a [routerLink]="item.route"
             routerLinkActive="active"
             #rla="routerLinkActive"
             class="w-14 h-14 flex items-center justify-center mb-0.5 transition-all duration-150
                    rounded-xl hover:bg-indigo-50 dark:hover:bg-neutral-800
                    group"
             [class]="{
               'border-l-4 border-indigo-400 bg-indigo-50 dark:bg-neutral-800': rla.isActive,
               'border-l-4 border-transparent': !rla.isActive
             }"
          >
            <lucide-icon [name]="item.icon"
                         [className]="
                           rla.isActive
                             ? 'text-indigo-500'
                             : 'text-neutral-800 dark:text-neutral-300 group-hover:text-indigo-400 transition'
                         "
                         size="28"
            ></lucide-icon>
          </a>
          <!-- Tooltip (название секции) -->
          <div
            class="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none
                   px-5 py-1.5 rounded-full bg-neutral-900 text-white font-bold text-lg shadow-lg select-none"
            [class]="rla.isActive ? '#232323' : '#232323ee'"
            style="min-width: 92px"
          >
            {{ item.label }}
          </div>
        </div>
        <div *ngIf="idx !== items.length - 1"
             class="w-full"
             [ngClass]="{
               'border-b-2 border-indigo-400': rla.isActive,
               'border-b border-neutral-200 dark:border-neutral-700': !rla.isActive,
             }">
        </div>
      </ng-container>
    </aside>
  `,
})
export class SideNavComponent {
  items: MenuItem[] = [
    { icon: 'home', label: 'HOME', route: '' },
    { icon: 'user', label: 'ABOUT', route: '/about' },
    { icon: 'briefcase', label: 'RESUME', route: '/resume' },
    { icon: 'layers', label: 'SKILLS', route: '/skills' },
    { icon: 'message-square-more', label: 'TESTIMONIALS', route: '/testimonials' },
    { icon: 'mail', label: 'CONTACT', route: '/contact' },
    { icon: 'message-circle', label: 'BLOG', route: '/blog' },
    { icon: 'book-open', label: 'NOTES', route: '/notes' },
  ];
}
