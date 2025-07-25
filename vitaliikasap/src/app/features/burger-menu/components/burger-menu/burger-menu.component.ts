import { Component, signal } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { LucideIconsModule } from '../../../../shared/modules/lucide-icons/lucide-icons.module';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [LucideIconsModule, SideMenuComponent],
  template: `
    @if (isOpen()) {
      <app-side-menu [open]="isOpen()" (closed)="closeMenu()"></app-side-menu>
    } @else {
      <button
        class="fixed top-4 left-4 z-50 p-3 rounded-full text-indigo-500 bg-white/70 dark:text-indigo-300 dark:bg-neutral-800/70 shadow-lg transition-all duration-300 hover:scale-120  hover:bg-indigo-50 dark:hover:bg-indigo-800"
        aria-label="Open menu"
        (click)="openMenu()"
      >
        <lucide-icon name="menu" size="32"/>
      </button>
    }
  `
})
export class BurgerMenuComponent {
  private open = signal(false);
  isOpen = () => this.open();

  openMenu() {
    this.open.set(true);
  }

  closeMenu() {
    this.open.set(false);
  }
}
