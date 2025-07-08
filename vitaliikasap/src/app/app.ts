import { Component } from '@angular/core';
import { NavComponent } from './shared/ui/components/nav/nav.component';
import { ThemeSwitcherComponent } from './shared/ui/components/theme-switcher/theme-switcher.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, ThemeSwitcherComponent, RouterOutlet],
  template: `
    <app-theme-switcher></app-theme-switcher>
    <app-nav></app-nav>
    <main class="bg-white dark:bg-neutral-800">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App {}
