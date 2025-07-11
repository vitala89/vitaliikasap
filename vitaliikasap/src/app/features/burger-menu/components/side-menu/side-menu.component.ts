import { Component, input, output } from '@angular/core';
import { LucideIconsModule } from '../../../../shared/modules/lucide-icons/lucide-icons.module';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [LucideIconsModule, RouterLink],
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
    <div class="fixed inset-0 z-500 flex">
      <!-- Background overlay with fade animation -->
      <div
        class="fixed inset-0 bg-black/30 backdrop-blur-sm"
        @overlay
        (click)="closeMenu()"
      ></div>
      <!-- Side menu with slide animation -->
      <aside
        class="relative z-10 bg-white dark:bg-neutral-900 h-full w-64 shadow-2xl p-6 flex flex-col"
        @sideMenu
        (click)="$event.stopPropagation()"
      >
        <button
          class="self-end mb-8 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          (click)="closeMenu()"
        >
          <lucide-icon name="x" size="28"/>
        </button>
        <nav class="flex flex-col gap-4">
          <a routerLink="" class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors" (click)="closeMenu()">
            <lucide-icon name="home"/> Главная
          </a>
          <a routerLink="/about" class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors" (click)="closeMenu()">
            <lucide-icon name="user"/> Обо мне
          </a>
          <a routerLink="/resume" class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors" (click)="closeMenu()">
            <lucide-icon name="briefcase"/> Резюме
          </a>
          <a routerLink="/portfolio" class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors" (click)="closeMenu()">
            <lucide-icon name="layers"/> Портфолио
          </a>
          <a routerLink="/contact" class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors" (click)="closeMenu()">
            <lucide-icon name="mail"/> Контакты
          </a>
        </nav>
      </aside>
    </div>
  `
})
export class SideMenuComponent {
  open = input.required<boolean>();
  closed = output<void>();

  closeMenu() {
    this.closed.emit();
  }
}
