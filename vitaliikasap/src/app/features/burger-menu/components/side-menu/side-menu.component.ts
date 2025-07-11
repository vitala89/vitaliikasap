import { Component, input, output } from '@angular/core';
import { LucideIconsModule } from '../../../../shared/modules/lucide-icons/lucide-icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [LucideIconsModule, RouterLink],
  styles: [`
    @keyframes slideInMenu {
      from {
        transform: translateX(-150px);
        transition-timing-function: ease-in;
      }
      to {
        transform: translateX(0px);
        transition-timing-function: ease-out;
      }
    }
    @keyframes slideOutMenu {
      from {
        transform: translateX(0);
        transition-timing-function: ease-in;
      }
      to {
        transform: translateX(-300px);
        transition-timing-function: ease-out;
      }
    }
    .side-menu-anim { animation: slideInMenu .5s 1 }
    .side-menu-out { animation: slideOutMenu .5s 1 }

  `],

  template: `
    @if (open()) {
      <div class="fixed inset-0 z-50 flex">
        <!-- Background overlay with animation -->
        <div
          class="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          [class]="{'opacity-0': !open(), 'opacity-100': open()}"
          (click)="closeMenu()"
        ></div>

        <!-- Side menu with animation -->
        <aside
          class="relative z-10 bg-white dark:bg-neutral-900 h-full w-64 shadow-2xl p-6 flex flex-col"
          [class]="{
    'side-menu-anim': open(),
    'side-menu-out': !open()
  }"
          (click)="$event.stopPropagation()"
        >
          <button
            class="self-end mb-8 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            (click)="closeMenu()"
          >
            <lucide-icon name="x" size="28"/>
          </button>
        <nav class="flex flex-col gap-4">
          <a
            routerLink=""
            class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors"
            (click)="closeMenu()"
          >
            <lucide-icon name="home"/>
            Главная
          </a>
          <a
            routerLink="/about"
            class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors"
            (click)="closeMenu()"
          >
            <lucide-icon name="user"/>
            Обо мне
          </a>
          <a
            routerLink="/resume"
            class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors"
            (click)="closeMenu()"
          >
            <lucide-icon name="briefcase"/>
            Резюме
          </a>
          <a
            routerLink="/portfolio"
            class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors"
            (click)="closeMenu()"
          >
            <lucide-icon name="layers"/>
            Портфолио
          </a>
          <a
            routerLink="/contact"
            class="flex items-center gap-3 text-lg font-medium hover:text-emerald-500 transition-colors"
            (click)="closeMenu()"
          >
            <lucide-icon name="mail"/>
            Контакты
          </a>
        </nav>
      </aside>
    </div>
    }
  `,
})
export class SideMenuComponent {
  open = input.required<boolean>();
  closed = output<void>();

  closeMenu() {
    this.closed.emit();
  }
}
