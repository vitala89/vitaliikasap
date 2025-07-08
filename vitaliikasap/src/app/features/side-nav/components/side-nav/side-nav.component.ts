import { Component, signal } from '@angular/core';
import { IconComponent } from '../../../../shared/ui/components/icon/icon.component';
import {RouterLink} from '@angular/router'; // для @for

interface NavItem {
  route: string;
  icon: string;
  label: string;
  active?: boolean;
}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [IconComponent, RouterLink],
  template: `
    <aside [class.w-16]="!expanded()" [class.w-56]="expanded()"
           class="fixed left-0 top-0 z-40 h-full flex flex-col bg-white dark:bg-neutral-800 shadow-lg transition-all duration-200">
      <button type="button"
              (click)="toggle()"
              class="mb-6 p-2 mx-auto rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-800">
        <app-icon [icon]="expanded() ? 'x' : 'menu'" [size]="28"></app-icon>
      </button>
      @for (item of items; track item.route) {
        <a [routerLink]="item.route"
           class="w-12 h-12 flex items-center justify-center rounded-xl text-neutral-400 hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-800 transition mb-2"
           [class.bg-emerald-100]="item.active">
          <app-icon [icon]="item.icon"></app-icon>
          @if (expanded()) {
            <span class="ml-4 text-base font-medium">{{ item.label }}</span>
          }
        </a>
      }
    </aside>
  `
})
export class SideNavComponent {
  expanded = signal(false);

  toggle() {
    this.expanded.update(exp => !exp);
  }

  readonly items: NavItem[] = [
    { route: '', icon: 'home', label: 'Главная', active: true },
    { route: '/about', icon: 'user', label: 'Обо мне' },
    { route: '/resume', icon: 'briefcase', label: 'Резюме' },
    { route: '/portfolio', icon: 'layers', label: 'Портфолио' },
    { route: '/contact', icon: 'mail', label: 'Контакты' },
  ];
}
